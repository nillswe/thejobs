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
