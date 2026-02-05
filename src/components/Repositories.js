import React from 'react';
import Section from './Section';

const repoGroups = [
  {
    category: "Backend & Infrastruttura",
    
    repos: [
      { name: "Auth Service", url: "https://github.com/UniSalento-IDALab-IoTCourse-2024-2025/wot-project-part1-Auth_Service-Grassi-Massari-Santantonio", desc: "Gestione utenti e JWT" },
      { name: "Client Service", url: "https://github.com/UniSalento-IDALab-IoTCourse-2024-2025/wot-project-part2-Client_Service-Grassi-Massari-Santantonio", desc: "Profili clienti" },
      { name: "Rider Service", url: "https://github.com/UniSalento-IDALab-IoTCourse-2024-2025/wot-project-part3-Rider_Service-Grassi-Massari-Santantonio", desc: "Gestione corrieri e Geo" },
      { name: "Shop Service", url: "https://github.com/UniSalento-IDALab-IoTCourse-2024-2025/wot-project-part5-Shop_Service-Grassi-Massari-Santantonio", desc: "Ristoranti e Menu" },
      { name: "Message Broker", url: "https://github.com/UniSalento-IDALab-IoTCourse-2024-2025/wot-project-part4-Message_Broker-Grassi-Massari-Santantonio", desc: "RabbitMQ & Mosquitto" },
    ]
  },
  {
    category: "Frontend & Mobile",
    
    repos: [
      { name: "Frontend Web", url: "https://github.com/UniSalento-IDALab-IoTCourse-2024-2025/wot-project-part8-Frontend-Grassi-Massari-Santantonio", desc: "Dashboard React" },
      { name: "App Rider", url: "https://github.com/UniSalento-IDALab-IoTCourse-2024-2025/wot-project-part15-App_Rider-rassi-Massari-Santantonio", desc: "React Native (BLE)" },
      { name: "App User", url: "https://github.com/UniSalento-IDALab-IoTCourse-2024-2025/wot-project-part15-App_Rider-Grassi-Massari-Santantonio", desc: "React Native (Client)" },
    ]
  },
  {
    category: "IoT, AI & Sensori",
    
    repos: [
      { name: "Sensor Tile Firmware", url: "https://github.com/UniSalento-IDALab-IoTCourse-2024-2025/wot-project-part14-Sensor_Tile-Grassi-Massari-Santantonio", desc: "Firmware C++" },
      { name: "Bluetooth Gateway", url: "https://github.com/UniSalento-IDALab-IoTCourse-2024-2025/wot-project-part11-Bluetooth-Grassi-Massari-Santantonio", desc: "Python Gateway" },
      { name: "Inference Engine", url: "https://github.com/UniSalento-IDALab-IoTCourse-2024-2025/wot-project-part12-Inference-Grassi-Massari-Santantonio", desc: "Analisi dati ML" },
      { name: "AI Training", url: "https://github.com/UniSalento-IDALab-IoTCourse-2024-2025/wot-project-part13-Training-Grassi-Massari-Santantonio", desc: "Script di training" },
    ]
  },
  {
    category: "Blockchain & Web3",
    
    repos: [
      { name: "Blockchain Service", url: "https://github.com/UniSalento-IDALab-IoTCourse-2024-2025/wot-project-part7-BlockchainService-Grassi-Massari-Santantonio", desc: "Web3j Gateway" },
      { name: "NFT Contract", url: "https://github.com/UniSalento-IDALab-IoTCourse-2024-2025/wot-project-part9-Contract_NFT-Grassi-Massari-Santantonio", desc: "Smart Contract ERC721" },
      { name: "Tracking Contract", url: "https://github.com/UniSalento-IDALab-IoTCourse-2024-2025/wot-project-part10-Contract_Blockchain-Grassi-Massari-Santantonio", desc: "Smart Contract Logistica" },
    ]
  }
];

const Repositories = () => {
  return (
    <Section id="repos" title="Codice Sorgente & Repository">
      <div className="repos-container">
        {repoGroups.map((group, idx) => (
          <div key={idx} className="repo-group">
            <h3 className="repo-group-title"><span>{group.icon}</span> {group.category}</h3>
            <div className="repo-list">
              {group.repos.map((repo, rIdx) => (
                <a key={rIdx} href={repo.url} target="_blank" rel="noopener noreferrer" className="repo-card">
                  <div className="repo-header">
                    <svg viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true" fill="currentColor">
                      <path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1H4.5a1 1 0 0 0-1 1v6.5h9ZM4.75 12a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Z"></path>
                    </svg>
                    <span className="repo-name">{repo.name}</span>
                  </div>
                  <p className="repo-desc">{repo.desc}</p>
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Repositories;