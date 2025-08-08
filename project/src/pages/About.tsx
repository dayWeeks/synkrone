import React from 'react';
import { Target, Users, Shield, Lightbulb, MapPin, Zap, Clock, Heart } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: <Target className="h-8 w-8 text-blue-700" />,
      title: "Excellence",
      description: "Des solutions techniques robustes et fiables, conçues pour durer et évoluer avec vos besoins."
    },
    {
      icon: <Users className="h-8 w-8 text-emerald-500" />,
      title: "Proximité",
      description: "Un accompagnement local qui comprend les spécificités du tissu économique martiniquais."
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-orange-500" />,
      title: "Simplicité",
      description: "L'automatisation accessible à tous, sans complexité technique ni jargon incompréhensible."
    },
    {
      icon: <Shield className="h-8 w-8 text-purple-600" />,
      title: "Confiance",
      description: "Transparence totale dans nos méthodes et engagement ferme sur les résultats obtenus."
    }
  ];

  const approach = [
    {
      icon: <Clock className="h-8 w-8 text-blue-700" />,
      title: "Audit approfondi",
      description: "Analyse détaillée de vos processus actuels pour identifier les opportunités d'optimisation les plus impactantes."
    },
    {
      icon: <Zap className="h-8 w-8 text-emerald-500" />,
      title: "Solutions sur-mesure",
      description: "Conception et déploiement d'automatisations parfaitement adaptées à votre secteur et vos contraintes."
    },
    {
      icon: <Heart className="h-8 w-8 text-red-500" />,
      title: "Accompagnement continu",
      description: "Formation, support technique et évolution des solutions pour garantir votre autonomie et votre succès."
    }
  ];

  return (
    <div className="min-h-screen">
        {/* Hero Section */}
        <section className="reveal bg-gradient-to-br from-blue-50 to-emerald-50 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              À propos de{' '}
              <span className="text-blue-700">Synkrone</span>
            </h1>
            <div className="flex items-center justify-center space-x-2 text-gray-600 mb-8">
              <MapPin className="h-5 w-5" />
              <span className="text-lg">Martinique, Antilles françaises</span>
            </div>
          </div>
        </div>
      </section>

        {/* Mission Section */}
        <section className="reveal py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">
              Notre mission
            </h2>
          </div>
          
          <div className="prose prose-lg max-w-none">
            <div className="bg-gray-50 p-8 rounded-xl space-y-6">
              <p className="text-gray-700 leading-relaxed text-lg">
                <strong>Synkrone</strong> rend accessible l'automatisation intelligente à tous les professionnels martiniquais. 
                Notre mission est simple : permettre aux TPE, PME, indépendants et artisans de gagner du temps, 
                de réduire leur charge mentale et de se recentrer sur leur cœur de métier grâce à des solutions 
                d'intelligence artificielle concrètes et performantes.
              </p>
              
              <p className="text-gray-700 leading-relaxed text-lg">
                Nous croyons fermement que l'automatisation ne doit pas être réservée aux grandes entreprises. 
                Chaque professionnel, quel que soit son secteur d'activité ou son niveau de compétence technique, 
                mérite d'accéder à des outils modernes qui simplifient son quotidien et boostent sa productivité. 
                C'est pourquoi nous concevons des solutions sur-mesure, simples à utiliser et parfaitement adaptées 
                aux réalités locales.
              </p>
              
              <p className="text-gray-700 leading-relaxed text-lg">
                Notre vision s'étend au-delà de la simple automatisation : nous contribuons à bâtir un tissu 
                économique martiniquais plus agile et performant. En libérant nos clients des tâches répétitives, 
                nous leur permettons d'innover, de mieux servir leurs clients et de développer leur activité 
                avec sérénité. Synkrone, c'est l'engagement d'un accompagnement de proximité pour une transformation 
                digitale réussie et durable.
              </p>
            </div>
          </div>
        </div>
      </section>

        {/* Approach Section */}
        <section className="reveal py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Notre approche
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Une méthodologie éprouvée pour transformer vos processus métier 
              en solutions automatisées performantes
            </p>
          </div>
          
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {approach.map((item, index) => (
                <div key={index} className="reveal bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="flex justify-center mb-6">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

        {/* Values Section */}
        <section className="reveal py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Nos valeurs
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Les principes qui guident chacune de nos actions et décisions
            </p>
          </div>
          
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="reveal text-center p-6 rounded-xl hover:shadow-lg transition-shadow duration-300">
                <div className="flex justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

        {/* Local Expertise Section */}
        <section className="reveal py-16 bg-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Expertise locale, impact global
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Basée en Martinique, Synkrone comprend les défis spécifiques des entreprises locales : 
              contraintes logistiques, spécificités réglementaires, besoins de proximité. 
              Cette connaissance du terrain nous permet de proposer des solutions parfaitement 
              adaptées à votre environnement professionnel.
            </p>
            
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                <div className="reveal text-center">
                  <div className="text-3xl font-bold text-white mb-2">100%</div>
                  <div className="text-blue-100">Solutions personnalisées</div>
                </div>
                <div className="reveal text-center">
                  <div className="text-3xl font-bold text-white mb-2">24h</div>
                  <div className="text-blue-100">Délai de réponse maximum</div>
                </div>
                <div className="reveal text-center">
                  <div className="text-3xl font-bold text-white mb-2">Local</div>
                  <div className="text-blue-100">Accompagnement de proximité</div>
                </div>
              </div>
          </div>
        </div>
      </section>

        {/* CTA Section */}
        <section className="reveal py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Prêt à transformer votre activité ?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Découvrez comment Synkrone peut automatiser vos processus métier 
            et libérer votre potentiel entrepreneurial.
          </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="btn bg-blue-700 text-white px-8 py-4 rounded-lg hover:bg-blue-800 transition-all duration-200 font-semibold"
              >
                Demander un audit gratuit
              </a>
              <a
                href="/services"
                className="btn border-2 border-blue-700 text-blue-700 px-8 py-4 rounded-lg hover:bg-blue-50 transition-all duration-200 font-semibold"
              >
                Découvrir nos services
              </a>
            </div>
        </div>
      </section>
    </div>
  );
};

export default About;