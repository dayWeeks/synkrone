import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: "Combien de temps prend une automatisation ?",
    a: "La majorité des projets se déploient en quelques semaines selon leur complexité."
  },
  {
    q: "Est-ce que c’est adapté aux petits business ?",
    a: "Oui, nos solutions sont dimensionnées pour les TPE et PME avec un retour sur investissement rapide."
  },
  {
    q: "Dois-je être bon en tech pour utiliser vos solutions ?",
    a: "Pas du tout, nous concevons des outils simples à prendre en main et vous formons à leur utilisation."
  }
];

const FAQ = () => {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section className="py-16 bg-gray-50 animate-fade-in" id="faq">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 text-center">FAQ</h2>
        <div className="space-y-4">
          {faqs.map((item, idx) => (
            <div key={idx} className="border rounded-lg overflow-hidden">
              <button
                className="w-full flex justify-between items-center px-4 py-3 text-left font-medium"
                onClick={() => setOpen(open === idx ? null : idx)}
              >
                {item.q}
                <ChevronDown className={`h-5 w-5 transition-transform ${open === idx ? 'rotate-180' : ''}`} />
              </button>
              {open === idx && (
                <div className="px-4 pb-4 text-gray-600">{item.a}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
