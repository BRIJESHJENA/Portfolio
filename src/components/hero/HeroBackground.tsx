import React from "react";

const HeroBackground: React.FC = () => (
  <div className="hero-bg" aria-hidden>
    <div className="hero-bg__mesh hero-bg__mesh--a" />
    <div className="hero-bg__mesh hero-bg__mesh--b" />
    <div className="hero-bg__dots hero-bg__dots--fine" />
    <div className="hero-bg__dots hero-bg__dots--coarse" />
  </div>
);

export default HeroBackground;
