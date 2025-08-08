import React from 'react';
import { Search, Cog, Bot, ArrowRight, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      icon: <Search className="h-12 w-12 text-blue-700" />,
      title: "Audit de tâches",
      description: "Analyse complète de vos processus métier pour identifier les opportunités d'automatisation",
      features: [
        "Cartographie de vos workflows actuels",
        "Identification des tâches répétitives",
        "Estimation du temps gagnable",
        "Recommandations prioritaires"
      ],
      duration: "2-3 jours",
      price: "À partir de 300€"
    },
    {
      icon: <Cog className="h-12 w-12 text-emerald-500" />,
      title: "Automatisations métier",
      description: "Mise en place de solutions automatisées pour vos processus clés",
      features: [
        "Génération automatique de devis",
        "Suivi client et relances",
        "Synchronisation CRM/comptabilité",
        "Gestion des stocks et commandes"
      ],
      duration: "1-4 semaines",
      price: "Sur devis"
    },
    {
      icon: <Bot className="h-12 w-12 text-purple-600" />,
      title: "Assistants IA personnalisés",
      description: "Création d'assistants intelligents adaptés à votre activité",
      features: [
        "Chatbot de support client",
        "Assistant de prise de RDV",
        "Générateur de contenu marketing",
        "Analyseur de données métier"
      ],
      duration: "2-3 semaines",
      price: "À partir de 800€"
    },
  ];

  const useCases = [
    {
      type: "Consultant / Coach",
      challenges: ["Gestion des rendez-vous", "Suivi des prospects", "Facturation"],
      solutions: ["Calendrier intelligent avec Calendly", "CRM automatisé", "Génération automatique de factures"]
    },
    {
      type: "Artisan / Crafteur",
      challenges: ["Devis répétitifs", "Gestion des matériaux", "Suivi de chantiers"],
      solutions: ["Templates de devis intelligents", "Gestion automatisée des stocks", "Notifications de suivi projet"]
    },
    {
      type: "Commerçant / E-commerce",
      challenges: ["Service client", "Gestion des commandes", "Marketing"],
      solutions: ["Chatbot de support", "Traitement automatique des commandes", "Campagnes email automatisées"]
    },
    {
      type: "Professionnel de santé",
      challenges: ["Prise de RDV", "Rappels patients", "Gestion administrative"],
      solutions: ["Système de réservation en ligne", "SMS automatiques", "Dossiers patients digitalisés"]
    }
  ];

  return (
    <div className="min-h-screen">
        {/* Hero Section */}
        <section className="reveal bg-gradient-to-br from-blue-50 to-emerald-50 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Nos services d'<span className="text-blue-700">automatisation IA</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Des solutions sur mesure pour automatiser vos tâches répétitives et 
            libérer votre potentiel entrepreneurial
          </p>
        </div>
      </section>

        {/* Services Grid */}
        <section className="reveal py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  title={service.description}
                  className="reveal text-center p-8 rounded-xl border shadow-xl transition duration-500 hover:scale-105 hover:shadow-2xl cursor-pointer"
                >
                <div className="flex justify-center mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <hr className="border-gray-200 mb-4" />
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

        {/* Use Cases Section */}
        <section className="reveal py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Cas d'usage par secteur
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Découvrez comment nos solutions s'adaptent à votre domaine d'activité
            </p>
          </div>
          
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => (
                <div
                  key={index}
                  className="reveal bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                <h3 className="text-xl font-bold text-gray-900 mb-6">
                  {useCase.type}
                </h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-red-600 mb-3">Défis courants :</h4>
                    <ul className="space-y-2">
                      {useCase.challenges.map((challenge, challengeIndex) => (
                        <li key={challengeIndex} className="text-gray-600 flex items-center space-x-2">
                          <div className="w-2 h-2 bg-red-300 rounded-full flex-shrink-0"></div>
                          <span>{challenge}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-emerald-600 mb-3">Solutions proposées :</h4>
                    <ul className="space-y-2">
                      {useCase.solutions.map((solution, solutionIndex) => (
                        <li key={solutionIndex} className="text-gray-600 flex items-center space-x-2">
                          <Check className="h-4 w-4 text-emerald-500 flex-shrink-0" />
                          <span>{solution}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

        {/* Process Section */}
        <section className="reveal py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Notre processus de travail
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Une approche structurée pour garantir le succès de votre projet d'automatisation
            </p>
          </div>
          
          <div className="bg-gradient-to-r from-blue-50 to-emerald-50 rounded-2xl p-8">
              <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                {[ 
                { step: "1", title: "Échange initial", desc: "Découverte de vos besoins" },
                { step: "2", title: "Audit détaillé", desc: "Analyse de vos processus" },
                { step: "3", title: "Proposition", desc: "Devis personnalisé" },
                { step: "4", title: "Développement", desc: "Création des automatisations" },
                { step: "5", title: "Formation", desc: "Accompagnement et suivi" }
                ].map((item, index) => (
                <div key={index} className="reveal text-center">
                  <div className="w-12 h-12 bg-blue-700 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

        {/* CTA Section */}
        <section className="reveal py-16 bg-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Prêt à automatiser votre activité ?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Parlons de votre projet ! Réservez un échange gratuit de 30 minutes 
            pour identifier vos opportunités d'automatisation.
          </p>
            <Link
              to="/contact"
              className="btn bg-white text-blue-700 px-8 py-4 rounded-lg hover:bg-gray-100 transition-all duration-200 font-semibold inline-flex items-center group"
            >
              Demander un audit gratuit
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;