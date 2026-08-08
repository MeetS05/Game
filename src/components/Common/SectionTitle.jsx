import React, { useEffect, useRef } from 'react';
import './SectionTitle.css';

const SectionTitle = ({ title, subtitle }) => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.2 });

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="section-title-wrapper reveal" ref={sectionRef}>
      <div className="section-title-content">
        <h2 className="section-title">{title}</h2>
        {subtitle && <p className="section-subtitle">{subtitle}</p>}
      </div>
      <div className="section-line"></div>
    </div>
  );
};

export default SectionTitle;