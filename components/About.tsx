import React from 'react';
import { Section } from './ui/Section';

export const About: React.FC = () => {
  return (
    <Section id="about">
      <div className="bg-brand-dark rounded-2xl p-8 md:p-12 text-center md:text-left text-white relative overflow-hidden">
        <div className="relative z-10 grid md:grid-cols-3 gap-8 items-center">
          <div className="md:col-span-2 space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold">Mais que uma agência, seus parceiros de viagem.</h2>
            <p className="text-brand-light/90 text-sm md:text-base leading-relaxed">
              Fundada com o objetivo de simplificar o turismo corporativo e de lazer, a VOERAPIDO combina tecnologia com atendimento humano. 
              Não somos robôs. Somos especialistas prontos para encontrar a melhor rota, o melhor hotel e o melhor preço para você.
            </p>
            <div className="pt-4">
               <a 
                 href="#hero"
                 className="inline-block bg-white text-brand-primary font-bold px-8 py-3 rounded-lg shadow-lg hover:bg-brand-surfaceHighlight transition-colors"
               >
                 Fale com um consultor
               </a>
            </div>
          </div>
          <div className="hidden md:block md:col-span-1">
            <div className="w-full aspect-square rounded-full overflow-hidden border-4 border-white/20 shadow-2xl">
               <img src="https://picsum.photos/400/400" alt="Consultor" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
        
        {/* Background Pattern */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-60 h-60 bg-brand-primary/20 rounded-full blur-3xl"></div>
      </div>
    </Section>
  );
};