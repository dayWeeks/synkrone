import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, Zap, Target, ArrowRight, CheckCircle, Users, Lightbulb } from 'lucide-react';
import FAQ from '../components/FAQ';

const Home = () => {
  const benefits = [
    {
      icon: <Clock className="h-8 w-8 text-blue-700" />,
      title: "Gagnez du temps précieux",
      description: "Automatisez vos tâches répétitives et libérez-vous des corvées administratives."
    },
    {
      icon: <Zap className="h-8 w-8 text-emerald-500" />,
      title: "Automatisez vos processus",
      description: "Transformez vos workflows manuels en systèmes intelligents qui fonctionnent 24h/24."
    },
    {
      icon: <Target className="h-8 w-8 text-orange-500" />,
      title: "Concentrez-vous sur l'essentiel",
      description: "Recentrez votre énergie sur ce qui compte vraiment : développer votre activité."
    }
  ];

  const steps = [
    {
      number: "01",
      title: "Audit de vos besoins",
      description: "Nous analysons ensemble vos tâches quotidiennes pour identifier les opportunités d'automatisation."
    },
    {
      number: "02",
      title: "Conception personnalisée",
      description: "Nous concevons des solutions sur mesure adaptées à votre activité et vos contraintes."
    },
    {
      number: "03",
      title: "Mise en place & formation",
      description: "Nous implémentons les automatisations et vous formons pour une utilisation autonome."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="bg-gradient-to-br from-blue-50 to-emerald-50 py-16 sm:py-24"
        data-aos="fade-up"
        data-aos-duration="800"
        data-aos-easing="ease-in-out"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Transformez votre entreprise avec{' '}
              <span className="text-blue-700">l'IA intelligente</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Libérez-vous des tâches répétitives et concentrez-vous sur ce qui compte vraiment. 
              Des solutions d'automatisation IA sur mesure pour les entrepreneurs martiniquais.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-blue-700 text-white px-8 py-4 rounded-lg hover:bg-blue-800 transition-all duration-200 font-semibold flex items-center justify-center group"
              >
                Réservez un échange gratuit
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
              <Link
                to="/services"
                className="border-2 border-blue-700 text-blue-700 px-8 py-4 rounded-lg hover:bg-blue-50 transition-all duration-200 font-semibold"
              >
                Découvrir nos services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white animate-fade-in">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Pourquoi choisir l'automatisation IA ?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Découvrez comment l'intelligence artificielle peut révolutionner votre façon de travailler
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center p-6 rounded-xl hover:shadow-lg transition-shadow duration-300">
                <div className="flex justify-center mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works Section */}
      <section className="py-16 bg-gray-50 animate-fade-in">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Comment ça fonctionne ?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Un processus simple et transparent en 3 étapes pour transformer votre activité
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="text-4xl font-bold text-blue-700 mb-4">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">
                    {step.description}
                  </p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="h-6 w-6 text-gray-400" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-16 bg-white animate-fade-in">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">
              Rejoignez les entrepreneurs qui ont fait le choix de l'efficacité
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-12">
              <div className="flex flex-col items-center">
                <Users className="h-12 w-12 text-emerald-500 mb-4" />
                <div className="text-3xl font-bold text-gray-900">50+</div>
                <div className="text-gray-600">Entrepreneurs accompagnés</div>
              </div>
              <div className="flex flex-col items-center">
                <CheckCircle className="h-12 w-12 text-blue-700 mb-4" />
                <div className="text-3xl font-bold text-gray-900">80%</div>
                <div className="text-gray-600">De temps gagné en moyenne</div>
              </div>
              <div className="flex flex-col items-center">
                <Lightbulb className="h-12 w-12 text-orange-500 mb-4" />
                <div className="text-3xl font-bold text-gray-900">100%</div>
                <div className="text-gray-600">Solutions personnalisées</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ />

      {/* CTA Section */}
      <section
        className="py-16 bg-blue-700"
        data-aos="fade-up"
        data-aos-duration="800"
        data-aos-easing="ease-in-out"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Prêt à transformer votre activité ?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Réservez dès maintenant un échange gratuit de 30 minutes pour découvrir 
            comment l'IA peut révolutionner votre quotidien professionnel.
          </p>
          <Link
            to="/contact"
            className="bg-white text-blue-700 px-8 py-4 rounded-lg hover:bg-gray-100 transition-all duration-200 font-semibold inline-flex items-center group"
          >
            Commencer maintenant
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;