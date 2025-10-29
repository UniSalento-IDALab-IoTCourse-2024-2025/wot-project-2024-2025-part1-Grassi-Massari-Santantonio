import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Section from './components/Section';
import TechnologyCard from './components/TechnologyCard';
import Architecture from './components/Architecture';
import Team from './components/Team';
import Demo from './components/Demo';
import Footer from './components/Footer';
import Application from './components/Application';
import './index.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      
      <Hero />

      <Section 
        id="problem" 
        title="Il Problema"
      >
         <p>Negli ultimi anni, il settore della logistica urbana e del food delivery ha visto una crescita esponenziale.  Tuttavia, le piattaforme attuali come Deliveroo, Uber Eats e Glovo presentano criticità strutturali.</p>
         <p>Le limitazioni principali includono la <strong>mancanza di un monitoraggio ambientale continuo</strong> (come temperatura, umidità e vibrazioni) durante il trasporto e l'<strong>assenza di un meccanismo di certificazione verificabile</strong> e immutabile dell'avvenuta consegna.  Questo crea una lacuna in termini di sicurezza alimentare, integrità dei prodotti e fiducia da parte dell'utente finale.</p>
      </Section>

      <Section 
        id="solution" 
        title="La Soluzione: FASTGO"
      >
         <p>FASTGO è un ecosistema completo progettato per gestire in modo ottimizzato e decentralizzato le consegne urbane, integrando tecnologie <strong>Internet of Things (IoT)</strong>, <strong>Intelligenza Artificiale (AI)</strong> e <strong>Blockchain</strong>.</p>
         <p>L'obiettivo è duplice: </p>
          <ul>
             <li>Garantire un <strong>monitoraggio in tempo reale</strong> delle condizioni ambientali durante il trasporto.</li>
            <li>Introdurre un <strong>sistema di certificazione digitale immutabile</strong> degli eventi di consegna, fornendo una prova verificabile e trasparente delle operazioni tramite smart contract e NFT.</li>
          </ul>
        
      </Section>

      <Section 
        id="technologies" 
        title="Tecnologie Utilizzate"
      >
        <div className="tech-grid">
          <TechnologyCard title="IoT e Monitoraggio">
            <p>Utilizziamo un <strong>Raspberry Pi 5</strong> come gateway connesso a un <strong>SensorTile.box PRO</strong> di STMicroelectronics.</p>
            <p>Questo setup raccoglie dati in tempo reale su parametri critici come temperatura (sensore STTS22H), accelerazioni e vibrazioni (giroscopio LSM6DSV16X e accelerometro LIS2DU12).</p>
          </TechnologyCard>
          
          <div className="tech-card image-card">
            <img src="/images/sensortile.jpg" alt="Sensor Tile" />
          </div>


          <div className="tech-card image-card">
            <img src="/images/python.jpg" alt="Logo Python per AI" />
          </div>

          <TechnologyCard title="Edge AI (Intelligenza Artificiale)">
            <p>I dati dei sensori vengono elaborati <strong>localmente sul Raspberry Pi 5</strong>.</p>
            <p>Un modello di Machine Learning (un <strong>RandomForestClassifier</strong> addestrato in Python con Scikit-learn) analizza i dati per identificare anomalie (es. urti, sbalzi termici) e classificare la qualità della consegna.</p>
          </TechnologyCard>
          
          <TechnologyCard title="Blockchain e NFT">
            <p>La certificazione della consegna è gestita da <strong>Smart Contract</strong> in <strong>Solidity</strong> sulla testnet <strong>Ethereum Sepolia</strong>.</p>
            <p>Al termine di una consegna di qualità, il sistema genera (fa il "minting") di un <strong>NFT</strong> (Non-Fungible Token) come "badge" digitale per il rider, a prova immutabile del servizio. I metadati sono archiviati su <strong>IPFS</strong> tramite Pinata.</p>
          </TechnologyCard>

           <div className="tech-card image-card">
            <img src="/images/solidity.png" alt="Logo Ethereum per Blockchain" />
          </div>

          <div className="tech-card image-card">
            <img src="/images/React-native-2-logo.png" alt="Logo React Native per Full-Stack" />
          </div>

          <TechnologyCard title="Architettura Full-Stack">
            <p>Le interfacce per cliente e rider sono due app mobile sviluppate in <strong>React Native</strong>.</p>
            <p>Il backend è gestito da <strong>Node.js</strong> (con framework Express), mentre la gestione dei dati e l'autenticazione sono affidate a <strong>Supabase</strong> (basato su PostgreSQL).</p>
          </TechnologyCard>
        </div>
      </Section>

      <Architecture />

      <Application />

      <Team />
      
      <Demo />

      <Footer />
    </div>
  );
}

export default App;