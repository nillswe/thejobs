import { JobModel } from '@/types/models'
import { JobCard } from '@/app/_components/shared'

type Props = {
  title?: string
  jobs: JobModel[]
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
