import React from 'react';
import Section from './Section';

const Architecture = () => {
  return (
    <Section id="architecture" title="Architettura del Sistema">
      <div className="architecture-content">
         <p>L'architettura di FASTGO è progettata per essere modulare, scalabile e interoperabile.</p>
         <p>Il flusso collega le app client (React Native) a un backend (Node.js)   che orchestra i dati (Supabase) , l'hardware IoT (Raspberry Pi/SensorTile)  e la blockchain (Ethereum/Solidity).  L'AI opera localmente sul dispositivo IoT.  I metadati degli NFT sono archiviati su IPFS/Pinata.</p>
        
       {/* --- INIZIO DIAGRAMMA DI ARCHITETTURA --- */}
        <div className="architecture-diagram">
          <img 
            src="\images\architettura.jpg" 
            alt="Diagramma di architettura del sistema FASTGO" 
          />
        </div>
        {/* --- FINE DIAGRAMMA DI ARCHITETTURA --- */}
      </div>
    </Section>
  );
};

export default Architecture;