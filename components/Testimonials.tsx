import React from "react";
import { Section } from "./ui/Section";
import { Star } from "lucide-react";
import { Testimonial } from "../types";

export const Testimonials: React.FC = () => {
  const reviews: Testimonial[] = [
    {
      id: 1,
      name: "Ismelta Marques",
      text: "Atendimento rápido. Funcionária prestativa e simpática. Segunda vez que uso o serviço. Muito bom.",
      rating: 5,
    },
    {
      id: 2,
      name: "Regiane cristina Santos ferreira",
      text: "Atendimento rápido, bem explicativo e são muitos educados",
      rating: 5,
    },
    {
      id: 3,
      name: "Lindalva Coelho",
      text: "Já sou cliente antiga, o atendimento é agilidade é excelente.",
      rating: 5,
    },
  ];

  return (
    <Section id="testimonials" darker>
      <div className="text-center mb-10">
        <h2 className="text-2xl font-bold text-brand-text">
          O que dizem nossos clientes
        </h2>
        <div className="flex justify-center items-center gap-2 mt-2">
          <div className="flex">
            {[1, 2, 3, 4, 5].map((i) => (
              <Star
                key={i}
                size={16}
                className="text-yellow-400 fill-yellow-400"
              />
            ))}
          </div>
          <span className="text-sm text-brand-textSec font-medium">
            4.9/5 no Google
          </span>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="bg-brand-surface p-6 rounded-xl shadow-sm border border-brand-border flex flex-col h-full"
          >
            <div className="flex mb-3">
              {[...Array(review.rating)].map((_, i) => (
                <Star
                  key={i}
                  size={14}
                  className="text-yellow-400 fill-yellow-400"
                />
              ))}
            </div>
            <p className="text-brand-text text-sm leading-relaxed italic flex-grow mb-4">
              "{review.text}"
            </p>
            <div className="mt-auto pt-4 border-t border-brand-border">
              <p className="font-bold text-brand-text text-sm">{review.name}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};
