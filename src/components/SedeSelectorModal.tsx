import React from 'react';
import { SedeName } from '../types';

interface SedeSelectorModalProps {
  isOpen: boolean;
  required: boolean;
  selectedSede: SedeName | null;
  onClose: () => void;
  onSelect: (sede: SedeName) => void;
}

export const SedeSelectorModal: React.FC<SedeSelectorModalProps> = ({
  isOpen,
  required,
  selectedSede,
  onClose,
  onSelect,
}) => {
  if (!isOpen) return null;

  const options: { name: SedeName; address: string; icon: string }[] = [
    {
      name: 'Valledupar',
      address: 'Carrera 17 # 13B bis-14, barrio Alfonso López',
      icon: 'location_city',
    },
    {
      name: 'Atánquez',
      address: 'Carrera 4 # 6-52',
      icon: 'nature_people',
    },
  ];

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-[#14202b]/65 p-4 backdrop-blur-sm">
      <section
        aria-labelledby="sede-selector-title"
        aria-modal="true"
        className="w-full max-w-lg rounded-3xl border border-[#1c1c17]/10 bg-[#FAFCFF] p-6 shadow-2xl sm:p-8"
        role="dialog"
      >
        <div className="mb-6 text-center">
          <span className="material-symbols-outlined mb-2 text-4xl text-[#004090]" aria-hidden="true">
            location_on
          </span>
          <h2 id="sede-selector-title" className="font-heading text-2xl font-bold text-[#1c1c17]">
            {required ? '¿Qué sede quieres consultar?' : 'Cambiar de sede'}
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-[#424751]">
            Mostraremos la dirección, el horario y el contacto de la sede que elijas.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          {options.map((option) => (
            <button
              aria-pressed={selectedSede === option.name}
              className={`flex min-h-20 items-center gap-4 rounded-2xl border p-4 text-left transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#004090] ${
                selectedSede === option.name
                  ? 'border-[#004090] bg-[#004090]/5'
                  : 'border-[#1c1c17]/10 bg-white hover:border-[#004090]/50'
              }`}
              key={option.name}
              onClick={() => onSelect(option.name)}
              type="button"
            >
              <span className="material-symbols-outlined text-3xl text-[#004090]" aria-hidden="true">
                {option.icon}
              </span>
              <span className="flex flex-1 flex-col gap-1">
                <span className="font-bold text-[#1c1c17]">Sede {option.name}</span>
                <span className="text-sm text-[#424751]">{option.address}</span>
              </span>
              {selectedSede === option.name && (
                <span className="material-symbols-outlined text-[#004090]" aria-hidden="true">
                  check_circle
                </span>
              )}
            </button>
          ))}
        </div>

        {!required && (
          <button
            className="mt-5 w-full rounded-full px-4 py-3 text-sm font-semibold text-[#004090] hover:bg-[#004090]/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#004090]"
            onClick={onClose}
            type="button"
          >
            Seguir en sede {selectedSede}
          </button>
        )}
      </section>
    </div>
  );
};
