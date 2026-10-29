import { ServiceItem, Specialist, SedeInfo, Testimonial, FaqItem, AppointmentRecord } from '../types';

export const CLINIC_LOGO_URL =
  'https://lh3.googleusercontent.com/aida/AEtjO1U4ES9cKF5FltLJcdExb-E1aSRjywK3gzz1oh_zOAqKWLdFQ_5chGi8S4oCiLi3RGvLLvf-GgnazeBZ0tOodioxH9puvZMhKdCL_a63BApQ8Yz7WppDaO6uytlOc9UfO5Y3beg5iNLzM_BYLakiRfQll3lVZqkwS2wG5_7V8qJKJvuBD8ZxrUxCQIF2EMSVD4hgbrdzBz0rP2Rb7JI_E83Pd1nBp1zCYYIUA_AwIg0';

export const CLINIC_FACADE_URL =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuBPROvDPuZ-H5JR5wxFdWhaGkEKzNpTdwUEs8z2l-ioAvhgEM1ngyPBsZU8veLqMJIks8HwUQWg5HCBhthl0gNDqYCJYMhTeFQWoIGLcbolTINKoBLu0858EzZnp8eprfszr-201yD-elkLxQnZm-RpQrPSj13_g_6lPwiTOxQw22vYjXGiyRpAwy_MfwAEBf5qx0awXsRdM211c-N_U6aPVrW9ZiALHJBin6AVdeQ';

export const SEDES_DATA: Record<'valledupar' | 'atanquez', SedeInfo> = {
  valledupar: {
    id: 'valledupar',
    name: 'Sede Valledupar',
    badge: 'Sede Principal',
    address: 'Carrera 15 # 13C - 42, Barrio Obrero, Valledupar, Cesar',
    receptionSchedule: '7:00 a. m. – 12:00 m.',
    afternoonSchedule: 'Atención solo por WhatsApp de 2:00 p. m. a 4:00 p. m.',
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
    image: CLINIC_FACADE_URL,
    description:
      'Instalaciones modernas equipadas para rehabilitación neuromuscular, fonoaudiológica y neurocognitiva en el corazón de Valledupar.',
  },
  atanquez: {
    id: 'atanquez',
    name: 'Sede Atánquez',
    badge: 'Comunidad y Territorio',
    address: 'Calle 4 # 6-18, Corregimiento de Atánquez, Valledupar, Cesar',
    receptionSchedule: '7:30 a. m. a 3:00 p. m. (Jornada Continua)',
    afternoonSchedule: 'Orientación para citas, seguimiento y terapia especial por WhatsApp',
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
    image: CLINIC_FACADE_URL,
    description:
      'Compromiso de cercanía e inclusión territorial en las estribaciones de la Sierra Nevada para familias de Atánquez y pueblos cercanos.',
  },
};

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
    sedes: ['Valledupar'],
    whatsappText: 'Hola ARSAS IPS, quiero pedir una cita de Psiquiatría',
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
    id: 'esp-1',
    name: 'Dra. Laura Patricia Mestre',
    specialty: 'Fonoaudiología Clínica & Neurodesarrollo',
    role: 'Coordinadora de Área de Fonoaudiología',
    rethus: 'COL-RTH-184920',
    experienceYears: 11,
    sedes: ['Valledupar', 'Atánquez'],
    image: 'https://images.unsplash.com/photo-1594824813590-4a92c4315264?auto=format&fit=crop&w=600&q=80',
    bio: 'Especialista en fonoaudiología infantil con énfasis en trastornos del espectro autista y terapia miofuncional. Más de 10 años acompañando a familias del Cesar.',
    focusAreas: ['Habla y Lenguaje', 'Disfagia Pediátrica', 'Voz', 'Estimulación Orofofacial'],
    schedule: 'Lunes a Jueves: 7:00 am - 12:00 m / 2:00 pm - 6:00 pm',
  },
  {
    id: 'esp-2',
    name: 'Dr. Carlos Andrés Hinojosa',
    specialty: 'Fisioterapia & Rehabilitación Motora',
    role: 'Fisioterapeuta Principal',
    rethus: 'COL-RTH-293811',
    experienceYears: 13,
    sedes: ['Valledupar'],
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=600&q=80',
    bio: 'Experto en biomecánica clínica, rehabilitación posquirúrgica y terapia motora para niños con parálisis cerebral y adultos con patologías osteomusculares.',
    focusAreas: ['Rehabilitación Neuromotora', 'Reeducación de la Marcha', 'Terapia Manual', 'Mecanoterapia'],
    schedule: 'Lunes a Viernes: 7:00 am - 1:00 pm',
  },
  {
    id: 'esp-3',
    name: 'Lic. Andrea Carolina Zuleta',
    specialty: 'Terapia Ocupacional & Integración Sensorial',
    role: 'Terapeuta Ocupacional Senior',
    rethus: 'COL-RTH-304918',
    experienceYears: 9,
    sedes: ['Valledupar', 'Atánquez'],
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=600&q=80',
    bio: 'Certificada en integración sensorial por la USC. Enfocada en potenciar la independencia en niños con hiperactividad, retos motores y desafíos del día a día.',
    focusAreas: ['Procesamiento Sensorial', 'Motricidad Fina', 'Autonomía en el Hogar', 'Juego Guiado'],
    schedule: 'Martes a Sábado: 8:00 am - 12:00 m / 2:00 pm - 5:00 pm',
  },
  {
    id: 'esp-4',
    name: 'Dra. Carmen Elena Daza',
    specialty: 'Neuropsicología Clínica',
    role: 'Especialista en Evaluación Cognitiva',
    rethus: 'COL-RTH-449102',
    experienceYears: 12,
    sedes: ['Valledupar'],
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80',
    bio: 'Magíster en Neuropsicología Clínica de la Universidad Javeriana. Evaluadora experta de procesos de memoria, atención y perfiles de aprendizaje.',
    focusAreas: ['Baterías Neuropsicológicas', 'Diagnóstico TDAH', 'Rehabilitación Cognitiva', 'Informes Escolares'],
    schedule: 'Lunes, Miércoles y Viernes: 7:00 am - 1:00 pm',
  },
  {
    id: 'esp-5',
    name: 'Lic. Mariana Ramos Oñate',
    specialty: 'Educación Especial & Pedagogía Inclusiva',
    role: 'Coordinadora de Programas Inclusivos',
    rethus: 'COL-RTH-520194',
    experienceYears: 10,
    sedes: ['Valledupar', 'Atánquez'],
    image: 'https://images.unsplash.com/photo-1580894732444-8ecded7900cd?auto=format&fit=crop&w=600&q=80',
    bio: 'Licenciada en Educación Especial con amplia experiencia comunitaria en Atánquez y colegios oficiales de Valledupar articulando planes PIAR.',
    focusAreas: ['Diseño PIAR', 'Adaptaciones Curriculares', 'Lectoescritura Inicial Adaptada', 'Formación a Docentes'],
    schedule: 'Lunes a Viernes: 7:30 am - 12:30 pm',
  },
  {
    id: 'esp-6',
    name: 'Dr. Jorge Isaac Baute',
    specialty: 'Psiquiatría General & de Enlace',
    role: 'Médico Psiquiatra Consultor',
    rethus: 'COL-RTH-611093',
    experienceYears: 15,
    sedes: ['Valledupar'],
    image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=600&q=80',
    bio: 'Médico psiquiatra con trayectoria intrahospitalaria y ambulatoria. Aborda la salud mental desde una perspectiva integral, respetuosa y preventiva.',
    focusAreas: ['Salud Mental del Adulto y Joven', 'Trastornos Afectivos', 'Psicofarmacología Racional'],
    schedule: 'Martes y Jueves: 2:00 pm - 6:00 pm',
  },
];

// Los testimonios solo se muestran cuando existen textos reales autorizados.
export const INITIAL_TESTIMONIALS: Testimonial[] = [];

export const FAQS_DATA: FaqItem[] = [
  {
    id: 'faq-1',
    question: '¿Atienden con EPS?',
    answer:
      'Sí, tenemos contrato y convenios vigentes con diversas EPS autorizadas para servicios de salud y rehabilitación integral. Te recomendamos escribirnos a nuestro WhatsApp indicando tu EPS y el tipo de orden médica para confirmarte de inmediato los pasos de radicación y autorización.',
    category: 'eps',
  },
  {
    id: 'faq-2',
    question: '¿Dónde están ubicados?',
    answer:
      'Contamos con 2 sedes en el Cesar: Sede Principal Valledupar (Carrera 15 # 13C - 42, Barrio Obrero) y Sede Territorial Atánquez (Calle 4 # 6-18, en el corregimiento de Atánquez). Ambas cuentan con instalaciones totalmente accesibles.',
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
      'En la Sede Valledupar recibimos documentos y órdenes en la mañana de 7:00 a.m. a 12:00 m., y en la tarde atendemos consultas y agendamiento por WhatsApp de 2:00 p.m. a 4:00 p.m. En la Sede Atánquez atendemos jornada continua de 7:30 a.m. a 3:00 p.m.',
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
      'Sí, disponemos de tarifas particulares preferenciales y paquetes terapéuticos integrales para consultas individuales, valoraciones neuropsicológicas completas y planes continuos de terapia física u ocupacional.',
    category: 'servicios',
  },
];

// No precargar identificaciones ni historias de citas de demostración.
export const INITIAL_APPOINTMENTS: AppointmentRecord[] = [];
