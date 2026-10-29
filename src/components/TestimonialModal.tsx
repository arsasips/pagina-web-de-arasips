import React, { useState } from 'react';
import { Testimonial } from '../types';

interface TestimonialModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (testimonial: Testimonial) => void;
}

export const TestimonialModal: React.FC<TestimonialModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
}) => {
  const [author, setAuthor] = useState('');
  const [city, setCity] = useState('Valledupar');
  const [relation, setRelation] = useState('Familiar de paciente');
  const [rating, setRating] = useState(5);
  const [service, setService] = useState('Fonoaudiología');
  const [sede, setSede] = useState<'Valledupar' | 'Atánquez'>('Valledupar');
  const [comment, setComment] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!author || !comment) {
      alert('Por favor completa tu nombre y tu comentario.');
      return;
    }

    const newTestimonial: Testimonial = {
      id: `test-${Date.now()}`,
      author,
      city,
      relation,
      rating,
      comment,
      service,
      sede,
      date: 'Reciente',
      isExample: false,
    };

    onSubmit(newTestimonial);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-[#fdf9f1] rounded-3xl max-w-lg w-full shadow-2xl border border-[#1c1c17]/10 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        <div className="bg-[#004786] text-white p-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-[24px]">rate_review</span>
            <div>
              <h3 className="font-heading font-bold text-lg">Compartir tu Experiencia</h3>
              <p className="text-xs text-white/80">Tu opinión ayuda a más familias en Cesar</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 flex flex-col gap-4">
          <div>
            <label className="block text-xs font-semibold text-[#1c1c17] mb-1">
              Calificación:
            </label>
            <div className="flex items-center gap-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  type="button"
                  key={star}
                  onClick={() => setRating(star)}
                  className="text-2xl text-[#fc9427] hover:scale-110 transition-transform"
                >
                  <span
                    className="material-symbols-outlined"
                    style={{ fontVariationSettings: `'FILL' ${star <= rating ? 1 : 0}` }}
                  >
                    star
                  </span>
                </button>
              ))}
              <span className="text-xs font-bold text-[#424751] ml-2">
                {rating} de 5 estrellas
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-[#1c1c17] mb-1">
                Tu Nombre o Familia: *
              </label>
              <input
                type="text"
                required
                placeholder="Ej: Familia Romero"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                className="w-full bg-white border border-[#1c1c17]/15 rounded-xl px-3 py-2 text-xs focus:outline-none focus:border-[#004786]"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-[#1c1c17] mb-1">
                Ciudad / Municipio:
              </label>
              <input
                type="text"
                placeholder="Ej: Valledupar"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="w-full bg-white border border-[#1c1c17]/15 rounded-xl px-3 py-2 text-xs focus:outline-none focus:border-[#004786]"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-[#1c1c17] mb-1">
                Rol o Relación:
              </label>
              <select
                value={relation}
                onChange={(e) => setRelation(e.target.value)}
                className="w-full bg-white border border-[#1c1c17]/15 rounded-xl px-3 py-2 text-xs focus:outline-none focus:border-[#004786]"
              >
                <option value="Familiar de paciente">Familiar de paciente</option>
                <option value="Paciente de rehabilitación">Paciente de rehabilitación</option>
                <option value="Acudiente de educación especial">Acudiente educación especial</option>
                <option value="Docente o terapeuta">Docente o terapeuta</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-semibold text-[#1c1c17] mb-1">
                Sede donde fuiste atendido:
              </label>
              <select
                value={sede}
                onChange={(e) => setSede(e.target.value as 'Valledupar' | 'Atánquez')}
                className="w-full bg-white border border-[#1c1c17]/15 rounded-xl px-3 py-2 text-xs focus:outline-none focus:border-[#004786]"
              >
                <option value="Valledupar">Sede Valledupar</option>
                <option value="Atánquez">Sede Atánquez</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-[#1c1c17] mb-1">
              Tu Testimonio u Opinión: *
            </label>
            <textarea
              required
              rows={3}
              placeholder="Escribe cómo ha sido la experiencia, el trato del personal y los avances observados..."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              className="w-full bg-white border border-[#1c1c17]/15 rounded-xl px-3 py-2 text-xs focus:outline-none focus:border-[#004786]"
            />
          </div>

          <div className="flex justify-end gap-3 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-full text-xs font-bold text-[#424751] hover:bg-[#ebe8e0]"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="bg-[#fc9427] hover:bg-[#e57f15] text-white px-6 py-2 rounded-full text-xs font-bold shadow-md transition-all"
            >
              Publicar Testimonio
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
