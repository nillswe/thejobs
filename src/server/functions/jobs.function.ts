'use server'

import { getJobsBySearchParams, getRecentJobs } from '@/server/data/jobs.data'

type JobsResultParams = Record<string, string | string[]> | undefined

export const getLastJobs = async () => {
  return await getRecentJobs()
}

export const getJobsResult = async (params: JobsResultParams) => {
  if (!params || Object.keys(params).length === 0) return await getRecentJobs()

  return await getJobsBySearchParams(params)
}
