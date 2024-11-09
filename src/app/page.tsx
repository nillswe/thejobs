import { Footer, Header, Hero, ThemeToggle, Trusted } from '@/app/_components'

export default async function Home() {
  return (
    <main className='flex min-h-screen w-full flex-col relative'>
      <button className='btn btn-circle btn-primary fixed bottom-5 right-5 shadow'>
        <ThemeToggle />
      </button>

      <div className='flex h-screen w-full flex-col items-center'>
        <Header />
        <Hero />
        <Trusted />
      </div>
      <Footer />
    </main>
  )
}
