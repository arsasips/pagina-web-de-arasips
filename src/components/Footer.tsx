import React from 'react';
import { CLINIC_LOGO_URL } from '../data/mockData';
import { ActiveView } from '../types';

interface FooterProps {
  onNavigate: (view: ActiveView) => void;
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenBooking }) => {
  return (
    <footer className="w-full bg-[#f7f3eb] border-t border-[#1c1c17]/5 mt-20 py-12">
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
              <span className="font-heading text-lg text-[#004786] font-bold">
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
                className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#004786] hover:bg-[#004786] hover:text-white transition-colors shadow-sm"
                aria-label="Facebook"
              >
                <span className="material-symbols-outlined text-[18px]">thumb_up</span>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#004786] hover:bg-[#004786] hover:text-white transition-colors shadow-sm"
                aria-label="Instagram"
              >
                <span className="material-symbols-outlined text-[18px]">photo_camera</span>
              </a>
              <a
                href="https://wa.me/573105606873"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-[#fc9427] text-white flex items-center justify-center hover:bg-[#e57f15] transition-colors shadow-sm"
                aria-label="WhatsApp"
              >
                <span className="material-symbols-outlined text-[18px]">chat</span>
              </a>
            </div>
          </div>

          {/* Col 2: Líneas de Atención */}
          <div className="flex flex-col gap-2">
            <h4 className="text-xs uppercase font-bold text-[#004786] tracking-wider mb-1">
              Líneas de Atención
            </h4>
            <div className="flex flex-col gap-3 text-sm text-[#424751]">
              <div>
                <p className="font-semibold text-[#1c1c17]">Sede Valledupar:</p>
                <a
                  className="hover:text-[#004786] font-medium transition-colors"
                  href="tel:+573105606873"
                >
                  +57 310 560 6873
                </a>
                <p className="text-xs text-[#727782]">Carrera 15 # 13C - 42, Barrio Obrero</p>
              </div>
              <div>
                <p className="font-semibold text-[#1c1c17]">Sede Atánquez:</p>
                <a
                  className="hover:text-[#004786] font-medium transition-colors"
                  href="tel:+573224993463"
                >
                  +57 322 499 3463
                </a>
                <p className="text-xs text-[#727782]">Calle 4 # 6-18, Corregimiento de Atánquez</p>
              </div>
            </div>
          </div>

          {/* Col 3: Horarios de Atención */}
          <div className="flex flex-col gap-2">
            <h4 className="text-xs uppercase font-bold text-[#004786] tracking-wider mb-1">
              Horarios de Atención
            </h4>
            <div className="flex flex-col gap-2 text-sm text-[#424751]">
              <div>
                <strong className="text-[#1c1c17] font-semibold block">Sede Valledupar:</strong>
                <p>Mañana (Recepción): 7:00 a. m. – 12:00 m.</p>
                <p>Tarde (Solo WhatsApp): 2:00 p. m. – 4:00 p. m.</p>
              </div>
              <div className="pt-1">
                <strong className="text-[#1c1c17] font-semibold block">Sede Atánquez:</strong>
                <p>Lunes a Viernes: 7:30 a. m. – 3:00 p. m.</p>
              </div>
            </div>
          </div>

          {/* Col 4: Especialidades y Accesos */}
          <div className="flex flex-col gap-2">
            <h4 className="text-xs uppercase font-bold text-[#004786] tracking-wider mb-1">
              Especialidades
            </h4>
            <nav className="flex flex-col gap-1.5 text-sm text-[#424751]">
              <button
                onClick={() => onNavigate('servicios')}
                className="text-left hover:text-[#004786] transition-colors"
              >
                Fonoaudiología & Lenguaje
              </button>
              <button
                onClick={() => onNavigate('servicios')}
                className="text-left hover:text-[#004786] transition-colors"
              >
                Fisioterapia & Motricidad
              </button>
              <button
                onClick={() => onNavigate('servicios')}
                className="text-left hover:text-[#004786] transition-colors"
              >
                Terapia Ocupacional & Sensorial
              </button>
              <button
                onClick={() => onNavigate('servicios')}
                className="text-left hover:text-[#004786] transition-colors"
              >
                Neuropsicología Clínica
              </button>
              <button
                onClick={() => onNavigate('servicios')}
                className="text-left hover:text-[#004786] transition-colors"
              >
                Educación Especial Inclusiva
              </button>
              <button
                onClick={onOpenBooking}
                className="text-left font-semibold text-[#fc9427] hover:underline pt-1"
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
            <span className="hover:text-[#004786] cursor-pointer">Política de Privacidad</span>
            <span>·</span>
            <span className="hover:text-[#004786] cursor-pointer">Términos de Servicio</span>
            <span>·</span>
            <span className="hover:text-[#004786] cursor-pointer">Habilitación Secretaría de Salud</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
