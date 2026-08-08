import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { memeWall, sectionMemes, type Meme } from "../../data/memes.ts";
import MemeCarousel from "./MemeCarousel.tsx";

interface MemeFloatProps {
  activeId: string;
}

/** Keep the hero clear until the visitor has actually started reading. */
const SHOW_AFTER_SCROLL = 320;

const MemeFloat: React.FC<MemeFloatProps> = ({ activeId }) => {
  const [scrolledEnough, setScrolledEnough] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [popupOpen, setPopupOpen] = useState(false);
  const [showCarousel, setShowCarousel] = useState(false);
  const [popupMeme, setPopupMeme] = useState<Meme | null>(null);

  // Warm the cache so swapping sections doesn't flash a caption-only card
  // while the next image loads.
  useEffect(() => {
    [...Object.values(sectionMemes), ...memeWall].forEach((item) => {
      const preload = new Image();
      preload.src = item.image;
    });
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolledEnough(window.scrollY > SHOW_AFTER_SCROLL);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!popupOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setPopupOpen(false);
        setShowCarousel(false);
        setPopupMeme(null);
      }
    };

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [popupOpen]);

  const meme = sectionMemes[activeId];
  const visible = Boolean(meme) && scrolledEnough && !dismissed;

  const openPopup = () => {
    if (!meme) return;
    setPopupMeme(meme);
    setShowCarousel(false);
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
    setShowCarousel(false);
    setPopupMeme(null);
  };

  return (
    <>
      {/* AnimatePresence only tracks show/hide. Swapping the meme is handled by
          remounting the inner block, which avoids exit-animation races on scroll. */}
      <AnimatePresence>
        {visible && (
          <motion.aside
            className="meme-float"
            aria-label="Section meme"
            initial={{ opacity: 0, x: -20, scale: 0.94 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -20, scale: 0.94 }}
            transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
          >
            <button
              type="button"
              className="meme-float__close"
              onClick={(event) => {
                event.stopPropagation();
                setDismissed(true);
              }}
              aria-label="Hide memes"
            >
              <CloseRoundedIcon sx={{ fontSize: 17 }} />
            </button>

            <button type="button" className="meme-float__trigger" onClick={openPopup}>
              <motion.div
                key={activeId}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.28 }}
              >
                <span className="meme-float__label">{meme.situation}</span>
                <img src={meme.image} alt={meme.alt} />
              </motion.div>
            </button>
          </motion.aside>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {popupOpen && popupMeme && (
          <motion.div
            className="meme-popup"
            role="dialog"
            aria-modal="true"
            aria-labelledby="meme-popup-title"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <button
              type="button"
              className="meme-popup__backdrop"
              aria-label="Close meme popup"
              onClick={closePopup}
            />

            <motion.div
              className="meme-popup__panel"
              initial={{ opacity: 0, y: 18, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12, scale: 0.97 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="meme-popup__header">
                <div>
                  <p className="meme-popup__eyebrow">Off the record</p>
                  <h2 id="meme-popup-title" className="meme-popup__title">
                    {showCarousel ? "Dev life, unfiltered" : popupMeme.situation}
                  </h2>
                </div>
                <button
                  type="button"
                  className="meme-popup__close"
                  onClick={closePopup}
                  aria-label="Close"
                >
                  <CloseRoundedIcon sx={{ fontSize: 20 }} />
                </button>
              </div>

              {!showCarousel ? (
                <div className="meme-popup__current">
                  <div className="meme-popup__media">
                    <img src={popupMeme.image} alt={popupMeme.alt} />
                  </div>
                  <button
                    type="button"
                    className="btn btn--primary meme-popup__more"
                    onClick={() => setShowCarousel(true)}
                  >
                    Show more memes
                  </button>
                </div>
              ) : (
                <div className="meme-popup__carousel-wrap">
                  <p className="meme-popup__subtitle">
                    Every bullet point above came with at least one of these moments.
                  </p>
                  <MemeCarousel memes={memeWall} />
                  <button
                    type="button"
                    className="btn btn--ghost btn--sm meme-popup__back"
                    onClick={() => setShowCarousel(false)}
                  >
                    Back to this one
                  </button>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default MemeFloat;
