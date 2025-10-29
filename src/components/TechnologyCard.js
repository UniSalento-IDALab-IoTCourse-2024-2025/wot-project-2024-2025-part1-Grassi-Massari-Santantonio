import React from 'react';

const TechnologyCard = ({ title, children }) => {
  return (
    <div className="tech-card">
      <h3>{title}</h3>
      {children}
    </div>
  );
};

export default TechnologyCard;