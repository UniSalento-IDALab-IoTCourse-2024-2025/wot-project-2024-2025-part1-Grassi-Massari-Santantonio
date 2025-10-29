import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Section from './components/Section';
import TechnologyCard from './components/TechnologyCard';
import Architecture from './components/Architecture';
import Team from './components/Team';
import Demo from './components/Demo';
import Footer from './components/Footer';
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
         <p>Le limitazioni principali includono la **mancanza di un monitoraggio ambientale continuo** (come temperatura, umidità e vibrazioni) durante il trasporto e l'**assenza di un meccanismo di certificazione verificabile** e immutabile dell'avvenuta consegna.  Questo crea una lacuna in termini di sicurezza alimentare, integrità dei prodotti e fiducia da parte dell'utente finale.</p>
      </Section>

      <Section 
        id="solution" 
        title="La Soluzione: FASTGO"
      >
         <p>FASTGO è un ecosistema completo progettato per gestire in modo ottimizzato e decentralizzato le consegne urbane, integrando tecnologie **Internet of Things (IoT)**, **Intelligenza Artificiale (AI)** e **Blockchain**.</p>
         <p>L'obiettivo è duplice: </p>
          <ul>
             <li>Garantire un **monitoraggio in tempo reale** delle condizioni ambientali durante il trasporto.</li>
            <li>Introdurre un **sistema di certificazione digitale immutabile** degli eventi di consegna, fornendo una prova verificabile e trasparente delle operazioni tramite smart contract e NFT.</li>
          </ul>
        
      </Section>

      <Section 
        id="technologies" 
        title="Tecnologie Utilizzate"
      >
        <div className="tech-grid">
          <TechnologyCard title="IoT e Monitoraggio">
            <p>Utilizziamo un **Raspberry Pi 5** come gateway connesso a un **SensorTile.box PRO** di STMicroelectronics.</p>
            <p>Questo setup raccoglie dati in tempo reale su parametri critici come temperatura (sensore STTS22H), accelerazioni e vibrazioni (giroscopio LSM6DSV16X e accelerometro LIS2DU12).</p>
          </TechnologyCard>
          
          <TechnologyCard title="Edge AI (Intelligenza Artificiale)">
            <p>I dati dei sensori vengono elaborati **localmente sul Raspberry Pi 5** (Edge Computing).</p>
            <p>Un modello di Machine Learning (un **RandomForestClassifier** addestrato in Python con Scikit-learn) analizza i dati per identificare anomalie (es. urti, sbalzi termici) e classificare la qualità della consegna.</p>
          </TechnologyCard>
          
          <TechnologyCard title="Blockchain e NFT">
            <p>La certificazione della consegna è gestita da **Smart Contract** in **Solidity** sulla testnet **Ethereum Sepolia**.</p>
            <p>Al termine di una consegna di qualità, il sistema genera (fa il "minting") di un **NFT** (Non-Fungible Token) come "badge" digitale per il rider, a prova immutabile del servizio. I metadati sono archiviati su **IPFS** tramite Pinata.</p>
          </TechnologyCard>

          <TechnologyCard title="Architettura Full-Stack">
            <p>Le interfacce per cliente e rider sono due app mobile sviluppate in **React Native**.</p>
            <p>Il backend è gestito da **Node.js** (con framework Express), mentre la gestione dei dati e l'autenticazione sono affidate a **Supabase** (basato su PostgreSQL).</p>
          </TechnologyCard>
        </div>
      </Section>

      <Architecture />

      <Team />
      
      <Demo />

      <Footer />
    </div>
  );
}

export default App;