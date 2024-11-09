import { Footer, Header } from '@/app/_components/shared'
import { Hero, NewJobs, ThemeToggle, Trusted } from '@/app/_components'

export default async function Home() {
  return (
    <main className='flex min-h-screen w-full flex-col relative'>
      <button className='btn btn-circle btn-primary fixed bottom-5 right-5 shadow'>
        <ThemeToggle />
      </button>

      <div className='flex mb-10 w-full flex-col items-center'>
        <Header />
        <Hero />
        <Trusted />
        <NewJobs />
      </div>
      <Footer />
    </main>
  )
}
