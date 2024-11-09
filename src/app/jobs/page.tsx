import { Container } from '@/app/_components'
import { BannerJobs } from '@/app/jobs/_components'

export default function Layout() {
  return (
    <div className='w-full flex flex-col'>
      <BannerJobs />

      <Container>
        <div>menu</div>
        Page content
      </Container>
    </div>
  )
}
