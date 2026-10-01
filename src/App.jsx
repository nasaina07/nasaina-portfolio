import React, { useState } from 'react';
import { 
  Server, 
  ShieldCheck, 
  Terminal, 
  Globe, 
  Mail, 
  Phone, 
  MapPin, 
  Code2, 
  GraduationCap, 
  CheckCircle, 
  Layers,
  Heart,
  Menu,
  X
} from 'lucide-react';

import profileImg from './assets/profile.jpg';

// Icônes personnalisées SVG pour les réseaux sociaux
const LinkedinIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
  </svg>
);

const TiktokIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 3 15.68 6.34 6.34 0 0 0 9.35 22a6.33 6.33 0 0 0 6.33-6.32V9.05a8.16 8.16 0 0 0 4.91 1.62V7.22a4.85 4.85 0 0 1-1-.53z"/>
  </svg>
);

const InstagramIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

const FacebookIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

export default function App() {
  const [activeTab, setActiveTab] = useState('all');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [terminalInput, setTerminalInput] = useState('');
  const [terminalLogs, setTerminalLogs] = useState([
    "Bienvenue sur le système d'administration de Nasaina.",
    "Tapez 'help' pour voir la liste des commandes disponibles."
  ]);

  const handleCommand = (e) => {
    e.preventDefault();
    const cmd = terminalInput.trim().toLowerCase();
    let newLogs = [...terminalLogs, `nasaina@admin-sys:~$ ${terminalInput}`];

    switch(cmd) {
      case 'help':
        newLogs.push("Commandes disponibles : status, skills, projects, contact, clear");
        break;
      case 'status':
        newLogs.push("Système : En ligne | Rôle : Informatique, Développement, Systèmes et Réseaux");
        break;
      case 'skills':
        newLogs.push("Compétences : Python, PHP, JavaScript, React, Node.js, Express, MySQL, MongoDB, Linux");
        break;
      case 'projects':
        newLogs.push("Projets : Suivi de dépenses, Supervision de parc, Détection d'attaques réseau");
        break;
      case 'contact':
        newLogs.push("E-mail : nasaina710@gmail.com | LinkedIn : nasaina-razafindrasendra-717208384");
        break;
      case 'clear':
        newLogs = [];
        break;
      default:
        if (cmd !== '') {
          newLogs.push(`Commande non reconnue : '${cmd}'. Tapez 'help' pour obtenir de l'aide.`);
        }
    }

    setTerminalLogs(newLogs);
    setTerminalInput('');
  };

  const projects = [
    {
      title: "Application de suivi de dépenses",
      category: "dev",
      date: "2026",
      desc: "Conception d'une application web de gestion financière avec React, Tailwind CSS, Node.js et Express.",
      techs: ["React", "Tailwind CSS", "Node.js", "Express", "MongoDB Atlas"],
      details: [
        "Développement complet du frontend avec React et Tailwind CSS.",
        "Configuration et gestion d'une base de données MongoDB Atlas dans le cloud.",
        "Déploiement automatisé du frontend sur Vercel et du backend sur Render."
      ]
    },
    {
      title: "Outil de supervision de parc informatique",
      category: "reseau",
      date: "2026",
      desc: "Conception et mise en place d'un outil de monitoring réseau avec suivi d'équipements et alertes de connectivité.",
      techs: ["Python", "API PHP", "MySQL", "Ping ICMP"],
      details: [
        "Création d'un outil client en Python relié à une API en PHP.",
        "Tests de connectivité par Ping ICMP en temps réel.",
        "Stockage des données d'équipements sous MySQL."
      ]
    },
    {
      title: "Détection d'attaques réseau",
      category: "securite",
      date: "2026",
      desc: "Mise en place d'un système de surveillance et de détection d'usurpation d'adresse MAC et IP sur un réseau local.",
      techs: ["Arpwatch", "Arpspoof", "Linux", "Analyse IP/MAC"],
      details: [
        "Déploiement d'Arpwatch pour l'analyse des adresses IP et MAC.",
        "Simulation d'usurpation de passerelle avec Arpspoof.",
        "Interception et analyse directe des alertes d'intrusion."
      ]
    },
    {
      title: "Support et supervision réseau",
      category: "systeme",
      date: "2025",
      desc: "Gestion de la diffusion distante de contenus et maintenance d'un parc d'affichage dynamique.",
      techs: ["Support Réseau", "Surveillance", "ADS360"],
      details: [
        "Programmation et diffusion de contenus sur écrans distants.",
        "Surveillance du réseau d'affichage et détection des pannes."
      ]
    }
  ];

  const filteredProjects = activeTab === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeTab);

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans selection:bg-cyan-500 selection:text-slate-900">
      
      {/* Navigation Responsive */}
      <nav className="sticky top-0 z-50 bg-slate-900/90 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
          <a href="#" className="font-bold text-white text-base sm:text-lg tracking-tight hover:text-cyan-400 transition">
            Nasaina Razafindrasendra
          </a>

          <div className="hidden md:flex gap-6 text-sm font-medium text-slate-300">
            <a href="#about" className="hover:text-cyan-400 transition">À Propos</a>
            <a href="#skills" className="hover:text-cyan-400 transition">Compétences</a>
            <a href="#projects" className="hover:text-cyan-400 transition">Projets</a>
            <a href="#terminal" className="hover:text-cyan-400 transition">Terminal</a>
            <a href="#contact" className="hover:text-cyan-400 transition">Contact</a>
          </div>

          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-slate-300 hover:text-white focus:outline-none p-1"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-slate-950 border-b border-slate-800 px-4 pt-2 pb-4 space-y-3 text-sm font-medium">
            <a href="#about" onClick={() => setMobileMenuOpen(false)} className="block text-slate-300 hover:text-cyan-400">À Propos</a>
            <a href="#skills" onClick={() => setMobileMenuOpen(false)} className="block text-slate-300 hover:text-cyan-400">Compétences</a>
            <a href="#projects" onClick={() => setMobileMenuOpen(false)} className="block text-slate-300 hover:text-cyan-400">Projets</a>
            <a href="#terminal" onClick={() => setMobileMenuOpen(false)} className="block text-slate-300 hover:text-cyan-400">Terminal</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="block text-slate-300 hover:text-cyan-400">Contact</a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="about" className="max-w-6xl mx-auto px-4 sm:px-6 py-12 md:py-24">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-12">
          
          <div className="relative group w-48 h-48 sm:w-60 sm:h-60 md:w-72 md:h-72 flex-shrink-0">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full blur opacity-50 group-hover:opacity-75 transition duration-500"></div>
            <img 
              src={profileImg} 
              alt="Nasaina Cécile Razafindrasendra" 
              className="relative w-full h-full object-cover rounded-full border-2 border-slate-800 shadow-2xl"
            />
          </div>

          <div className="space-y-6 text-center md:text-left flex-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800 text-cyan-400 text-xs font-mono">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
              Développement, Systèmes et Réseaux
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Nasaina <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                Razafindrasendra
              </span>
            </h1>

            <p className="text-slate-400 text-base sm:text-lg leading-relaxed max-w-xl mx-auto md:mx-0">
              Étudiante en troisième année d'informatique, à l'aise aussi bien en développement d'applications qu'en administration des systèmes et réseaux.
            </p>

            <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-2">
              <a href="#projects" className="px-5 py-2.5 sm:px-6 sm:py-3 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold text-sm sm:text-base rounded-lg transition flex items-center gap-2">
                <Layers className="w-4 h-4" /> Voir mes projets
              </a>
              <a href="#contact" className="px-5 py-2.5 sm:px-6 sm:py-3 border border-slate-700 hover:border-slate-500 text-slate-300 text-sm sm:text-base rounded-lg transition flex items-center gap-2">
                <Mail className="w-4 h-4 text-cyan-400" /> Me contacter
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* Compétences */}
      <section id="skills" className="py-16 bg-slate-950/50 border-y border-slate-800/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center space-y-2 mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Compétences Techniques</h2>
            <p className="text-slate-400 text-sm sm:text-base">Aperçu de mes savoir-faire en développement et gestion d'infrastructures</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl space-y-4">
              <div className="w-12 h-12 bg-cyan-950 border border-cyan-800 rounded-lg flex items-center justify-center text-cyan-400">
                <Code2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-white">Développement</h3>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" /> Python, PHP, JavaScript</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" /> React, Tailwind CSS, Node.js, Express</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" /> Création d'applications Web et d'API</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" /> Bases de données MySQL et MongoDB</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" /> Git, GitHub, Vercel et Render</li>
              </ul>
            </div>

            <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl space-y-4">
              <div className="w-12 h-12 bg-cyan-950 border border-cyan-800 rounded-lg flex items-center justify-center text-cyan-400">
                <Server className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-white">Systèmes & Réseaux</h3>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" /> Serveurs Linux et Windows</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" /> Virtualisation</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" /> Services réseau fondamentaux</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" /> Surveillance des réseaux</li>
              </ul>
            </div>

            <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl space-y-4">
              <div className="w-12 h-12 bg-cyan-950 border border-cyan-800 rounded-lg flex items-center justify-center text-cyan-400">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-white">Sécurité</h3>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" /> Détection d'attaques réseau</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" /> Analyse des alertes d'intrusion</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" /> Surveillance des adresses IP et MAC</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* Projets */}
      <section id="projects" className="py-20 max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Projets & Réalisations</h2>
            <p className="text-slate-400 text-sm sm:text-base">Mes travaux académiques et réalisations pratiques</p>
          </div>

          <div className="flex flex-wrap gap-2 bg-slate-950 p-1 border border-slate-800 rounded-lg text-xs font-medium self-start md:self-auto">
            <button 
              onClick={() => setActiveTab('all')}
              className={`px-3 py-1.5 rounded-md transition ${activeTab === 'all' ? 'bg-cyan-500 text-slate-950' : 'text-slate-400 hover:text-white'}`}>
              Tous
            </button>
            <button 
              onClick={() => setActiveTab('dev')}
              className={`px-3 py-1.5 rounded-md transition ${activeTab === 'dev' ? 'bg-cyan-500 text-slate-950' : 'text-slate-400 hover:text-white'}`}>
              Développement
            </button>
            <button 
              onClick={() => setActiveTab('reseau')}
              className={`px-3 py-1.5 rounded-md transition ${activeTab === 'reseau' ? 'bg-cyan-500 text-slate-950' : 'text-slate-400 hover:text-white'}`}>
              Réseau
            </button>
            <button 
              onClick={() => setActiveTab('securite')}
              className={`px-3 py-1.5 rounded-md transition ${activeTab === 'securite' ? 'bg-cyan-500 text-slate-950' : 'text-slate-400 hover:text-white'}`}>
              Sécurité
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((project, idx) => (
            <div key={idx} className="bg-slate-950 border border-slate-800 hover:border-slate-700 rounded-xl p-6 flex flex-col justify-between transition">
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <span className="text-xs font-mono px-2 py-1 bg-slate-900 border border-slate-800 rounded text-cyan-400">
                    {project.date}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white">{project.title}</h3>
                <p className="text-slate-400 text-sm">{project.desc}</p>
                <ul className="space-y-1.5 text-xs text-slate-300">
                  {project.details.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-cyan-400 font-bold">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2 mt-6 pt-4 border-t border-slate-900">
                {project.techs.map((tech, i) => (
                  <span key={i} className="text-[11px] font-mono px-2 py-0.5 bg-slate-900 text-slate-400 rounded border border-slate-800">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Terminal */}
      <section id="terminal" className="py-16 bg-slate-950 border-t border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden shadow-2xl font-mono text-xs sm:text-sm">
            <div className="bg-slate-950 px-4 py-3 border-b border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Terminal className="w-4 h-4 text-cyan-400" />
                <span className="text-slate-300 font-semibold text-xs">Console Admin</span>
              </div>
              <span className="text-xs text-slate-600">bash v5.2</span>
            </div>

            <div className="p-4 h-64 overflow-y-auto space-y-2 text-slate-300">
              {terminalLogs.map((log, index) => (
                <div key={index} className="leading-relaxed">
                  {log}
                </div>
              ))}
            </div>

            <form onSubmit={handleCommand} className="border-t border-slate-800 p-3 bg-slate-950/80 flex items-center gap-2">
              <span className="text-cyan-400 font-bold text-xs shrink-0">nasaina@admin:~$</span>
              <input 
                type="text" 
                value={terminalInput}
                onChange={(e) => setTerminalInput(e.target.value)}
                placeholder="Tapez 'help', 'skills', 'projects'..." 
                className="bg-transparent border-none outline-none flex-1 text-slate-100 text-xs sm:text-sm font-mono focus:ring-0"
              />
            </form>
          </div>
        </div>
      </section>

      {/* Formations, Langues et Centres d'intérêt */}
      <section className="py-20 max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
        
        {/* Parcours Académique */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <GraduationCap className="w-6 h-6 text-cyan-400" />
            <h2 className="text-2xl font-bold text-white">Formations</h2>
          </div>

          <div className="space-y-6 border-l-2 border-slate-800 pl-6">
            <div className="relative space-y-1">
              <div className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-cyan-400"></div>
              <span className="text-xs font-mono text-cyan-400">En cours</span>
              <h3 className="text-lg font-bold text-white">Licence en Informatique</h3>
              <p className="text-sm text-slate-400">En cours d'obtention</p>
            </div>

            <div className="relative space-y-1">
              <div className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-slate-700"></div>
              <span className="text-xs font-mono text-slate-500">2023</span>
              <h3 className="text-lg font-bold text-white">Baccalauréat série C</h3>
              <p className="text-sm text-slate-400">Lycée Saint Pierre Malaza</p>
            </div>
          </div>
        </div>

        {/* Langues & Centres d'intérêt */}
        <div className="space-y-8">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Globe className="w-6 h-6 text-cyan-400" />
              <h2 className="text-2xl font-bold text-white">Langues</h2>
            </div>
            <div className="grid grid-cols-1 gap-3">
              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 flex justify-between items-center">
                <span className="text-white font-medium">Malagasy</span>
                <span className="text-xs font-mono px-2 py-1 bg-cyan-950 border border-cyan-800 text-cyan-400 rounded">Langue maternelle</span>
              </div>
              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 flex justify-between items-center">
                <span className="text-white font-medium">Français</span>
                <span className="text-xs font-mono px-2 py-1 bg-slate-900 border border-slate-800 text-slate-300 rounded">Niveau courant</span>
              </div>
              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 flex justify-between items-center">
                <span className="text-white font-medium">Anglais</span>
                <span className="text-xs font-mono px-2 py-1 bg-slate-900 border border-slate-800 text-slate-400 rounded">Niveau intermédiaire</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Heart className="w-6 h-6 text-cyan-400" />
              <h2 className="text-2xl font-bold text-white">Centres d'intérêt</h2>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="px-4 py-2 bg-slate-950 border border-slate-800 text-slate-300 rounded-lg text-sm">Voyage</span>
              <span className="px-4 py-2 bg-slate-950 border border-slate-800 text-slate-300 rounded-lg text-sm">Danse</span>
              <span className="px-4 py-2 bg-slate-950 border border-slate-800 text-slate-300 rounded-lg text-sm">Musique</span>
            </div>
          </div>
        </div>

      </section>

      {/* Contact & Réseaux Sociaux */}
      <section id="contact" className="py-20 bg-slate-950 border-t border-slate-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center space-y-2 mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Contacts & Réseaux</h2>
            <p className="text-slate-400 text-sm sm:text-base">Retrouvez-moi sur mes différentes plateformes ou contactez-moi directement</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-6xl mx-auto">
            
            {/* TikTok */}
            <a 
              href="https://www.tiktok.com/@nasah.16?_r=1&_t=ZS-9ABj8xAdbKK" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-slate-900 hover:bg-slate-800/80 p-6 rounded-xl border border-slate-800 hover:border-cyan-500/50 text-center space-y-3 transition group"
            >
              <div className="w-10 h-10 bg-cyan-950 text-cyan-400 group-hover:scale-110 rounded-full flex items-center justify-center mx-auto transition">
                <TiktokIcon className="w-5 h-5" />
              </div>
              <p className="text-xs text-slate-500 font-mono">TikTok</p>
              <p className="text-white font-medium text-sm group-hover:text-cyan-400 transition truncate px-2">@nasah.16</p>
            </a>

            {/* Instagram */}
            <a 
              href="https://www.instagram.com/nasaina_07?stkn=MXRtZ3lmbDZtbGM5cA==" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-slate-900 hover:bg-slate-800/80 p-6 rounded-xl border border-slate-800 hover:border-cyan-500/50 text-center space-y-3 transition group"
            >
              <div className="w-10 h-10 bg-cyan-950 text-cyan-400 group-hover:scale-110 rounded-full flex items-center justify-center mx-auto transition">
                <InstagramIcon className="w-5 h-5" />
              </div>
              <p className="text-xs text-slate-500 font-mono">Instagram</p>
              <p className="text-white font-medium text-sm group-hover:text-cyan-400 transition truncate px-2">@nasaina_07</p>
            </a>

            {/* Facebook */}
            <a 
              href="https://www.facebook.com/nasainaaaa" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-slate-900 hover:bg-slate-800/80 p-6 rounded-xl border border-slate-800 hover:border-cyan-500/50 text-center space-y-3 transition group"
            >
              <div className="w-10 h-10 bg-cyan-950 text-cyan-400 group-hover:scale-110 rounded-full flex items-center justify-center mx-auto transition">
                <FacebookIcon className="w-5 h-5" />
              </div>
              <p className="text-xs text-slate-500 font-mono">Facebook</p>
              <p className="text-white font-medium text-sm group-hover:text-cyan-400 transition truncate px-2">Nasaina Razafindrasendra</p>
            </a>

            {/* LinkedIn */}
            <a 
              href="https://www.linkedin.com/in/nasaina-razafindrasendra-717208384" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-slate-900 hover:bg-slate-800/80 p-6 rounded-xl border border-slate-800 hover:border-cyan-500/50 text-center space-y-3 transition group"
            >
              <div className="w-10 h-10 bg-cyan-950 text-cyan-400 group-hover:scale-110 rounded-full flex items-center justify-center mx-auto transition">
                <LinkedinIcon className="w-5 h-5" />
              </div>
              <p className="text-xs text-slate-500 font-mono">LinkedIn</p>
              <p className="text-white font-medium text-sm group-hover:text-cyan-400 transition truncate px-2">Nasaina Razafindrasendra</p>
            </a>

            {/* WhatsApp / Téléphone */}
            <a 
              href="https://wa.me/261381134837" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-slate-900 hover:bg-slate-800/80 p-6 rounded-xl border border-slate-800 hover:border-cyan-500/50 text-center space-y-3 transition group"
            >
              <div className="w-10 h-10 bg-cyan-950 text-cyan-400 group-hover:scale-110 rounded-full flex items-center justify-center mx-auto transition">
                <Phone className="w-5 h-5" />
              </div>
              <p className="text-xs text-slate-500 font-mono">Téléphone / WhatsApp</p>
              <p className="text-white font-medium text-sm group-hover:text-cyan-400 transition">+261 38 11 348 37</p>
            </a>

            {/* E-mail */}
            <a 
              href="https://mail.google.com/mail/?view=cm&fs=1&to=nasaina710@gmail.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-slate-900 hover:bg-slate-800/80 p-6 rounded-xl border border-slate-800 hover:border-cyan-500/50 text-center space-y-3 transition group"
            >
              <div className="w-10 h-10 bg-cyan-950 text-cyan-400 group-hover:scale-110 rounded-full flex items-center justify-center mx-auto transition">
                <Mail className="w-5 h-5" />
              </div>
              <p className="text-xs text-slate-500 font-mono">Adresse E-mail</p>
              <p className="text-white font-medium text-sm group-hover:text-cyan-400 transition">nasaina710@gmail.com</p>
            </a>

            {/* Adresse */}
            <a 
              href="https://maps.google.com/?q=Ambohijanaka,+Madagascar" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-slate-900 hover:bg-slate-800/80 p-6 rounded-xl border border-slate-800 hover:border-cyan-500/50 text-center space-y-3 transition group sm:col-span-2 lg:col-span-1"
            >
              <div className="w-10 h-10 bg-cyan-950 text-cyan-400 group-hover:scale-110 rounded-full flex items-center justify-center mx-auto transition">
                <MapPin className="w-5 h-5" />
              </div>
              <p className="text-xs text-slate-500 font-mono">Adresse</p>
              <p className="text-white font-medium text-sm group-hover:text-cyan-400 transition">Ambohijanaka</p>
            </a>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 border-t border-slate-900 text-center text-xs text-slate-600 font-mono px-4">
        © 2026 Nasaina Razafindrasendra — Étudiante en Informatique
      </footer>

    </div>
  );
}