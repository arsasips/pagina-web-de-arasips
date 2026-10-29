import React from 'react';
import { ServiceItem, Specialist } from '../types';
import { SPECIALISTS_DATA, SEDES_DATA } from '../data/mockData';

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onBookService: (serviceId: string) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
  onBookService,
}) => {
  if (!service) return null;

  const relevantSpecialists = SPECIALISTS_DATA.filter((s) =>
    s.specialty.toLowerCase().includes(service.name.toLowerCase().slice(0, 5))
  );

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-[#fdf9f1] rounded-3xl max-w-xl w-full shadow-2xl border border-[#1c1c17]/10 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="bg-gradient-to-r from-[#004786] to-[#1d5fa7] text-white p-6 relative">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center text-white shrink-0">
              <span className="material-symbols-outlined text-[32px]">{service.iconName}</span>
            </div>
            <div>
              <span className="text-[11px] uppercase tracking-widest font-bold text-[#cce5ff]">
                {service.categoryLabel}
              </span>
              <h3 className="font-heading font-bold text-2xl leading-tight">
                {service.name}
              </h3>
              <p className="text-xs text-white/90 mt-0.5">{service.subtitle}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col gap-5">
          <div>
            <h4 className="text-xs font-bold uppercase text-[#004786] tracking-wider mb-1.5">
              Enfoque Clínico y Terapéutico
            </h4>
            <p className="text-sm text-[#424751] leading-relaxed">
              {service.description}
            </p>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase text-[#004786] tracking-wider mb-2">
              Motivos de Consulta y Recomendaciones:
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {service.recommendedFor.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2 bg-white p-2.5 rounded-xl border border-[#1c1c17]/5 text-xs text-[#1c1c17]"
                >
                  <span className="material-symbols-outlined text-emerald-600 text-[18px] shrink-0">
                    check_circle
                  </span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase text-[#004786] tracking-wider mb-2">
              Disponibilidad en Sedes:
            </h4>
            <div className="flex gap-2">
              {service.sedes.map((sede) => (
                <span
                  key={sede}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold bg-[#cce5ff] text-[#004786]"
                >
                  <span className="material-symbols-outlined text-[16px]">pin_drop</span>
                  <span>Sede {sede}</span>
                </span>
              ))}
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-3 pt-2 border-t border-[#1c1c17]/10">
            <button
              onClick={() => {
                onClose();
                onBookService(service.id);
              }}
              className="flex-1 flex items-center justify-center gap-2 bg-[#fc9427] hover:bg-[#e57f15] text-white py-3 rounded-full font-bold text-sm shadow-[0_4px_16px_rgba(252,148,39,0.32)] transition-all"
            >
              <span className="material-symbols-outlined text-[18px]">calendar_month</span>
              <span>Agendar cita de {service.name}</span>
            </button>
            <a
              href={`https://wa.me/${SEDES_DATA.valledupar.whatsappNumber}?text=${encodeURIComponent(
                service.whatsappText
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-[#004786] hover:bg-[#00386b] text-white px-5 py-3 rounded-full font-bold text-sm transition-colors"
            >
              <span className="material-symbols-outlined text-[18px]">chat</span>
              <span>WhatsApp Directo</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
