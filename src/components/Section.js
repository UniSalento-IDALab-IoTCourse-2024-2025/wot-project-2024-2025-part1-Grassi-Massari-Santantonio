import React from 'react';

const Section = ({ id, title, children }) => {
  return (
    <section id={id} className="container">
      <div className="section-header">
        <h2>{title}</h2>
      </div>
      <div className="section-content">
        {children}
      </div>
    </section>
  );
};

export default Section;