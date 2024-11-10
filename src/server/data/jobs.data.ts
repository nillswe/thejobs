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
  const title = params.query
  const jobType = parseToArray(params.type)
  const seniority = parseToArray(params.seniority)
  const country = parseToArray(params.country)
  const workplace = parseToArray(params.workplace)
  const salary = params.salary ? Number(params.salary) * 1000 : null

  const titleQuery = title
    ? Prisma.sql` WHERE LOWER(title) LIKE LOWER('%'|| ${title} || '%') `
    : Prisma.sql` WHERE title IS NOT NULL`

  const jobTypeQuery = jobType
    ? Prisma.sql` AND "duration" IN (${Prisma.join(jobType)})`
    : Prisma.empty

  const seniorityQuery = seniority
    ? Prisma.sql` AND "seniority" IN (${Prisma.join(seniority)})`
    : Prisma.empty

  const countryQuery = country
    ? Prisma.sql` AND "acceptedCountry" IN (${Prisma.join(country)})`
    : Prisma.empty

  const workplaceQuery = workplace
    ? Prisma.sql` AND "workplace" IN (${Prisma.join(workplace)})`
    : Prisma.empty

  const salaryQuery = salary
    ? Prisma.sql` AND "salaryMin" >= ${salary} OR "salaryMax" >= ${salary} `
    : Prisma.empty

  const jobs = await prisma.$queryRaw<JobModel[]>`
    SELECT id, title, company, description, duration, seniority, workplace, "salaryMin", "salaryMax", "acceptedCountry", "createdAt"
    FROM jobs
    ${titleQuery}
    ${jobTypeQuery}
    ${seniorityQuery}
    ${countryQuery}
    ${workplaceQuery}
    ${salaryQuery}
  `

  return jobs
}

export const getJobById = async (id: number) => {
  const job = await prisma.jobs.findUnique({
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
    where: {
      id: id,
    },
  })

  return job as JobModel
}
