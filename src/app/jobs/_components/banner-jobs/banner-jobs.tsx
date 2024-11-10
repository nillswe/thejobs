import { merge } from '@/utils'
type Props = {
  keyword: string
}

export const BannerJobs = ({ keyword }: Props) => {
  return (
    <section
      className={`
        h-[25rem] bg-base-300 flex w-full justify-center items-center
        bg-[url("/assets/header-texture.svg")] bg-center bg-cover
      `}>
      <div className='text-center flex flex-col items-center justify-center'>
        <header className='w-full'>
          <h1 className={merge(['text-[5rem] font-bold'])}>Remote {keyword} jobs</h1>
          <p className='mb-16'>
            Find your next career at one of the best remote companies in the world 🌎
          </p>
        </header>
      </div>
    </section>
  )
}
