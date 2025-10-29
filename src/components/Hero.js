import React from 'react';

const Hero = () => {
  return (
    <header id="home" className="hero">
      <img src="/images/LogoApp.png" alt="FastGo Logo" className="hero-main-logo" />
      <h1>FASTGO</h1>
        <p>Logistica Urbana Decentralizzata con IoT, AI e Blockchain</p>
      <p style={{fontSize: '1.2rem', color: 'var(--text-secondary)', marginTop: '1rem'}}>
        Progetto per il corso di Internet of Things - Università del Salento
      </p>

      {/* --- INIZIO BLOCCO IMMAGINI --- */}
      <div className="hero-logos">
        <img 
          src="https://idalab.unisalento.it/documents/4028181/4032582/ida_logo+news.jpg/77de6d94-c52e-cce6-b24b-a6379ae73346?t=1636564102664" 
          alt="Logo IDA Lab" 
          className="hero-logo" 
        />
        <img 
          src="https://idalab.unisalento.it/o/LabTheme/images/logo_salento.png" 
          alt="Logo Università del Salento" 
          className="hero-logo" 
        />
      </div>
      {/* --- FINE BLOCCO IMMAGINI --- */}

    </header>
  );
};

export default Hero;