import { Container, JobsList } from '@/app/_components'
import { BannerJobs, SearchCard } from '@/app/jobs/_components'

export default function Layout() {
  return (
    <div className='w-full flex flex-col'>
      <BannerJobs />

      <Container>
        <div className='w-full -mt-[76px] mb-10'>
          <SearchCard />
        </div>
        <div className='flex justify-end'>
          <select className='select select-bordered max-w-xs bg-base-200 rounded-full'>
            <option disabled selected>
              Sort by
            </option>
            <option>Most recent</option>
            <option>Pay (high to low)</option>
            <option>Pay (low to high)</option>
          </select>
        </div>

        <div>
          <JobsList title='Search result' />
        </div>
      </Container>
    </div>
  )
}
