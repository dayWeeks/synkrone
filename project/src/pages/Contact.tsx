import React, { useState } from 'react';
import { Mail, Phone, MapPin, Calendar, ArrowRight, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    email: '',
    business: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Ici, vous pourrez intégrer votre solution de traitement de formulaire
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ firstName: '', email: '', business: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-emerald-50 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Parlons de votre <span className="text-blue-700">projet</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Prêt à transformer votre activité avec l'IA ? Échangeons sur vos besoins 
            et découvrons ensemble les opportunités d'automatisation.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Demande de contact
              </h2>
              
              {isSubmitted ? (
                <div className="text-center py-8">
                  <CheckCircle className="h-16 w-16 text-emerald-500 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Message envoyé avec succès !
                  </h3>
                  <p className="text-gray-600">
                    Je vous recontacte dans les 24h pour planifier notre échange.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                      Prénom *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                      placeholder="Votre prénom"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email professionnel *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                      placeholder="votre@email.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="business" className="block text-sm font-medium text-gray-700 mb-2">
                      Type d'activité *
                    </label>
                    <select
                      id="business"
                      name="business"
                      value={formData.business}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                    >
                      <option value="">Sélectionnez votre secteur</option>
                      <option value="consultant">Consultant / Coach</option>
                      <option value="artisan">Artisan / Crafteur</option>
                      <option value="commerce">Commerce / E-commerce</option>
                      <option value="sante">Professionnel de santé</option>
                      <option value="restauration">Restauration / Hôtellerie</option>
                      <option value="services">Services aux entreprises</option>
                      <option value="autre">Autre</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Décrivez votre besoin
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                      placeholder="Quelles tâches répétitives aimeriez-vous automatiser ? Quels sont vos principaux défis ?"
                    />
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-blue-700 text-white py-4 px-6 rounded-lg hover:bg-blue-800 transition-colors duration-200 font-semibold flex items-center justify-center group"
                  >
                    Envoyer ma demande
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
                  </button>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Contactez-moi directement
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <Mail className="h-6 w-6 text-blue-700 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Email</h3>
                      <p className="text-gray-600">jordan@autoia-martinique.fr</p>
                      <p className="text-sm text-gray-500 mt-1">
                        Réponse garantie sous 24h
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <Phone className="h-6 w-6 text-emerald-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900">WhatsApp</h3>
                      <p className="text-gray-600">+596 696 XX XX XX</p>
                      <p className="text-sm text-gray-500 mt-1">
                        Pour une réponse rapide
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <MapPin className="h-6 w-6 text-orange-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Localisation</h3>
                      <p className="text-gray-600">Martinique, Antilles françaises</p>
                      <p className="text-sm text-gray-500 mt-1">
                        Déplacements possibles sur toute l'île
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Calendly Section */}
              <div className="bg-blue-50 p-6 rounded-xl">
                <div className="flex items-center space-x-3 mb-4">
                  <Calendar className="h-6 w-6 text-blue-700" />
                  <h3 className="font-semibold text-gray-900">Réservez directement</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Planifiez un appel découverte gratuit de 30 minutes pour discuter 
                  de votre projet d'automatisation.
                </p>
                <a
                  href="https://calendly.com/jordan-autoia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-blue-700 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition-colors duration-200 font-semibold group"
                >
                  Réserver un créneau
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                </a>
              </div>

              {/* FAQ Section */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Questions fréquentes
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-gray-900">Combien coûte un audit ?</h4>
                    <p className="text-sm text-gray-600 mt-1">
                      Le premier échange découverte est gratuit. L'audit détaillé démarre à 300€.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Combien de temps dure un projet ?</h4>
                    <p className="text-sm text-gray-600 mt-1">
                      Selon la complexité, de 1 semaine à 1 mois. Nous définissons ensemble le planning.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Travaillez-vous à distance ?</h4>
                    <p className="text-sm text-gray-600 mt-1">
                      Oui, la plupart des projets peuvent être réalisés à distance avec des points réguliers.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Un projet urgent ?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Pour les projets urgents ou si vous préférez un contact direct, 
            n'hésitez pas à m'appeler ou m'envoyer un message WhatsApp.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+596696XXXXXX"
              className="bg-emerald-500 text-white px-8 py-4 rounded-lg hover:bg-emerald-600 transition-colors duration-200 font-semibold"
            >
              Appeler maintenant
            </a>
            <a
              href="https://wa.me/596696XXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white px-8 py-4 rounded-lg hover:bg-green-600 transition-colors duration-200 font-semibold"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;