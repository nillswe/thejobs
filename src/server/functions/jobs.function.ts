'use server'

import { getRecentJobs } from '@/server/data/jobs.data'

export const getLastJobs = async () => {
  return await getRecentJobs()
}
