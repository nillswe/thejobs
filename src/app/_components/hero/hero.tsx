import Form from 'next/form'

import { DM_Sans } from 'next/font/google'

import { merge } from '@/utils'

const dmSans = DM_Sans({ subsets: ['latin'], weight: ['700'] })

export const Hero = () => {
  return (
    <section
      className={`
        h-[31rem] bg-base-300 flex w-full justify-center items-center
        bg-[url("/assets/header-texture.svg")] bg-center bg-cover
      `}>
      <div className='text-center flex flex-col items-center justify-center'>
        <header className='max-w-lg'>
          <h1 className={merge(['text-[7.6rem] font-bold tracking-[-0.9rem]', dmSans.className])}>
            thejobs
          </h1>
          <p className='mb-16'>
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi
            exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
          </p>
        </header>

        <Form action='/jobs' className='join max-w-full w-[40rem]'>
          <input
            name='query'
            placeholder='React developer'
            className='input input-lg input-bordered join-item  rounded-2xl flex-1'
          />
          <button type='submit' className='btn btn-lg join-item btn-primary rounded-2xl'>
            Find your dream job
          </button>
        </Form>
      </div>
    </section>
  )
}
