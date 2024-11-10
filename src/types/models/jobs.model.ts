import { UserModel } from '@/types/models/user.model'

export interface JobsModel {
  id: number
  title: string | null
  company: string | null
  description: string | null
  duration: string | null
  seniority: string | null
  workplace: string | null
  salaryMin: number | null
  salaryMax: number | null
  acceptedCountry: string | null
  createdAt: string
  owner: UserModel
}
