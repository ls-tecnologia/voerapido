import React from 'react';
import { Section } from './ui/Section';
import { MessageSquareText, SearchCheck, Ticket } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      icon: <MessageSquareText size={32} className="text-white" />,
      title: "1. Solicite",
      desc: "Preencha os dados da viagem no topo da página e envie para nosso WhatsApp."
    },
    {
      icon: <SearchCheck size={32} className="text-white" />,
      title: "2. Aprove",
      desc: "Nosso consultor retorna em minutos com as melhores opções de voos e hotéis."
    },
    {
      icon: <Ticket size={32} className="text-white" />,
      title: "3. Viaje",
      desc: "Pagamento seguro e emissão imediata dos vouchers. Boa viagem!"
    }
  ];

  return (
    <Section id="how-it-works" darker>
      <div className="text-center mb-10">
        <h2 className="text-2xl font-bold text-brand-text">Como funciona</h2>
        <p className="text-brand-textSec mt-2">Simplicidade do início ao fim.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col items-center text-center p-6 bg-brand-surface rounded-xl shadow-sm border border-brand-border">
            <div className="w-16 h-16 bg-brand-primary rounded-full flex items-center justify-center mb-4 shadow-lg shadow-brand-primary/20">
              {step.icon}
            </div>
            <h3 className="text-lg font-bold text-brand-text mb-2">{step.title}</h3>
            <p className="text-sm text-brand-textSec leading-relaxed">
              {step.desc}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
};