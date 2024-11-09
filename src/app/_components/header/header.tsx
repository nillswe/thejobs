'use client'

import Link from 'next/link'
import Image from 'next/image'

import { APP_URL } from '@/config/env-client'

export const Header = () => {
  return (
    <header className='w-full flex items-center  justify-center bg-base-300 py-1'>
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

        <ul className='navbar-center  gap-5 '>
          <Link href='/about' title='About page'>
            About
          </Link>

          <Link href='/jobs' title='Jobs page'>
            Jobs
          </Link>

          <Link href='/community' title='Community page'>
            Community
          </Link>

          <Link title='Talents page' href='/find-talents'>
            Find Talents
          </Link>
        </ul>

        <ul className='navbar-end gap-3'>
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
