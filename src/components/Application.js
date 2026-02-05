import React, { useState } from 'react';
import Section from './Section';

// Array con i dati per ogni slide del carosello
const slidesData = [
  {
    image: process.env.PUBLIC_URL + '/images/utente-lista-ristoranti.png',
    description: "Homepage dell'app web utente. Mostra i ristoranti disponibili."
  },
  {
    image: process.env.PUBLIC_URL + '/images/utente-posizione.png',
    description: "App Web Utente. Permette di impostare la destinazione di consegna."
  },
  {
    image: process.env.PUBLIC_URL + '/images/app-rider-home.png',
    description: "Homepage dell'app rider. Mostra una mappa."
  },
  {
    image: process.env.PUBLIC_URL + '/images/app-rider-storico.png',
    description: "Il rider uno storico delle consegne effettuate."
  },
  {
    image: process.env.PUBLIC_URL + '/images/esercente-menu.png',
    description: "App web Esercente. Permette di visualizzare il menù del ristorante."
  },
  {
    image: process.env.PUBLIC_URL + '/images/esercente-ordini.png',
    description: "Homepage dell'app web utente. Mostra i ristoranti disponibili."
  }
];

const Application = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = slidesData.length;

  const nextSlide = () => {
    setCurrentSlide(currentSlide === totalSlides - 1 ? 0 : currentSlide + 1);
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? totalSlides - 1 : currentSlide - 1);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <Section id="application" title="Screenshot dell'Applicazione">
      
      {/* --- INIZIO CAROSELLO --- */}
      <div className="carousel-container">
        {/* Pulsante Precedente */}
        <button className="carousel-btn prev" onClick={prevSlide} aria-label="Slide precedente">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/></svg>
        </button>

        {/* Contenitore Slider */}
        <div className="carousel-slider" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
          {slidesData.map((slide, index) => (
            <div className="carousel-slide" key={index}>
              <img src={slide.image} alt={slide.description} className="carousel-image" />
              <p className="carousel-description">{slide.description}</p>
            </div>
          ))}
        </div>

        {/* Pulsante Successivo */}
        <button className="carousel-btn next" onClick={nextSlide} aria-label="Slide successiva">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/></svg>
        </button>

        {/* Pallini di navigazione */}
        <div className="carousel-dots">
          {slidesData.map((_, index) => (
            <button
              key={index}
              className={`carousel-dot ${currentSlide === index ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Vai alla slide ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>
      {/* --- FINE CAROSELLO --- */}

    </Section>
  );
};

export default Application;