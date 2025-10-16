export interface System {
  id: string
  name: string
  subtitle: string
  summary: string
  description: string
  problem?: string
  maintenanceLifespan: string
  plants: string[]
  certifications: string[] | string
  roi: string
  guarantee?: string
  benefits: string[]
  testimonial?: string
}

export interface TeamMember {
  id: number
  name: string
  role: string
  bio: string
  image?: string
  linkedin?: string
  placeholder?: boolean
}

export interface FAQ {
  question: string
  answer: string
}

export interface Benefit {
  icon: string
  title: string
  description: string
  stat?: string
  proof?: string
}

export interface ContactFormData {
  name: string
  company?: string
  email: string
  phone?: string
  systemType?: string
  message: string
  consent: boolean
}