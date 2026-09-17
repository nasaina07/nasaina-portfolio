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
  Layers
} from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('all');
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
        newLogs.push("Système : En ligne | Rôle : Administration Systèmes & Réseaux");
        break;
      case 'skills':
        newLogs.push("Compétences : Linux, Windows Server, Arpwatch, Arpspoof, MySQL, Python, PHP");
        break;
      case 'projects':
        newLogs.push("Projets : Supervision Parc Informatique, Détection Attaques Réseau, Support ADS360");
        break;
      case 'contact':
        newLogs.push("E-mail : nasaina710@gmail.com | Tél : +261 38 11 348 37");
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
      title: "Supervision de Parc Informatique",
      category: "reseau",
      date: "2026",
      desc: "Conception et mise en place d'un outil de monitoring de réseau avec alertes de connectivité et suivi d'équipements.",
      techs: ["Python", "API PHP", "MySQL", "Ping ICMP"],
      details: [
        "Création d'un outil client Python relié à une API PHP.",
        "Tests de connectivité par Ping ICMP en temps réel.",
        "Stockage et gestion des données d'équipements sous MySQL."
      ]
    },
    {
      title: "Détection d'Attaques Réseau",
      category: "securite",
      date: "2026",
      desc: "Mise en place d'un système de surveillance et de détection d'usurpation d'adresse MAC/IP sur un réseau local.",
      techs: ["Arpwatch", "Arpspoof", "Linux", "Analyse IP/MAC"],
      details: [
        "Déploiement d'Arpwatch pour l'analyse des adresses IP et MAC.",
        "Simulation d'usurpation de passerelle avec Arpspoof.",
        "Interception et analyse directe des alertes d'intrusion."
      ]
    },
    {
      title: "Support et Supervision Réseau",
      category: "systeme",
      date: "2025",
      desc: "Gestion de la diffusion distante de contenus et maintenance d'un parc d'affichage dynamique.",
      techs: ["Support Réseau", "Surveillance", "Panne / Diagnostic"],
      details: [
        "Programmation et diffusion de contenus sur écrans distants.",
        "Surveillance continue du réseau d'affichage et détection des pannes."
      ]
    }
  ];

  const filteredProjects = activeTab === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeTab);

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans selection:bg-cyan-500 selection:text-slate-900">
      
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <a href="#" className="font-bold text-white text-lg tracking-tight hover:text-cyan-400 transition">
            Nasaina Razafindrasendra
          </a>
          <div className="hidden md:flex gap-6 text-sm font-medium text-slate-300">
            <a href="#about" className="hover:text-cyan-400 transition">À Propos</a>
            <a href="#skills" className="hover:text-cyan-400 transition">Compétences</a>
            <a href="#projects" className="hover:text-cyan-400 transition">Projets</a>
            <a href="#terminal" className="hover:text-cyan-400 transition">Terminal</a>
            <a href="#contact" className="hover:text-cyan-400 transition">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="about" className="max-w-4xl mx-auto px-4 py-24 flex flex-col items-center text-center">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800 text-cyan-400 text-xs font-mono">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
            Administration Systèmes & Réseaux
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white">
            Nasaina Cécile <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Razafindrasendra
            </span>
          </h1>
          <p className="text-slate-400 text-lg leading-relaxed max-w-2xl mx-auto">
            Étudiante en troisième année d'informatique, spécialisée dans la gestion des infrastructures systèmes, la surveillance des réseaux et la sécurité informatique.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <a href="#projects" className="px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold rounded-lg transition flex items-center gap-2">
              <Layers className="w-4 h-4" /> Voir mes projets
            </a>
            <a href="#contact" className="px-6 py-3 border border-slate-700 hover:border-slate-500 text-slate-300 rounded-lg transition flex items-center gap-2">
              <Mail className="w-4 h-4" /> Me contacter
            </a>
          </div>
        </div>
      </section>

      {/* Compétences */}
      <section id="skills" className="py-16 bg-slate-950/50 border-y border-slate-800/80">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center space-y-2 mb-12">
            <h2 className="text-3xl font-bold text-white">Compétences Techniques</h2>
            <p className="text-slate-400">Aperçu de mes capacités en gestion d'infrastructures et développement</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl space-y-4">
              <div className="w-12 h-12 bg-cyan-950 border border-cyan-800 rounded-lg flex items-center justify-center text-cyan-400">
                <Server className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-white">Systèmes & Réseaux</h3>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-cyan-400" /> Administration Linux & Windows</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-cyan-400" /> Services réseau fondamentaux</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-cyan-400" /> Virtualisation</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-cyan-400" /> Tests ICMP & Monitoring</li>
              </ul>
            </div>

            <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl space-y-4">
              <div className="w-12 h-12 bg-cyan-950 border border-cyan-800 rounded-lg flex items-center justify-center text-cyan-400">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-white">Sécurité & Supervision</h3>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-cyan-400" /> Surveillance du réseau</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-cyan-400" /> Détection d'intrusions (Arpwatch)</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-cyan-400" /> Analyse d'usurpation (Arpspoof)</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-cyan-400" /> Analyse IP / MAC</li>
              </ul>
            </div>

            <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl space-y-4">
              <div className="w-12 h-12 bg-cyan-950 border border-cyan-800 rounded-lg flex items-center justify-center text-cyan-400">
                <Code2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-white">Développement & Data</h3>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-cyan-400" /> Création d'applications Web</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-cyan-400" /> Scripts Python & API PHP</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-cyan-400" /> Bases de données MySQL</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-cyan-400" /> Modélisation & Stockage</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* Projets */}
      <section id="projects" className="py-20 max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <h2 className="text-3xl font-bold text-white">Projets & Réalisations</h2>
            <p className="text-slate-400">Mes travaux pratiques et projets d'ingénierie</p>
          </div>

          <div className="flex gap-2 bg-slate-950 p-1 border border-slate-800 rounded-lg text-xs font-medium">
            <button 
              onClick={() => setActiveTab('all')}
              className={`px-3 py-1.5 rounded-md transition ${activeTab === 'all' ? 'bg-cyan-500 text-slate-950' : 'text-slate-400 hover:text-white'}`}>
              Tous
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
            <button 
              onClick={() => setActiveTab('systeme')}
              className={`px-3 py-1.5 rounded-md transition ${activeTab === 'systeme' ? 'bg-cyan-500 text-slate-950' : 'text-slate-400 hover:text-white'}`}>
              Système
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredProjects.map((project, idx) => (
            <div key={idx} className="bg-slate-950 border border-slate-800 hover:border-slate-700 rounded-xl p-6 flex flex-col justify-between transition">
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <span className="text-xs font-mono px-2 py-1 bg-slate-900 border border-slate-800 rounded text-cyan-400">
                    {project.date}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white">{project.title}</h3>
                <p className="text-slate-400 text-sm">{project.desc}</p>
                <ul className="space-y-1 text-xs text-slate-300">
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

      {/* Terminal de commande interactif */}
      <section id="terminal" className="py-16 bg-slate-950 border-t border-slate-800">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden shadow-2xl font-mono text-sm">
            <div className="bg-slate-950 px-4 py-3 border-b border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Terminal className="w-4 h-4 text-cyan-400" />
                <span className="text-slate-300 font-semibold text-xs">Console Admin (Interactif)</span>
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
              <span className="text-cyan-400 font-bold text-xs">nasaina@admin:~$</span>
              <input 
                type="text" 
                value={terminalInput}
                onChange={(e) => setTerminalInput(e.target.value)}
                placeholder="Tapez 'help', 'skills', 'projects'..." 
                className="bg-transparent border-none outline-none flex-1 text-slate-100 text-sm font-mono focus:ring-0"
              />
            </form>
          </div>
        </div>
      </section>

      {/* Formations & Langues */}
      <section className="py-20 max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12">
        
        {/* Parcours Académique */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <GraduationCap className="w-6 h-6 text-cyan-400" />
            <h2 className="text-2xl font-bold text-white">Parcours Académique</h2>
          </div>

          <div className="space-y-6 border-l-2 border-slate-800 pl-6">
            <div className="relative space-y-1">
              <div className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-cyan-400"></div>
              <span className="text-xs font-mono text-cyan-400">2026 (En cours)</span>
              <h3 className="text-lg font-bold text-white">Licence en Informatique</h3>
              <p className="text-sm text-slate-400">Université Privée HAY</p>
            </div>

            <div className="relative space-y-1">
              <div className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-slate-700"></div>
              <span className="text-xs font-mono text-slate-500">2025</span>
              <h3 className="text-lg font-bold text-white">DTS en Informatique</h3>
              <p className="text-sm text-slate-400">Université Privée HAY</p>
            </div>

            <div className="relative space-y-1">
              <div className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-slate-700"></div>
              <span className="text-xs font-mono text-slate-500">2023</span>
              <h3 className="text-lg font-bold text-white">Baccalauréat série D</h3>
              <p className="text-sm text-slate-400">Lycée Saint Pierre Malaza</p>
            </div>
          </div>
        </div>

        {/* Langues */}
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
        </div>

      </section>

      {/* Section Contact */}
      <section id="contact" className="py-20 bg-slate-950 border-t border-slate-800">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center space-y-2 mb-12">
            <h2 className="text-3xl font-bold text-white">Me Contacter</h2>
            <p className="text-slate-400">Restons en contact pour échanger sur vos projets informatiques</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-slate-900 p-6 rounded-xl border border-slate-800 text-center space-y-3">
              <div className="w-10 h-10 bg-cyan-950 text-cyan-400 rounded-full flex items-center justify-center mx-auto">
                <Phone className="w-5 h-5" />
              </div>
              <p className="text-xs text-slate-500 font-mono">Téléphone</p>
              <p className="text-white font-medium text-sm">+261 38 11 348 37</p>
            </div>

            <div className="bg-slate-900 p-6 rounded-xl border border-slate-800 text-center space-y-3">
              <div className="w-10 h-10 bg-cyan-950 text-cyan-400 rounded-full flex items-center justify-center mx-auto">
                <Mail className="w-5 h-5" />
              </div>
              <p className="text-xs text-slate-500 font-mono">Adresse E-mail</p>
              <p className="text-white font-medium text-sm">nasaina710@gmail.com</p>
            </div>

            <div className="bg-slate-900 p-6 rounded-xl border border-slate-800 text-center space-y-3">
              <div className="w-10 h-10 bg-cyan-950 text-cyan-400 rounded-full flex items-center justify-center mx-auto">
                <MapPin className="w-5 h-5" />
              </div>
              <p className="text-xs text-slate-500 font-mono">Adresse</p>
              <p className="text-white font-medium text-sm">A 31 Ambohijanaka</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 border-t border-slate-900 text-center text-xs text-slate-600 font-mono">
        © 2026 Nasaina Cécile Razafindrasendra — Admnistratrice Systèmes & Réseaux
      </footer>

    </div>
  );
}