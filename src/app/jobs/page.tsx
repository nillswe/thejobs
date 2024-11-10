import { JobsList } from '@/app/_components'
import { Container } from '@/app/_components/shared'
import { BannerJobs, SearchCard } from '@/app/jobs/_components'
import { getJobsResult } from '@/server/functions/jobs.function'

type Props = {
  searchParams: Promise<{ [key: string]: string | string[] }>
}

export default async function Layout({ searchParams }: Props) {
  const searchQuery = await searchParams

  const jobsResult = await getJobsResult(searchQuery)

  return (
    <div className='w-full flex flex-col'>
      <BannerJobs />

      <Container>
        <div className='w-full -mt-[76px] mb-10'>
          <SearchCard />
        </div>
        <div className='flex justify-end'>
          <select
            className='select select-bordered max-w-xs bg-base-200 rounded-full'
            defaultValue={0}>
            <option disabled value={0}>
              Sort by
            </option>
            <option>Most recent</option>
            <option>Pay (high to low)</option>
            <option>Pay (low to high)</option>
          </select>
        </div>

        <div>
          <JobsList title='Search result' jobs={jobsResult} />
        </div>
      </Container>
    </div>
  )
}
