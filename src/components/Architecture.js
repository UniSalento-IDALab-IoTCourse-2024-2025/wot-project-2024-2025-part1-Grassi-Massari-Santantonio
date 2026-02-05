import React from 'react';
import Section from './Section';

const Architecture = () => {
  return (
    <Section id="architecture" title="Architettura del Sistema">
      <div className="architecture-content">
        
        {/* --- DIAGRAMMA ALTO LIVELLO --- */}
        <div className="architecture-diagram" style={{ marginBottom: '3rem' }}>
          <img 
            src={process.env.PUBLIC_URL + "/images/Arc_semplice3.jpeg"} 
            alt="Diagramma di architettura alto livello FASTGO" 
          />
        </div>

        <h3>Panoramica del Progetto</h3>
        <p>
          FastGo è una piattaforma logistica e di food delivery di nuova generazione che integra tecnologie Internet of Things (IoT), Machine Learning e Blockchain per garantire l'integrità delle merci trasportate. A differenza dei servizi di consegna tradizionali, che si limitano a tracciare la posizione geografica del pacco, FastGo sposta il focus sulla <strong>garanzia della qualità</strong> del trasporto. Il sistema monitora attivamente le condizioni fisiche della spedizione (vibrazioni, urti, orientamento e temperatura) durante l'intero processo, utilizzando sensori embedded. Questi dati telemetrici vengono analizzati per calcolare un "Damage Score" (Punteggio di Danno), assicurando che i clienti ricevano i loro ordini in condizioni ottimali e fornendo prove tangibili in caso di deterioramento della merce.
        </p>
        <p>
          Oltre al monitoraggio, la piattaforma introduce un innovativo livello di gamification trasparente: i corrieri (Rider) vengono valutati non tramite recensioni soggettive, ma sulla base della qualità oggettiva della loro guida e della cura nel trasporto. L'eccellenza operativa viene premiata attraverso certificati digitali immutabili (NFT) coniati sulla blockchain di Ethereum. Questo crea un sistema di reputazione "trustless", dove i Rider possono dimostrare professionalmente le proprie competenze e accedere a livelli di servizio superiori, mentre i commercianti e i clienti ottengono una trasparenza senza precedenti sulla filiera distributiva.
        </p>

        <h3 style={{ marginTop: '2.5rem' }}>Dettagli Architetturali</h3>
        <p>
          L'ecosistema FastGo è costruito su una <strong>Architettura a Microservizi</strong> modulare, progettata per garantire scalabilità, tolleranza ai guasti e una netta separazione delle responsabilità. L'infrastruttura backend è composta da cinque servizi core sviluppati in <strong>Spring Boot</strong> (Auth, Client, Rider, Shop e Blockchain), ognuno dei quali gestisce il proprio database <strong>MongoDB</strong> dedicato, aderendo rigorosamente al pattern architetturale <em>Database-per-Service</em> per assicurare il disaccoppiamento dei dati.
        </p>
        <p>La comunicazione tra i servizi sfrutta un approccio di messaggistica ibrido e resiliente:</p>
        <ol style={{ paddingLeft: '2rem', marginBottom: '1.5rem', color: 'var(--text-secondary)' }}>
          <li style={{ marginBottom: '0.5rem' }}><strong>RabbitMQ (AMQP):</strong> Gestisce la sincronizzazione asincrona dei dati tra i microservizi e l'orchestrazione dei processi in stile RPC (Remote Procedure Call), garantendo la coerenza eventuale dell'intero sistema distribuito anche in caso di picchi di carico.</li>
          <li><strong>Mosquitto (MQTT):</strong> Gestisce i flussi di dati provenienti dai dispositivi IoT e invia aggiornamenti di stato in tempo reale alle interfacce frontend tramite WebSockets, permettendo un tracking fluido e reattivo.</li>
        </ol>

        <p>
          Il livello IoT è costituito dal dispositivo <strong>ST Microelectronics SensorTile Box Pro</strong>, controllato da un <strong>RaspberryPi 5</strong> tramite un firmware custom in C++. Questi dispositivi operano nell'edge, acquisendo dati ambientali e inerziali che vengono trasmessi via Bluetooth Low Energy (BLE) all'applicazione mobile del Rider. I dati grezzi vengono poi processati da un <strong>Motore di Inferenza dedicato in Python</strong> a bordo dello stesso RaspberryPi 5, che utilizza un modello Random Forest pre-addestrato per classificare eventi critici di trasporto (come cadute, impatti o ribaltamenti) e calcolare le metriche di stabilità termica.
        </p>
        <p>
          Infine, il <strong>Web3 Gateway</strong> agisce come ponte sicuro verso la tecnologia decentralizzata, interagendo con la testnet <strong>Ethereum Sepolia</strong> tramite la libreria <strong>Web3j</strong>. Questo modulo gestisce l'esecuzione degli Smart Contracts per la notarizzazione degli ordini (rendendo i log di consegna immutabili) e per la distribuzione dei Badge ERC-721, i cui metadati sono ancorati in modo permanente su <strong>IPFS</strong> tramite Pinata. L'esperienza utente è erogata attraverso una dashboard web in React per i clienti, i rider e i negozianti, e un'applicazione mobile cross-platform in React Native che permette ai clienti di ordinare e ai rider di gestire le consegne.
        </p>

        <h3 style={{ marginTop: '2.5rem', marginBottom: '1.5rem' }}>Schema Tecnico dei Flussi Dati</h3>
        {/* --- DIAGRAMMA TECNICO --- */}
        <div className="architecture-diagram">
          <img 
            src={process.env.PUBLIC_URL + "/images/Archittetura.png"} 
            alt="Diagramma Tecnico Microservizi e IoT FastGo" 
          />
        </div>

      </div>
    </Section>
  );
};

export default Architecture;