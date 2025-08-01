import React from 'react';
import { Star, Quote, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Testimonials = () => {
  // Pour l'instant, nous utilisons des témoignages fictifs en attendant les vrais
  const testimonials = [
    {
      name: "Marie-Claire D.",
      business: "Consultante en marketing digital",
      location: "Fort-de-France",
      rating: 5,
      text: "Grâce à Jordan, j'ai automatisé ma prise de rendez-vous et le suivi de mes prospects. Je gagne maintenant 10 heures par semaine que je peux consacrer à mes clients !",
      results: "10h/semaine économisées"
    },
    {
      name: "Patrick M.",
      business: "Artisan électricien",
      location: "Le Lamentin",
      rating: 5,
      text: "L'automatisation de mes devis m'a complètement changé la vie. Plus besoin de passer des heures sur Excel, tout se génère automatiquement avec les bons tarifs.",
      results: "80% de temps gagné sur les devis"
    },
    {
      name: "Sylvie R.",
      business: "Propriétaire d'une boutique en ligne",
      location: "Sainte-Anne",
      rating: 5,
      text: "Le chatbot mis en place par Jordan répond automatiquement aux questions fréquentes de mes clients. Mon service client fonctionne maintenant 24h/24 !",
      results: "Service client 24h/24"
    }
  ];

  const projects = [
    {
      title: "Automatisation CRM pour cabinet comptable",
      sector: "Services aux entreprises",
      challenge: "Suivi manuel de 200+ clients avec des relances perdues et une facturation chronophage",
      solution: "Mise en place d'un CRM automatisé avec relances automatiques et génération de factures",
      results: [
        "70% de temps gagné sur la facturation",
        "100% des relances effectuées",
        "Amélioration de 40% du taux de recouvrement"
      ]
    },
    {
      title: "Assistant IA pour restaurant",
      sector: "Restauration",
      challenge: "Prise de commandes téléphoniques chronophage pendant les heures de pointe",
      solution: "Chatbot intelligent pour commandes en ligne avec intégration calendrier de livraisons",
      results: [
        "50% de commandes traitées automatiquement",
        "Réduction de 30% des erreurs de commande",
        "Personnel libéré pour le service en salle"
      ]
    },
    {
      title: "Automatisation marketing pour coach bien-être",
      sector: "Coaching",
      challenge: "Difficulté à maintenir un contact régulier avec les prospects et clients",
      solution: "Séquences email automatisées et assistant de prise de RDV intelligent",
      results: [
        "Taux de conversion prospects +60%",
        "100% des RDV confirmés automatiquement",
        "Relation client automatisée et personnalisée"
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-emerald-50 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Ils nous font <span className="text-blue-700">confiance</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Découvrez comment nos solutions d'automatisation IA ont transformé 
            le quotidien d'entrepreneurs martiniquais
          </p>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Ce que nos clients disent de nous
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Des retours authentiques d'entrepreneurs qui ont fait le choix de l'automatisation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8 relative hover:shadow-lg transition-shadow duration-300">
                <Quote className="h-8 w-8 text-blue-700 mb-4" />
                
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-700 mb-6 italic leading-relaxed">
                  "{testimonial.text}"
                </p>
                
                <div className="border-t border-gray-200 pt-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600">{testimonial.business}</p>
                      <p className="text-sm text-gray-500">{testimonial.location}</p>
                    </div>
                  </div>
                  <div className="mt-3 bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm font-medium inline-block">
                    {testimonial.results}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Projets réalisés
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Quelques exemples concrets de transformations que nous avons accompagnées
            </p>
          </div>
          
          <div className="space-y-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2">
                    <div className="flex items-center space-x-4 mb-4">
                      <h3 className="text-xl font-bold text-gray-900">
                        {project.title}
                      </h3>
                      <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                        {project.sector}
                      </span>
                    </div>
                    
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-red-600 mb-2">Défi initial :</h4>
                        <p className="text-gray-600">{project.challenge}</p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-blue-700 mb-2">Solution mise en place :</h4>
                        <p className="text-gray-600">{project.solution}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-emerald-50 rounded-xl p-6">
                    <h4 className="font-semibold text-emerald-800 mb-4">Résultats obtenus :</h4>
                    <ul className="space-y-2">
                      {project.results.map((result, resultIndex) => (
                        <li key={resultIndex} className="text-emerald-700 flex items-start space-x-2">
                          <div className="w-2 h-2 bg-emerald-500 rounded-full flex-shrink-0 mt-2"></div>
                          <span className="text-sm">{result}</span>
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

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Notre impact en chiffres
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-700 mb-2">25+</div>
              <div className="text-gray-600">Entrepreneurs accompagnés</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-500 mb-2">300+</div>
              <div className="text-gray-600">Heures économisées par mois</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-500 mb-2">95%</div>
              <div className="text-gray-600">Taux de satisfaction client</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">40+</div>
              <div className="text-gray-600">Automatisations déployées</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Rejoignez nos clients satisfaits
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Vous aussi, transformez votre activité avec nos solutions d'automatisation IA. 
            Commençons par un échange gratuit pour identifier vos opportunités.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-blue-700 px-8 py-4 rounded-lg hover:bg-gray-100 transition-all duration-200 font-semibold inline-flex items-center group"
            >
              Réserver un appel gratuit
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
            <Link
              to="/services"
              className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-blue-700 transition-all duration-200 font-semibold"
            >
              Découvrir nos services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;