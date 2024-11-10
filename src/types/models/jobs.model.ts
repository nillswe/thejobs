import { Decimal } from '@prisma/client/runtime/library'

export interface JobModel {
  id: bigint
  title: string
  company: string
  description: string
  duration: 'full-time' | 'part-time' | 'contract'
  seniority: string
  workplace: 'hybrid' | 'on-site' | 'remote'
  salaryMin: Decimal
  salaryMax: Decimal | null
  acceptedCountry: 'united-states' | 'brazil' | 'argentina'
  createdAt: Date
}
