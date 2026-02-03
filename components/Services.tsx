import React from 'react';
import { Section } from './ui/Section';
import { Briefcase, Plane, Hotel, Car, Ship, Bus } from 'lucide-react';

export const Services: React.FC = () => {
  const services = [
    { name: "Corporativo", icon: <Briefcase size={24} /> },
    { name: "Lazer", icon: <Plane size={24} /> },
    { name: "Hotéis", icon: <Hotel size={24} /> },
    { name: "Cruzeiros", icon: <Ship size={24} /> },
    { name: "Locação de carros", icon: <Car size={24} /> },
    { name: "Transfers", icon: <Bus size={24} /> },
  ];

  return (
    <Section id="services" className="border-t border-brand-border">
       <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <h3 className="text-lg font-bold text-brand-textSec uppercase tracking-wide">Nossos Serviços</h3>
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            {services.map((s, i) => (
              <div key={i} className="flex flex-col items-center gap-2 group cursor-default">
                <div className="p-3 bg-brand-bg rounded-full text-brand-textSec group-hover:text-brand-primary group-hover:bg-brand-light transition-colors">
                  {s.icon}
                </div>
                <span className="text-sm font-semibold text-brand-text">{s.name}</span>
              </div>
            ))}
          </div>
       </div>
    </Section>
  );
};