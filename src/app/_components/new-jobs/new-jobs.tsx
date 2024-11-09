import { Container } from '@/app/_components'
import { JobCard } from '@/app/_components/shared'

export const NewJobs = () => {
  return (
    <Container>
      <section className='flex flex-col'>
        <h1 className='text-2xl font-bold mb-5'>New Jobs</h1>

        <div className='flex flex-col w-full gap-5'>
          {Array.from({ length: 5 }).map((_item, index) => (
            <JobCard key={index} />
          ))}
        </div>
      </section>
    </Container>
  )
}
