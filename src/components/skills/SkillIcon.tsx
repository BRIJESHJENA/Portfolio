import React, { useState } from "react";

interface SkillIconProps {
  src: string;
  name: string;
}

const FALLBACK = (name: string) =>
  `https://ui-avatars.com/api/?name=${encodeURIComponent(
    name.replace(/[^a-zA-Z0-9+]/g, "").slice(0, 2) || "?"
  )}&background=e6e6ea&color=0b0b0d&size=64&bold=true`;

const SkillIcon: React.FC<SkillIconProps> = ({ src, name }) => {
  const [imgSrc, setImgSrc] = useState(src);

  return (
    <img
      src={imgSrc}
      alt=""
      loading="lazy"
      decoding="async"
      onError={() => {
        if (imgSrc !== FALLBACK(name)) {
          setImgSrc(FALLBACK(name));
        }
      }}
    />
  );
};

export default SkillIcon;
