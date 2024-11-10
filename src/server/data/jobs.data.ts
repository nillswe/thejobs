'use server'

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
    where: {
      title: {
        contains: params.query as string,
      },
    },
    take: 5,
  })

  return jobs as JobModel[]
}
