export type ActiveView = 'inicio' | 'servicios' | 'sedes' | 'especialistas' | 'citas' | 'portal';
export type SedeName = 'Valledupar' | 'Atánquez';

export interface ServiceItem {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  iconName: string;
  category: 'motor' | 'lenguaje' | 'salud-mental' | 'educacion' | 'evaluacion';
  categoryLabel: string;
  recommendedFor: string[];
  sedes: SedeName[];
  whatsappText: string;
}

export interface Specialist {
  id: string;
  name: string;
  specialty: string;
  role?: string;
  rethus?: string;
  experienceYears?: number;
  sedes: SedeName[];
  image?: string;
  bio?: string;
  focusAreas?: string[];
  schedule?: string;
}

export interface SedeInfo {
  id: 'valledupar' | 'atanquez';
  name: string;
  badge: string;
  address: string;
  schedule: string;
  whatsappNumber: string;
  whatsappFormatted: string;
  phone: string;
  facilities: string[];
  mapEmbedUrl?: string;
  image: string;
  description: string;
}

export interface Testimonial {
  id: string;
  author: string;
  city: string;
  relation: string;
  rating: number;
  comment: string;
  service: string;
  sede: SedeName;
  date: string;
  isExample?: boolean;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'eps' | 'citas' | 'sedes' | 'servicios';
}

export interface AppointmentRecord {
  id: string;
  confirmationCode: string;
  patientName: string;
  documentType: string;
  documentNumber: string;
  phone: string;
  email?: string;
  isMinor: boolean;
  guardianName?: string;
  sede: SedeName;
  serviceId: string;
  serviceName: string;
  eps: string;
  orderNumber?: string;
  date: string;
  timeSlot: string;
  status: 'Confirmada' | 'En Validación EPS' | 'Completada' | 'Reprogramada';
  notes?: string;
  createdAt: string;
}
