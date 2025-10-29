import React from 'react';
import Section from './Section';

const Demo = () => {
  return (
    <Section id="demo" title="Demo del Progetto">
      <div className="video-responsive">
          <iframe 
            width="560" 
            height="315" 
            src="https://www.youtube.com/embed/BV66SkTV1Wg?si=JMoIpw8M12IoF-Ev" 
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
          ></iframe>
        </div>
     
    </Section>
  );
};

export default Demo;