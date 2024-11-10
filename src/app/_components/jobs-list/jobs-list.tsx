import { jobs } from '@prisma/client'

import { JobCard } from '@/app/_components/shared'

type Props = {
  title?: string
  jobs: jobs[]
}

export const JobsList = ({ title, jobs }: Props) => {
  return (
    <section className='flex flex-col'>
      <h1 className='text-2xl font-bold mb-5'>{title}</h1>

      <div className='flex flex-col w-full gap-5'>
        {jobs.map(job => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    </section>
  )
}
