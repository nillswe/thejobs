import { merge } from '@/utils'

const NotFoundPage = async () => {
  return (
    <main className={merge(['flex h-[100vh] w-full flex-wrap items-center justify-center'])}>
      <div
        className={`
          mx-auto max-w-screen-xl px-4 py-8
          lg:px-6 lg:py-16
        `}>
        <div className='mx-auto max-w-screen-sm text-center'>
          <h1 className={`text-[10rem] font-extrabold`}>404</h1>
          <p
            className={`
              mb-4 text-3xl font-bold tracking-tight text-primary
              md:text-5xl
            `}>
            Page not found
          </p>

          <a href='/' className='btn btn-primary'>
            Go back to home page
          </a>
        </div>
      </div>
    </main>
  )
}

export default NotFoundPage
