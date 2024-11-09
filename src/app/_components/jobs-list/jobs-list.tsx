import { JobCard } from '@/app/_components/shared'

type Props = {
  title?: string
}

export const JobsList = ({ title }: Props) => {
  return (
    <section className='flex flex-col'>
      <h1 className='text-2xl font-bold mb-5'>{title}</h1>

      <div className='flex flex-col w-full gap-5'>
        {Array.from({ length: 5 }).map((_item, index) => (
          <JobCard key={index} />
        ))}
      </div>
    </section>
  )
}
