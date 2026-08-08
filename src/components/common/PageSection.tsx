import React from "react";

interface PageSectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
}

const PageSection: React.FC<PageSectionProps> = ({ id, className = "", children }) => (
  <section id={id} className={`page-section ${className}`.trim()}>
    <div className="container">{children}</div>
  </section>
);

export default PageSection;
