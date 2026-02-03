import React from "react";
import { MapPin, Navigation, Phone } from "lucide-react";

export const LocationSection: React.FC = () => {
  // Use o link “direções” para abrir no app do Google Maps (mobile-first)
  const mapsDirectionsUrl =
    "https://www.google.com/maps/dir/?api=1&destination=-8.1636220918671,-34.926400322501095&destination_place_id=ChIJkRLWtrwQqncRr_ff67fl0Vk";

  // Link do WhatsApp (troque pelo número real se quiser)
  const whatsappUrl = "#hero"; // ou: `https://wa.me/55SEUNUMERO?text=${encodeURIComponent("Olá! Quero atendimento na loja física.")}`

  return (
    <section id="location" className="bg-brand-surfaceAlt py-14 md:py-20">
      <div className="max-w-5xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Texto / CTAs */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-brand-accentLight px-3 py-1 text-sm font-semibold text-brand-accent">
              <MapPin size={16} />
              Loja física
            </div>

            <h2 className="mt-4 text-3xl md:text-4xl font-bold text-brand-text">
              Onde estamos
            </h2>

            <p className="mt-3 text-base md:text-lg text-brand-textSecondary max-w-xl">
              Atendimento presencial na loja. Se preferir, clique para abrir a
              rota no Google Maps e chegar mais rápido.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a
                href={mapsDirectionsUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-brand-accent hover:bg-brand-accentDark text-white px-5 py-3 text-sm font-semibold transition-colors shadow-sm"
              >
                <Navigation size={18} />
                Como chegar
              </a>

              <a
                href={whatsappUrl}
                className="inline-flex items-center justify-center gap-2 rounded-md border border-brand-border bg-white hover:bg-brand-surfaceAlt text-brand-text px-5 py-3 text-sm font-semibold transition-colors"
              >
                <Phone size={18} />
                Falar no WhatsApp
              </a>
            </div>

            <div className="mt-6 rounded-lg border border-brand-border bg-white p-4">
              <p className="text-sm font-semibold text-brand-text">
                VOERAPIDO — Loja Física
              </p>
              <p className="mt-1 text-sm text-brand-textSecondary">
                Recife – PE • Abra a rota no Google Maps para navegação.
              </p>
            </div>
          </div>

          {/* Mapa */}
          <div className="w-full">
            <div className="rounded-xl overflow-hidden border border-brand-border bg-white shadow-sm">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3949.387849692064!2d-34.926400322501095!3d-8.1636220918671!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7aae10bcb6d112d%3A0x59d1e5b7ebfdf7af!2sVOERAPIDO!5e0!3m2!1spt-BR!2sbr!4v1770126797534!5m2!1spt-BR!2sbr"
                className="w-full h-[320px] md:h-[420px]"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mapa da VOERAPIDO"
              />
            </div>

            <p className="mt-3 text-xs text-brand-textMuted">
              Dica: no celular, toque em “Como chegar” para abrir a rota direto
              no app do Google Maps.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};