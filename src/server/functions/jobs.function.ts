'use server'

import { redirect } from 'next/navigation'

import { getJobById, getJobsBySearchParams, getRecentJobs } from '@/server/data/jobs.data'

type JobsResultParams = Record<string, string | string[]> | undefined

export const getLastJobs = async () => {
  return await getRecentJobs()
}

export const getJobsResult = async (params: JobsResultParams) => {
  return await getJobsBySearchParams(params)
}

export const getJobDetail = async (jobId: number) => {
  const job = await getJobById(jobId)

  if (!job) return redirect('/not-found')

  return job
}
