'use server'

import { Prisma } from '@prisma/client'

import { JobModel } from '@/types/models'
import { parseToArray } from '@/utils/array'
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
  const jobType = parseToArray(params.type)
  const seniority = parseToArray(params.seniority)
  const country = parseToArray(params.country)

  const jobTypeQuery = jobType
    ? Prisma.sql` AND "duration" IN (${Prisma.join(jobType)})`
    : Prisma.empty

  const seniorityQuery = seniority
    ? Prisma.sql` AND "seniority" IN (${Prisma.join(seniority)})`
    : Prisma.empty

  const countryQuery = country
    ? Prisma.sql` AND "acceptedCountry" IN (${Prisma.join(country)})`
    : Prisma.empty

  const jobs = await prisma.$queryRaw<JobModel[]>`
    SELECT id, title, company, description, duration, seniority, workplace, "salaryMin", "salaryMax", "acceptedCountry", "createdAt"
    FROM jobs
    WHERE LOWER(title) LIKE LOWER('%'|| ${query} || '%') 
    ${jobTypeQuery}
    ${seniorityQuery}
    ${countryQuery}
  `

  return jobs
}
