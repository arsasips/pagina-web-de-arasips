import React, { useState } from 'react';
import { CLINIC_LOGO_URL } from '../data/mockData';
import { ActiveView } from '../types';

interface NavbarProps {
  activeView: ActiveView;
  setActiveView: (view: ActiveView) => void;
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeView,
  setActiveView,
  onOpenBooking,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (view: ActiveView) => {
    setActiveView(view);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#fdf9f1]/95 backdrop-blur-xl border-b border-[#1c1c17]/5 shadow-[0_1px_12px_rgba(0,0,0,0.04)]">
      <div className="h-20 max-w-[1240px] mx-auto px-4 md:px-8 flex items-center justify-between gap-4">
        {/* Brand Logo & Name */}
        <button
          onClick={() => handleNavClick('inicio')}
          className="flex items-center gap-3 text-left transition-opacity hover:opacity-90 focus:outline-none"
        >
          <img
            alt="Logo ARSAS IPS"
            className="h-10 w-auto object-contain shrink-0"
            src={CLINIC_LOGO_URL}
          />
          <div className="flex flex-col">
            <span className="font-heading text-xl text-[#004786] font-bold tracking-tight leading-none">
              ARSAS IPS
            </span>
            <span className="hidden sm:inline text-[11px] text-[#424751] uppercase tracking-wider font-semibold mt-0.5">
              Rehabilitación y Educación Especial
            </span>
          </div>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6">
          <button
            onClick={() => handleNavClick('inicio')}
            className={`text-sm font-semibold transition-colors py-1 ${
              activeView === 'inicio'
                ? 'text-[#004786] border-b-2 border-[#004786]'
                : 'text-[#424751] hover:text-[#004786]'
            }`}
          >
            Inicio
          </button>
          <button
            onClick={() => handleNavClick('servicios')}
            className={`text-sm font-semibold transition-colors py-1 ${
              activeView === 'servicios'
                ? 'text-[#004786] border-b-2 border-[#004786]'
                : 'text-[#424751] hover:text-[#004786]'
            }`}
          >
            Servicios
          </button>
          <button
            onClick={() => handleNavClick('sedes')}
            className={`text-sm font-semibold transition-colors py-1 ${
              activeView === 'sedes'
                ? 'text-[#004786] border-b-2 border-[#004786]'
                : 'text-[#424751] hover:text-[#004786]'
            }`}
          >
            Sedes
          </button>
          <button
            onClick={() => handleNavClick('especialistas')}
            className={`text-sm font-semibold transition-colors py-1 ${
              activeView === 'especialistas'
                ? 'text-[#004786] border-b-2 border-[#004786]'
                : 'text-[#424751] hover:text-[#004786]'
            }`}
          >
            Especialistas
          </button>
          <button
            onClick={() => handleNavClick('portal')}
            className={`text-sm font-semibold transition-colors py-1 ${
              activeView === 'portal'
                ? 'text-[#004786] border-b-2 border-[#004786]'
                : 'text-[#424751] hover:text-[#004786]'
            }`}
          >
            Consultar Cita
          </button>
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          {/* Agendar Online Trigger */}
          <button
            onClick={onOpenBooking}
            className="hidden sm:inline-flex items-center gap-1.5 bg-[#004786] hover:bg-[#00386b] text-white text-xs md:text-sm font-bold px-3.5 py-2 md:py-2.5 rounded-full transition-all shadow-sm hover:shadow"
          >
            <span className="material-symbols-outlined text-[18px]">calendar_month</span>
            <span>Agendar Cita</span>
          </button>

          {/* Quick WhatsApp Pill (Matching Original Design) */}
          <a
            className="flex items-center gap-1.5 bg-[#fc9427] hover:bg-[#e57f15] text-white px-3.5 md:px-4 py-2 rounded-full shadow-[0_4px_16px_rgba(252,148,39,0.32)] transition-all transform hover:-translate-y-0.5"
            href="https://wa.me/573105606873"
            rel="noopener noreferrer"
            target="_blank"
            title="Escríbenos por WhatsApp"
          >
            <span className="material-symbols-outlined text-[18px]">chat</span>
            <span className="text-sm font-bold">Escríbenos</span>
          </a>

          {/* Patient Portal Icon Trigger */}
          <button
            onClick={() => handleNavClick('portal')}
            title="Portal de Pacientes / Consultar Cita"
            className="w-9 h-9 rounded-full bg-[#004786] hover:bg-[#00386b] flex items-center justify-center shrink-0 transition-colors text-white focus:outline-none"
          >
            <span className="material-symbols-outlined text-white text-[19px]">person</span>
          </button>

          {/* Mobile Hamburger Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-[#1c1c17] hover:bg-[#ebe8e0] focus:outline-none"
            aria-label="Abrir menú"
          >
            <span className="material-symbols-outlined text-[26px]">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#fdf9f1] border-b border-[#1c1c17]/10 px-6 py-4 flex flex-col gap-3 shadow-xl">
          <button
            onClick={() => handleNavClick('inicio')}
            className={`text-left text-base font-semibold py-2 ${
              activeView === 'inicio' ? 'text-[#004786] font-bold' : 'text-[#424751]'
            }`}
          >
            Inicio
          </button>
          <button
            onClick={() => handleNavClick('servicios')}
            className={`text-left text-base font-semibold py-2 ${
              activeView === 'servicios' ? 'text-[#004786] font-bold' : 'text-[#424751]'
            }`}
          >
            Servicios Clínicos
          </button>
          <button
            onClick={() => handleNavClick('sedes')}
            className={`text-left text-base font-semibold py-2 ${
              activeView === 'sedes' ? 'text-[#004786] font-bold' : 'text-[#424751]'
            }`}
          >
            Nuestras Sedes (Valledupar & Atánquez)
          </button>
          <button
            onClick={() => handleNavClick('especialistas')}
            className={`text-left text-base font-semibold py-2 ${
              activeView === 'especialistas' ? 'text-[#004786] font-bold' : 'text-[#424751]'
            }`}
          >
            Equipo de Especialistas
          </button>
          <button
            onClick={() => handleNavClick('portal')}
            className={`text-left text-base font-semibold py-2 ${
              activeView === 'portal' ? 'text-[#004786] font-bold' : 'text-[#424751]'
            }`}
          >
            Consultar Estado de Cita o EPS
          </button>
          <div className="pt-2 border-t border-[#1c1c17]/10 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full flex items-center justify-center gap-2 bg-[#004786] text-white py-2.5 rounded-full font-bold text-sm"
            >
              <span className="material-symbols-outlined text-[18px]">calendar_month</span>
              <span>Agendar Cita en Línea</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
