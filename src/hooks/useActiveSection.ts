import { useEffect, useState } from "react";

/**
 * Tracks which section id is currently centred in the viewport.
 * Shared by the navbar highlight and the floating meme.
 */
export default function useActiveSection(ids: string[], fallback = ids[0]): string {
  const [activeId, setActiveId] = useState(fallback);

  useEffect(() => {
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveId(visible.target.id);
      },
      // A band across the middle half of the viewport rather than a thin line,
      // so short sections like Education still win on intersection ratio.
      { rootMargin: "-25% 0px -25% 0px", threshold: [0, 0.1, 0.25, 0.5, 0.75, 1] }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [ids]);

  return activeId;
}
