import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="reveal bg-gray-50 text-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo et description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <img
                src="/logo-synkrone.png"
                alt="Logo Synkrone"
                className="footer-logo h-16 sm:h-20 md:h-24 lg:h-28 w-auto"
              />
            </div>
            <p className="text-gray-600 mb-6 max-w-md">
              L'automatisation IA accessible pour les professionnels martiniquais.
              Transformons ensemble vos tâches répétitives en processus automatisés.
            </p>
            <div className="flex space-x-4">
              <div className="flex items-center space-x-2 text-gray-600">
                <MapPin className="h-4 w-4" />
                <span className="text-sm">Martinique, Antilles françaises</span>
              </div>
            </div>
          </div>

          {/* Navigation rapide */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="nav-link text-gray-600">
                  Accueil
                </Link>
              </li>
              <li>
                <Link to="/about" className="nav-link text-gray-600">
                  À propos
                </Link>
              </li>
              <li>
                <Link to="/services" className="nav-link text-gray-600">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="nav-link text-gray-600">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2 text-gray-600">
                <Mail className="h-4 w-4" />
                <span className="text-sm">jordan.businesspro8@gmail.com</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-600">
                <Phone className="h-4 w-4" />
                <span className="text-sm">0696 01 31 07</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-12 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            © {currentYear} Synkrone. Tous droits réservés. Créé avec passion en Martinique.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
