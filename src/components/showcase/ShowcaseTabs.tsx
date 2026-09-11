import React, { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

export interface ShowcaseTab {
  id: string;
  label: string;
  title: string;
  description: string;
  image: string;
  href?: string;
}

interface ShowcaseTabsProps {
  tabs: ShowcaseTab[];
  intervalMs?: number;
}

const panelVariants = {
  hidden: { opacity: 0, y: 10, scale: 0.99 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.35, ease: [0.23, 1, 0.32, 1] },
  },
  exit: {
    opacity: 0,
    y: -6,
    scale: 0.99,
    transition: { duration: 0.2, ease: [0.23, 1, 0.32, 1] },
  },
};

const ShowcaseMedia: React.FC<{ image: string; title: string; playing: boolean }> = ({
  image,
  title,
  playing,
}) => {
  const reduceMotion = useReducedMotion();

  return (
    <div className="showcase-tabs__media">
      <motion.img
        src={image}
        alt={title}
        className="showcase-tabs__image"
        loading="lazy"
        initial={false}
        animate={
          reduceMotion || !playing
            ? { scale: 1 }
            : { scale: [1, 1.05, 1] }
        }
        transition={
          reduceMotion || !playing
            ? { duration: 0 }
            : { duration: 14, ease: "easeInOut", repeat: Infinity }
        }
        style={{ willChange: "transform" }}
      />
      {!reduceMotion && (
        <>
          <motion.div
            className="showcase-tabs__shine"
            aria-hidden
            animate={
              playing
                ? { x: ["-120%", "220%"] }
                : { x: "-120%" }
            }
            transition={
              playing
                ? { duration: 2.8, ease: "easeInOut", repeat: Infinity, repeatDelay: 4 }
                : { duration: 0 }
            }
          />
          <motion.div
            className="showcase-tabs__glow"
            aria-hidden
            animate={
              playing
                ? { opacity: [0.25, 0.55, 0.25] }
                : { opacity: 0.25 }
            }
            transition={
              playing
                ? { duration: 5, ease: "easeInOut", repeat: Infinity }
                : { duration: 0 }
            }
          />
        </>
      )}
    </div>
  );
};

const ShowcaseTabs: React.FC<ShowcaseTabsProps> = ({ tabs, intervalMs = 9000 }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const goTo = useCallback(
    (index: number) => {
      setActiveIndex((index + tabs.length) % tabs.length);
    },
    [tabs.length]
  );

  useEffect(() => {
    if (paused || tabs.length < 2) return;

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % tabs.length);
    }, intervalMs);

    return () => window.clearInterval(timer);
  }, [paused, tabs.length, intervalMs, activeIndex]);

  if (!tabs.length) return null;

  const activeTab = tabs[activeIndex];

  return (
    <div
      className="showcase-tabs"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      <div className="showcase-tabs__triggers" role="tablist" aria-label="Featured work">
        {tabs.map((tab, index) => (
          <button
            key={tab.id}
            type="button"
            role="tab"
            id={`showcase-tab-${tab.id}`}
            aria-selected={index === activeIndex}
            aria-controls={`showcase-panel-${tab.id}`}
            className={`showcase-tabs__trigger ${index === activeIndex ? "is-active" : ""}`.trim()}
            data-paused={paused || undefined}
            onClick={() => goTo(index)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="showcase-tabs__panels">
        <AnimatePresence mode="wait">
          <motion.section
            key={activeTab.id}
            id={`showcase-panel-${activeTab.id}`}
            role="tabpanel"
            aria-labelledby={`showcase-tab-${activeTab.id}`}
            className="showcase-tabs__panel is-active"
            variants={panelVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className="showcase-tabs__copy">
              <h3 className="showcase-tabs__title">{activeTab.title}</h3>
              <p className="showcase-tabs__desc">{activeTab.description}</p>
              {activeTab.href && (
                <a
                  href={activeTab.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn--brand btn--sm"
                >
                  View live
                </a>
              )}
            </div>

            <ShowcaseMedia
              image={activeTab.image}
              title={activeTab.title}
              playing={!paused}
            />
          </motion.section>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ShowcaseTabs;
