import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ChevronLeftRoundedIcon from "@mui/icons-material/ChevronLeftRounded";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import type { Meme } from "../../data/memes.ts";

interface MemeCarouselProps {
  memes: Meme[];
  startIndex?: number;
}

const MemeCarousel: React.FC<MemeCarouselProps> = ({ memes, startIndex = 0 }) => {
  const [index, setIndex] = useState(startIndex);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    setIndex(Math.min(startIndex, Math.max(memes.length - 1, 0)));
  }, [startIndex, memes.length]);

  if (!memes.length) return null;

  const go = (next: number, dir: number) => {
    setDirection(dir);
    setIndex((next + memes.length) % memes.length);
  };

  const meme = memes[index];

  return (
    <div className="meme-carousel" aria-roledescription="carousel" aria-label="Dev life memes">
      <div className="meme-carousel__stage">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={meme.image}
            className="meme-carousel__slide"
            custom={direction}
            initial={{ opacity: 0, x: direction >= 0 ? 28 : -28 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction >= 0 ? -28 : 28 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="meme-carousel__situation">{meme.situation}</p>
            <div className="meme-carousel__media">
              <img src={meme.image} alt={meme.alt} />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="meme-carousel__controls">
        <button
          type="button"
          className="meme-carousel__nav"
          onClick={() => go(index - 1, -1)}
          aria-label="Previous meme"
        >
          <ChevronLeftRoundedIcon sx={{ fontSize: 22 }} />
        </button>

        <div className="meme-carousel__dots" role="tablist" aria-label="Meme slides">
          {memes.map((item, i) => (
            <button
              key={item.image}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={`Show meme ${i + 1}`}
              className={`meme-carousel__dot${i === index ? " is-active" : ""}`}
              onClick={() => go(i, i > index ? 1 : -1)}
            />
          ))}
        </div>

        <button
          type="button"
          className="meme-carousel__nav"
          onClick={() => go(index + 1, 1)}
          aria-label="Next meme"
        >
          <ChevronRightRoundedIcon sx={{ fontSize: 22 }} />
        </button>
      </div>

      <p className="meme-carousel__count">
        {index + 1} / {memes.length}
      </p>
    </div>
  );
};

export default MemeCarousel;
