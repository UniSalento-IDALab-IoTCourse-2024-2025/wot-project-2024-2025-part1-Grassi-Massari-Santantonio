import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <p>Progetto FASTGO - Corso di Laurea Magistrale in Ingegneria Informatica</p>
      <p>Università del Salento | Anno Accademico 2024/2025</p>

      {/* --- INIZIO BLOCCO LOGHI FOOTER --- */}
      <div className="footer-logos">
        <img 
          src="https://idalab.unisalento.it/documents/4028181/4032582/ida_logo+news.jpg/77de6d94-c52e-cce6-b24b-a6379ae73346?t=1636564102664" 
          alt="Logo IDA Lab" 
          className="footer-logo" 
        />
        <img 
          src="https://idalab.unisalento.it/o/LabTheme/images/logo_salento.png" 
          alt="Logo Università del Salento" 
          className="footer-logo" 
        />
      </div>
      {/* --- FINE BLOCCO LOGHI FOOTER --- */}

    </footer>
  );
};

export default Footer;