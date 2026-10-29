import React, { useState } from 'react';
import { SEDES_DATA } from '../data/mockData';

interface FaqModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const FaqModal: React.FC<FaqModalProps> = ({ isOpen, onClose }) => {
  const [question, setQuestion] = useState('');
  const [targetSede, setTargetSede] = useState<'valledupar' | 'atanquez'>('valledupar');
  const [userName, setUserName] = useState('');

  if (!isOpen) return null;

  const handleSendToWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    if (!question) return;

    const phone =
      targetSede === 'valledupar'
        ? SEDES_DATA.valledupar.whatsappNumber
        : SEDES_DATA.atanquez.whatsappNumber;

    const msg = `*CONSULTA / PREGUNTA - ARSAS IPS*\n\n` +
      (userName ? `*Nombre:* ${userName}\n` : '') +
      `*Sede:* ${targetSede === 'valledupar' ? 'Valledupar' : 'Atánquez'}\n` +
      `*Pregunta:* ${question}\n\n` +
      `Hola equipo de ARSAS IPS, tengo una inquietud y me gustaría recibir orientación.`;

    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(msg)}`, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-[#fdf9f1] rounded-3xl max-w-md w-full shadow-2xl border border-[#1c1c17]/10 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        <div className="bg-[#004786] text-white p-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-[24px]">help</span>
            <div>
              <h3 className="font-heading font-bold text-lg">¿Tienes otra pregunta?</h3>
              <p className="text-xs text-white/80">Te respondemos directamente por WhatsApp</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        <form onSubmit={handleSendToWhatsApp} className="p-6 flex flex-col gap-4">
          <div>
            <label className="block text-xs font-semibold text-[#1c1c17] mb-1">
              Tu Nombre (Opcional):
            </label>
            <input
              type="text"
              placeholder="Ej: Mariangel Cuello"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              className="w-full bg-white border border-[#1c1c17]/15 rounded-xl px-3 py-2 text-xs focus:outline-none focus:border-[#004786]"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-[#1c1c17] mb-1">
              Sede a consultar:
            </label>
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => setTargetSede('valledupar')}
                className={`py-2 px-3 rounded-xl text-xs font-bold border transition-colors ${
                  targetSede === 'valledupar'
                    ? 'bg-[#004786] text-white border-[#004786]'
                    : 'bg-white text-[#424751] border-[#1c1c17]/10'
                }`}
              >
                Sede Valledupar
              </button>
              <button
                type="button"
                onClick={() => setTargetSede('atanquez')}
                className={`py-2 px-3 rounded-xl text-xs font-bold border transition-colors ${
                  targetSede === 'atanquez'
                    ? 'bg-[#004786] text-white border-[#004786]'
                    : 'bg-white text-[#424751] border-[#1c1c17]/10'
                }`}
              >
                Sede Atánquez
              </button>
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-[#1c1c17] mb-1">
              Escribe tu consulta o duda: *
            </label>
            <textarea
              required
              rows={3}
              placeholder="Ej: ¿Qué costo tiene la valoración particular? o ¿Cómo radico mi orden de Sanitas?..."
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              className="w-full bg-white border border-[#1c1c17]/15 rounded-xl px-3 py-2 text-xs focus:outline-none focus:border-[#004786]"
            />
          </div>

          <div className="flex justify-end gap-3 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-full text-xs font-bold text-[#424751] hover:bg-[#ebe8e0]"
            >
              Cerrar
            </button>
            <button
              type="submit"
              className="flex items-center gap-1.5 bg-[#fc9427] hover:bg-[#e57f15] text-white px-5 py-2 rounded-full text-xs font-bold shadow-md transition-all"
            >
              <span className="material-symbols-outlined text-[16px]">chat</span>
              <span>Enviar a WhatsApp</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
