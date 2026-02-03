import React, { useState, useEffect } from 'react';
import { Menu, X, Plane } from 'lucide-react';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Orçamento', href: '#hero' },
    { name: 'Como Funciona', href: '#how-it-works' },
    { name: 'Benefícios', href: '#benefits' },
    { name: 'Depoimentos', href: '#testimonials' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMenuOpen
          ? 'bg-brand-surface shadow-md py-3'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-5xl mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="bg-brand-primary p-1.5 rounded-lg text-white">
            <Plane size={20} fill="currentColor" />
          </div>
          <span className="text-xl font-bold tracking-tight text-brand-text">
            VOERAPIDO
          </span>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 text-brand-text hover:bg-brand-surfaceHighlight rounded-md"
          aria-label="Menu"
        >
          {isMenuOpen ? (
            <X size={24} />
          ) : (
            <Menu size={24} />
          )}
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-brand-text hover:text-brand-primary transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#hero"
            className="bg-brand-primary hover:bg-brand-dark text-white px-5 py-2 rounded-md text-sm font-semibold transition-colors shadow-sm"
          >
            Falar no WhatsApp
          </a>
        </nav>
      </div>

      {/* Mobile Nav Dropdown */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-brand-surface shadow-lg border-t border-brand-border md:hidden animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col p-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="py-3 px-4 text-brand-text hover:bg-brand-surfaceHighlight rounded-md text-base font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};