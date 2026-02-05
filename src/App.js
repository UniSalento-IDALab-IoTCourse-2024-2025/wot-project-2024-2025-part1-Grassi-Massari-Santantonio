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
import Repositories from './components/Repositories'; 
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
         <p>La logistica dell'ultimo miglio, specialmente nel food delivery, soffre di una mancanza di trasparenza. I clienti ricevono pacchi danneggiati senza sapere quando o come è avvenuto il danno. Inoltre, i rider vengono valutati solo tramite recensioni soggettive, senza un sistema che premi oggettivamente la qualità del loro lavoro e della guida.</p>
      </Section>

      <Section 
        id="solution" 
        title="La Soluzione: FASTGO"
      >
         <p><strong>FastGo</strong> rivoluziona il delivery spostando il focus sulla <strong>Garanzia di Qualità</strong>. Utilizzando sensori IoT embedded, monitoriamo vibrazioni, urti e temperatura in tempo reale.</p>
         <p>Non solo logistica: introduciamo la <strong>Gamification su Blockchain</strong>. I rider eccellenti ottengono certificati digitali immutabili (NFT) basati sui dati reali di guida, creando un sistema di reputazione affidabile e trasparente.</p>
      </Section>

      <Section 
        id="technologies" 
        title="Tecnologie Utilizzate"
      >
        <div className="tech-grid">
          <TechnologyCard title="IoT & Edge AI">
            <p><strong>SensorTile.box PRO</strong> acquisisce dati inerziali e ambientali.</p>
            <p>Un <strong>Inference Engine Python</strong> esegue un modello Random Forest locale per rilevare incidenti o manipolazioni improprie.</p>
          </TechnologyCard>
          
          <div className="tech-card image-card">
            <img src={process.env.PUBLIC_URL +"/images/sensortile.jpg"} alt="Sensor Tile" />
          </div>

          <div className="tech-card image-card">
            <img src={process.env.PUBLIC_URL +"/images/python.jpg"} alt="Logo Python per AI" />
          </div>

          <TechnologyCard title="Microservizi Backend">
            <p>Architettura distribuita con 5 microservizi <strong>Spring Boot</strong> (Auth, Client, Rider, Shop, Blockchain).</p>
            <p>Comunicazione ibrida: <strong>RabbitMQ</strong> per l'orchestrazione asincrona e <strong>Mosquitto (MQTT)</strong> per la telemetria real-time.</p>
          </TechnologyCard>
          
          <TechnologyCard title="Blockchain & NFT">
            <p>Integrazione con <strong>Ethereum Sepolia</strong> tramite Web3j.</p>
            <p>Smart Contract Solidity per la notarizzazione degli ordini (Tracking) e l'emissione di <strong>Badge NFT (ERC-721)</strong> con metadati su <strong>IPFS (Pinata)</strong>.</p>
          </TechnologyCard>

           <div className="tech-card image-card">
            <img src={process.env.PUBLIC_URL +"/images/solidity.png"} alt="Logo Ethereum per Blockchain" />
          </div>

          <div className="tech-card image-card">
            <img src={process.env.PUBLIC_URL +"/images/React-native-2-logo.png"} alt="Logo React Native per Full-Stack" />
          </div>

          <TechnologyCard title="Frontend Multi-Piattaforma">
            <p>Web Dashboard in <strong>React</strong> per amministratori e negozianti.</p>
            <p>App Mobile Native in <strong>React Native (Expo)</strong> per Clienti e Rider, con integrazione BLE per la connessione diretta ai sensori.</p>
          </TechnologyCard>
        </div>
      </Section>

      <Architecture />

      <Application />

      {/* Nuova Sezione Repository */}
      <Repositories />

      <Team />
      
      <Demo />

      <Footer />
    </div>
  );
}

export default App;