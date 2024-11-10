'use server'

import { Prisma } from '@prisma/client'

import { JobModel } from '@/types/models'
import { prisma } from '@/libs/prisma/config'

export const getRecentJobs = async () => {
  const jobs = await prisma.jobs.findMany({
    select: {
      id: true,
      acceptedCountry: true,
      company: true,
      createdAt: true,
      description: true,
      duration: true,
      salaryMax: true,
      salaryMin: true,
      seniority: true,
      title: true,
      userId: true,
      workplace: true,
    },
    orderBy: {
      createdAt: 'desc',
    },
    take: 5,
  })

  return jobs as JobModel[]
}

type JobsResultParams = Record<string, string | string[]>

export const getJobsBySearchParams = async (params: JobsResultParams) => {
  const query = params.query
  const jobType = params.type as string[]

  const types = jobType.map(type => Prisma.sql`${type}::text`)

  const jobs = await prisma.$queryRaw<JobModel[]>(Prisma.sql`
    SELECT id, title, company, description, duration, seniority, workplace, "salaryMin", "salaryMax", "acceptedCountry", "createdAt"
    FROM jobs
    WHERE LOWER(title) LIKE LOWER('%'|| ${query} || '%') 
    AND "duration" IN (${Prisma.join(types)})
  `)

  return jobs
}
