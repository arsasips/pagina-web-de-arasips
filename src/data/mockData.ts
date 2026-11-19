import { ServiceItem, Specialist, SedeInfo, SedeName, Testimonial, FaqItem, AppointmentRecord } from '../types';

export const CLINIC_LOGO_URL = '/images/arsas-logo.jpeg';

export const SEDES_DATA: Record<'valledupar' | 'atanquez', SedeInfo> = {
  valledupar: {
    id: 'valledupar',
    name: 'Sede Valledupar',
    badge: 'Sede Principal',
    address: 'Carrera 17 # 13B bis-14, barrio Alfonso López, Valledupar, Cesar',
    schedule:
      'Lunes y martes: 7:00 a. m.–12:30 p. m. y 2:00–5:00 p. m. Miércoles a viernes: 7:00 a. m.–12:00 p. m. y 2:00–5:00 p. m.',
    whatsappNumber: '573105606873',
    whatsappFormatted: '+57 310 560 6873',
    phone: '(605) 574 3820',
    facilities: [
      'Gimnasio de rehabilitación física y motora',
      'Salas insonorizadas de fonoaudiología y voz',
      'Consultorios de neuropsicología y psicología',
      'Sala de estimulación sensorial pediátrica',
      'Rampa de acceso 100% universal y baños adaptados',
      'Parqueadero y zonas verdes de esparcimiento',
    ],
    image: '/images/sede-valledupar-fachada.jpeg',
    description:
      'Instalaciones modernas equipadas para rehabilitación neuromuscular, fonoaudiológica y neurocognitiva en el corazón de Valledupar.',
  },
  atanquez: {
    id: 'atanquez',
    name: 'Sede Atánquez',
    badge: 'Comunidad y Territorio',
    address: 'Carrera 4 # 6-52, Atánquez, Cesar',
    schedule:
      'Lunes a jueves: 7:30 a. m.–12:00 p. m. y 1:00–4:00 p. m. Viernes: 7:00 a. m.–3:00 p. m.',
    whatsappNumber: '573224993463',
    whatsappFormatted: '+57 322 499 3463',
    phone: '(605) 571 8912',
    facilities: [
      'Espacios adaptados al entorno cultural y comunitario',
      'Consultorio de apoyo en educación especial e inclusión escolar',
      'Terapia ocupacional orientada a habilidades cotidianas',
      'Atención y seguimiento a familias y comunidades de la Sierra',
      'Punto de recepción y orientación en trámites de salud EPS',
    ],
    image: '/images/sede-atanquez-fachada.jpeg',
    description:
      'Compromiso de cercanía e inclusión territorial en las estribaciones de la Sierra Nevada para familias de Atánquez y pueblos cercanos.',
  },
};

export const getSedeInfo = (sede: SedeName): SedeInfo =>
  SEDES_DATA[sede === 'Valledupar' ? 'valledupar' : 'atanquez'];

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'fonoaudiologia',
    name: 'Fonoaudiología',
    subtitle: 'Mejora el habla y la comunicación',
    description:
      'Diagnóstico, estimulación y rehabilitación de trastornos del lenguaje, articulación, deglución, voz y comunicación en niños y adultos.',
    iconName: 'record_voice_over',
    category: 'lenguaje',
    categoryLabel: 'Lenguaje & Comunicación',
    recommendedFor: [
      'Retraso en el inicio del habla',
      'Dificultades de pronunciación y tartamudez',
      'Dificultad para tragar (disfagia)',
      'Rehabilitación de la voz y audición',
    ],
    sedes: ['Valledupar', 'Atánquez'],
    whatsappText: 'Hola ARSAS IPS, quiero pedir una cita de Fonoaudiología',
  },
  {
    id: 'fisioterapia',
    name: 'Fisioterapia',
    subtitle: 'Recupera la función física y el movimiento',
    description:
      'Técnicas avanzadas de ejercicio terapéutico, mecanoterapia y reeducación motriz para recuperar la movilidad, fuerza y aliviar el dolor muscular.',
    iconName: 'accessibility_new',
    category: 'motor',
    categoryLabel: 'Rehabilitación Física',
    recommendedFor: [
      'Lesiones musculares, articulares y posquirúrgicas',
      'Parálisis cerebral y condiciones neuromotoras',
      'Dolores lumbares y problemas posturales',
      'Rehabilitación de la marcha y equilibrio en adultos mayores',
    ],
    sedes: ['Valledupar', 'Atánquez'],
    whatsappText: 'Hola ARSAS IPS, quiero pedir una cita de Fisioterapia',
  },
  {
    id: 'terapia-ocupacional',
    name: 'Terapia ocupacional',
    subtitle: 'Más independencia en las tareas del día a día',
    description:
      'Entrenamiento funcional y sensorial para que niños y adultos alcancen la máxima autonomía en el autocuidado, juego, estudio y vida laboral.',
    iconName: 'handshake',
    category: 'motor',
    categoryLabel: 'Autonomía & Sensorial',
    recommendedFor: [
      'Desarrollo de motricidad fina y agarre de lápiz',
      'Integración sensorial en niños',
      'Adaptación para actividades de la vida diaria (vestido, higiene)',
      'Reintegro laboral y adaptaciones ergonómicas',
    ],
    sedes: ['Valledupar', 'Atánquez'],
    whatsappText: 'Hola ARSAS IPS, quiero pedir una cita de Terapia Ocupacional',
  },
  {
    id: 'psicologia',
    name: 'Psicología',
    subtitle: 'Trabaja comportamientos y acciones para mejorar el bienestar',
    description:
      'Acompañamiento psicológico clínico, infantil, juvenil y familiar enfocado en manejo emocional, conducta, autoestima y resolución de conflictos.',
    iconName: 'psychology_alt',
    category: 'salud-mental',
    categoryLabel: 'Salud Mental & Emocional',
    recommendedFor: [
      'Manejo de ansiedad, estrés y cambios de estado de ánimo',
      'Pautas de crianza positiva y conducta en el hogar',
      'Acompañamiento en duelos o transiciones familiares',
      'Orientación vocacional y habilidades sociales',
    ],
    sedes: ['Valledupar', 'Atánquez'],
    whatsappText: 'Hola ARSAS IPS, quiero pedir una cita de Psicología',
  },
  {
    id: 'psiquiatria',
    name: 'Psiquiatría',
    subtitle: 'Atención especializada en salud mental',
    description:
      'Valoración médica especializada, diagnóstico y tratamiento clínico de condiciones de salud mental complejas con enfoque ético y humano.',
    iconName: 'health_and_safety',
    category: 'salud-mental',
    categoryLabel: 'Médica Especializada',
    recommendedFor: [
      'Trastornos del estado del ánimo recurrentes',
      'TDAH y trastornos neuroconductuales',
      'Trastornos de ansiedad refractarios',
      'Acompañamiento psicofarmacológico supervisado',
    ],
    sedes: ['Valledupar', 'Atánquez'],
    whatsappText: 'Hola ARSAS IPS, quiero pedir una cita de Psiquiatría',
  },
  {
    id: 'fisiatria',
    name: 'Fisiatría',
    subtitle: 'Valoración médica en rehabilitación y función física',
    description:
      'Atención médica especializada para orientar procesos de rehabilitación y apoyar la recuperación de la función física.',
    iconName: 'accessibility_new',
    category: 'motor',
    categoryLabel: 'Rehabilitación Física',
    recommendedFor: [
      'Orientación médica en procesos de rehabilitación',
      'Valoración de la función y movilidad',
    ],
    sedes: ['Valledupar', 'Atánquez'],
    whatsappText: 'Hola ARSAS IPS, quiero pedir información sobre Fisiatría',
  },
  {
    id: 'neuropediatria',
    name: 'Neuropediatría',
    subtitle: 'Atención médica especializada para el neurodesarrollo infantil',
    description:
      'Valoración médica especializada del desarrollo neurológico en niñas y niños.',
    iconName: 'child_care',
    category: 'evaluacion',
    categoryLabel: 'Especialidades Pediátricas',
    recommendedFor: [
      'Valoración del desarrollo neurológico infantil',
      'Orientación médica especializada para niñas y niños',
    ],
    sedes: ['Valledupar', 'Atánquez'],
    whatsappText: 'Hola ARSAS IPS, quiero pedir información sobre Neuropediatría',
  },
  {
    id: 'neuropsicologia',
    name: 'Neuropsicología',
    subtitle: 'Evaluación y acompañamiento de la atención, la memoria y el aprendizaje',
    description:
      'Evaluación neurocognitiva profunda para mapear funciones ejecutivas, memoria, atención, velocidad de procesamiento y diseño de planes de estimulación cerebral.',
    iconName: 'neurology',
    category: 'evaluacion',
    categoryLabel: 'Neurociencias Clínicas',
    recommendedFor: [
      'Evaluación de coeficiente intelectual y perfil cognitivo',
      'Sospecha de TDAH, dislexia o dificultades de aprendizaje escolar',
      'Deterioro cognitivo o secuelas pos-trauma',
      'Informes neuropsicológicos para instituciones educativas y EPS',
    ],
    sedes: ['Valledupar', 'Atánquez'],
    whatsappText: 'Hola ARSAS IPS, quiero pedir una cita de Neuropsicología',
  },
  {
    id: 'educacion-especial',
    name: 'Educación especial',
    subtitle: 'Apoyo educativo adaptado a las necesidades de cada persona',
    description:
      'Pedagogía inclusiva, adecuaciones curriculares (PIAR) y estrategias didácticas individualizadas para garantizar el aprendizaje y la inclusión escolar.',
    iconName: 'school',
    category: 'educacion',
    categoryLabel: 'Inclusión Pedagógica',
    recommendedFor: [
      'Construcción y seguimiento de planes PIAR con colegios',
      'Refuerzo en lectura, escritura y cálculo matemático adaptado',
      'Estrategias pedagógicas para personas en condición de discapacidad',
      'Capacitación y orientación a docentes y cuidadores',
    ],
    sedes: ['Valledupar', 'Atánquez'],
    whatsappText: 'Hola ARSAS IPS, quiero consultar sobre Educación Especial',
  },
];

export const SPECIALISTS_DATA: Specialist[] = [
  {
    id: 'atanquez-terapia-ocupacional-lina-romero',
    name: 'Lina Cristina Romero Padilla',
    specialty: 'Terapia Ocupacional',
    sedes: ['Atánquez'],
    image: '/images/profesionales/lina-romero-padilla.jpeg',
    bio: 'Promueve la autonomía, independencia y bienestar mediante actividades significativas que fortalecen habilidades físicas, cognitivas, emocionales y sociales, y la participación en las actividades de la vida diaria.',
  },
  {
    id: 'atanquez-fonoaudiologia-dayana-perez',
    name: 'Dayana Paola Pérez Mieles',
    specialty: 'Fonoaudiología',
    sedes: ['Atánquez'],
    image: '/images/profesionales/dayana-perez-mieles.jpeg',
  },
  {
    id: 'atanquez-fonoaudiologia-mayra-silva',
    name: 'Mayra Silva Venecia',
    specialty: 'Fisioterapia',
    sedes: ['Atánquez'],
    image: '/images/profesionales/mayra-silva-venecia.jpeg',
    bio: 'Fisioterapeuta con más de 10 años de experiencia en consulta externa, en las áreas osteomuscular, neurológica y de neurodesarrollo, así como en la atención de pacientes en modalidad Hospital Día. Realiza valoración e intervención fisioterapéutica para niños, adolescentes, adultos y adultos mayores, orientada a la rehabilitación funcional y al mejoramiento de la calidad de vida.',
  },
  {
    id: 'atanquez-psicologia-valery-gutierrez',
    name: 'Valery Patricia Gutiérrez Torres',
    specialty: 'Psicología',
    sedes: ['Atánquez'],
    image: '/images/profesionales/valery-gutierrez-torres.jpeg',
    bio: 'Experiencia en atención e intervención individual, grupal y familiar a adolescentes, jóvenes y adultos. Trabaja en promoción y prevención de la salud mental, orientación psicológica y bienestar emocional.',
  },
  {
    id: 'valledupar-psicologia-adriana-contreras',
    name: 'Adriana Lucia Contreras Nieves',
    specialty: 'Psicología',
    sedes: ['Valledupar'],
    image: '/images/profesionales/adriana-contreras-nieves.jpeg',
  },
  {
    id: 'valledupar-fisioterapia-wendy-pumarejo',
    name: 'Wendy Loraine Pumarejo Molina',
    specialty: 'Fisioterapia',
    sedes: ['Valledupar'],
    image: '/images/profesionales/wendy-pumarejo-molina.jpeg',
  },
  {
    id: 'valledupar-terapia-ocupacional-liliana-echavez',
    name: 'Liliana Echavez',
    specialty: 'Terapia Ocupacional',
    sedes: ['Valledupar'],
    image: '/images/profesionales/liliana-echavez.jpeg',
  },
];

// Los testimonios solo se muestran cuando existen textos reales autorizados.
export const INITIAL_TESTIMONIALS: Testimonial[] = [];

export const FAQS_DATA: FaqItem[] = [
  {
    id: 'faq-1',
    question: '¿Atienden con EPS?',
    answer:
      'Los convenios y servicios pueden variar según la sede. Escríbenos por WhatsApp a la sede que deseas consultar para confirmar si atiende tu EPS y qué pasos debes seguir.',
    category: 'eps',
  },
  {
    id: 'faq-2',
    question: '¿Dónde están ubicados?',
    answer:
      'Contamos con dos sedes: Valledupar, en la Carrera 17 # 13B bis-14, barrio Alfonso López; y Atánquez, en la Carrera 4 # 6-52.',
    category: 'sedes',
  },
  {
    id: 'faq-3',
    question: '¿Cómo pido una cita?',
    answer:
      'Puedes agendarla directamente a través de nuestro botón de WhatsApp para la sede de tu elección, o utilizando el módulo de agendamiento en línea de esta página web. Solo necesitas tener a mano el documento del paciente y la orden médica o remisión de la EPS.',
    category: 'citas',
  },
  {
    id: 'faq-4',
    question: '¿Qué horario tienen?',
    answer:
      'Valledupar: lunes y martes de 7:00 a. m. a 12:30 p. m. y de 2:00 p. m. a 5:00 p. m.; miércoles a viernes de 7:00 a. m. a 12:00 m. y de 2:00 p. m. a 5:00 p. m. Atánquez: lunes a jueves de 7:30 a. m. a 12:00 m. y de 1:00 p. m. a 4:00 p. m.; viernes de 7:00 a. m. a 3:00 p. m.',
    category: 'sedes',
  },
  {
    id: 'faq-5',
    question: '¿Qué documentos debo llevar a la primera consulta?',
    answer:
      'Para la primera cita se requiere: 1) Copia del documento de identidad del paciente y del acudiente (si es menor), 2) Orden médica vigente de la EPS o remisión del especialista, 3) Autorización de servicios emitida por la EPS (si aplica), y 4) Historia clínica o exámenes previos si los tienes.',
    category: 'citas',
  },
  {
    id: 'faq-6',
    question: '¿Atienden pacientes particulares sin EPS?',
    answer:
      'La atención y la oferta pueden variar por sede. Escríbenos por WhatsApp para consultar si hay atención particular en la sede que necesitas.',
    category: 'servicios',
  },
];

// No precargar identificaciones ni historias de citas de demostración.
export const INITIAL_APPOINTMENTS: AppointmentRecord[] = [];
