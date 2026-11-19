import React from 'react';
import { CLINIC_LOGO_URL } from '../data/mockData';
import { ActiveView } from '../types';
import { getSedeInfo } from '../data/mockData';

interface FooterProps {
  onNavigate: (view: ActiveView) => void;
  onOpenBooking: () => void;
  selectedSede: 'Valledupar' | 'Atánquez';
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenBooking, selectedSede }) => {
  const sede = getSedeInfo(selectedSede);
  return (
    <footer className="w-full bg-[#F2F8FE] border-t border-[#1c1c17]/5 mt-20 py-12">
      <div className="max-w-[1240px] mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-10 border-b border-[#1c1c17]/10">
          {/* Col 1: Brand Info */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <img
                alt="Logo ARSAS IPS"
                className="h-8 w-auto object-contain"
                src={CLINIC_LOGO_URL}
              />
              <span className="font-heading text-lg text-[#004090] font-bold">
                ARSAS IPS
              </span>
            </div>
            <p className="text-sm text-[#424751] leading-relaxed">
              Atención multidisciplinaria con vocación humana, excelencia científica e inclusión
              integral en Cesar.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#004090] hover:bg-[#004090] hover:text-white transition-colors shadow-sm"
                aria-label="Facebook"
              >
                <span className="material-symbols-outlined text-[18px]">thumb_up</span>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#004090] hover:bg-[#004090] hover:text-white transition-colors shadow-sm"
                aria-label="Instagram"
              >
                <span className="material-symbols-outlined text-[18px]">photo_camera</span>
              </a>
              <a
                href={`https://wa.me/${sede.whatsappNumber}`}
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-[#B84500] text-white flex items-center justify-center hover:bg-[#943700] transition-colors shadow-sm"
                aria-label="WhatsApp"
              >
                <span className="material-symbols-outlined text-[18px]">chat</span>
              </a>
            </div>
          </div>

          {/* Col 2: Líneas de Atención */}
          <div className="flex flex-col gap-2">
            <h4 className="text-xs uppercase font-bold text-[#004090] tracking-wider mb-1">
              Líneas de Atención
            </h4>
            <div className="flex flex-col gap-3 text-sm text-[#424751]">
              <div><p className="font-semibold text-[#1c1c17]">Sede {selectedSede}:</p>
                <a className="hover:text-[#004090] font-medium transition-colors" href={`tel:+${sede.whatsappNumber}`}>{sede.whatsappFormatted}</a>
                <p className="text-xs text-[#727782]">{sede.address}</p>
              </div>
            </div>
          </div>

          {/* Col 3: Horarios de Atención */}
          <div className="flex flex-col gap-2">
            <h4 className="text-xs uppercase font-bold text-[#004090] tracking-wider mb-1">
              Horarios de Atención
            </h4>
            <div className="flex flex-col gap-2 text-sm text-[#424751]"><strong className="text-[#1c1c17] font-semibold block">Sede {selectedSede}:</strong><p>{sede.schedule}</p></div>
          </div>

          {/* Col 4: Especialidades y Accesos */}
          <div className="flex flex-col gap-2">
            <h4 className="text-xs uppercase font-bold text-[#004090] tracking-wider mb-1">
              Especialidades
            </h4>
            <nav className="flex flex-col gap-1.5 text-sm text-[#424751]">
              <button
                onClick={() => onNavigate('servicios')}
                className="text-left hover:text-[#004090] transition-colors"
              >
                Fonoaudiología & Lenguaje
              </button>
              <button
                onClick={() => onNavigate('servicios')}
                className="text-left hover:text-[#004090] transition-colors"
              >
                Fisioterapia & Motricidad
              </button>
              <button
                onClick={() => onNavigate('servicios')}
                className="text-left hover:text-[#004090] transition-colors"
              >
                Terapia Ocupacional & Sensorial
              </button>
              <button
                onClick={() => onNavigate('servicios')}
                className="text-left hover:text-[#004090] transition-colors"
              >
                Neuropsicología Clínica
              </button>
              <button
                onClick={() => onNavigate('servicios')}
                className="text-left hover:text-[#004090] transition-colors"
              >
                Educación Especial Inclusiva
              </button>
              <button
                onClick={onOpenBooking}
                className="text-left font-semibold text-[#B84500] hover:underline pt-1"
              >
                → Solicitar Cita Médica
              </button>
            </nav>
          </div>
        </div>

        {/* Bottom Legal Bar */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-center md:text-left text-xs text-[#727782]">
          <p>© 2026 Centro de Rehabilitación y Educación Especial ARSAS IPS S.A.S. Todos los derechos reservados.</p>
          <div className="flex items-center gap-4">
            <span className="hover:text-[#004090] cursor-pointer">Política de Privacidad</span>
            <span>·</span>
            <span className="hover:text-[#004090] cursor-pointer">Términos de Servicio</span>
            <span>·</span>
            <span className="hover:text-[#004090] cursor-pointer">Habilitación Secretaría de Salud</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
