'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

import { merge } from '@/utils'
import { APP_URL } from '@/config/env-client'

export const Header = () => {
  const path = usePathname()

  return (
    <header className='w-full flex items-center  justify-center py-1'>
      <div className='navbar max-w-screen-xl'>
        <div className='navbar-start'>
          <Link href={APP_URL}>
            <Image
              width={50}
              height={50}
              alt='thejobs logo'
              className='h-full'
              src='/logo/logo-small.svg'
            />
          </Link>
        </div>

        <ul
          className={`
            navbar-center gap-5 hidden
            md:flex
          `}>
          <Link
            href='/'
            title='home'
            className={merge([path === '/' && 'font-bold border-b-2 border-base-content'])}>
            Home
          </Link>

          <Link
            href='/jobs'
            title='Jobs page'
            className={merge([path === '/jobs' && 'font-bold border-b-2 border-base-content'])}>
            Jobs
          </Link>

          <Link href='/community' title='Community page'>
            Community
          </Link>

          <Link title='Talents page' href='/find-talents'>
            Find Talents
          </Link>
        </ul>

        <ul
          className={`
            navbar-end gap-3 hidden
            md:flex
          `}>
          <Link href='/auth' className='btn btn-sm btn-outline border-2 px-8'>
            Sign in
          </Link>

          <Link href='/auth' className='btn btn-sm btn-primary px-8'>
            Post a job
          </Link>
        </ul>
      </div>
    </header>
  )
}
