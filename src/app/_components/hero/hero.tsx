import Form from 'next/form'

import { Search } from 'lucide-react'
import { DM_Sans } from 'next/font/google'

import { merge } from '@/utils'

const dmSans = DM_Sans({ subsets: ['latin'], weight: ['700'] })

export const Hero = () => {
  return (
    <section
      className={`
        h-[31rem] bg-base-300 flex w-full justify-center items-center
        bg-[url("/assets/header-texture.svg")] bg-center bg-cover px-5
        md:px-0
      `}>
      <div className='text-center flex flex-col items-center justify-center'>
        <header className='max-w-lg '>
          <h1
            className={merge([
              dmSans.className,
              'text-[7.6rem] font-bold ',
              'md:text-[7.6rem] md:tracking-[-0.9rem]',
              'text-[5.6rem] tracking-[-0.7rem]',
            ])}>
            thejobs
          </h1>
          <p className='mb-16'>
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi
            exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
          </p>
        </header>

        <Form
          action='/jobs'
          className={`
            join w-full
            md:w-[40rem]
          `}>
          <input
            name='query'
            placeholder='React developer'
            className={`
              input
              md:input-lg
              input-bordered join-item rounded-2xl flex-1
            `}
          />
          <button
            type='submit'
            className={`
              btn
              md:btn-lg
              join-item btn-primary rounded-2xl
            `}>
            <span
              className={`
                hidden
                md:block
              `}>
              Find your dream job
            </span>
            <span className='md:hidden'>
              <Search size={20} />
            </span>
          </button>
        </Form>
      </div>
    </section>
  )
}
