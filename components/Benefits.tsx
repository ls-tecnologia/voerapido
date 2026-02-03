import React from 'react';
import { Section } from './ui/Section';
import { CheckCircle2 } from 'lucide-react';

export const Benefits: React.FC = () => {
  const benefits = [
    "Atendimento humano e personalizado 24h",
    "Melhores tarifas do mercado aéreo",
    "Gestão completa de viagens corporativas",
    "Parcelamento facilitado no cartão",
    "Resolução rápida de imprevistos",
    "Parceria com as principais companhias"
  ];

  return (
    <Section id="benefits">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div className="order-2 md:order-1">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-text mb-6">
            Por que escolher a <span className="text-brand-primary">VOERAPIDO</span>?
          </h2>
          <div className="space-y-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle2 className="text-brand-success shrink-0 mt-0.5" size={20} />
                <span className="text-brand-text text-base font-medium">{benefit}</span>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <a 
              href="#hero" 
              className="inline-block bg-brand-light text-brand-primary font-bold px-6 py-3 rounded-lg hover:bg-brand-primary hover:text-white transition-colors"
            >
              Fazer uma cotação agora
            </a>
          </div>
        </div>
        <div className="order-1 md:order-2 relative h-64 md:h-auto rounded-xl overflow-hidden shadow-lg">
          <img 
            src="https://picsum.photos/600/400" 
            alt="Equipe de atendimento" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-brand-dark/20"></div>
        </div>
      </div>
    </Section>
  );
};