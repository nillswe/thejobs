import Link from 'next/link'
import Image from 'next/image'

import { Container, InstagramIcon, XIcon } from '@/app/_components'

export const Footer = () => {
  return (
    <footer className='flex flex-col '>
      <Container>
        <div className='flex w-full items-center justify-center '>
          <div className='flex-1'>
            <Image
              width={620}
              height={435}
              alt='Illustration'
              src='/assets/illustration-footer.svg'
            />
          </div>
          <div className='flex flex-col gap-5 justify-center items-start'>
            <h1 className='text-4xl font-bold'>Live anywhere, work everywhere.</h1>
            <Link href='/jobs' className='btn btn-primary btn-lg btn-wide max-w-full'>
              Find your dream job
            </Link>
          </div>
        </div>
      </Container>
      <Container>
        <div className='footer p-10'>
          <aside>
            <Image alt='Logo' width={100} height={100} src='/logo/logo-small.svg' />
          </aside>
          <nav>
            <h6 className='font-bold text-lg text-primary'>Services</h6>
            <a className='link link-hover'>Branding</a>
            <a className='link link-hover'>Design</a>
            <a className='link link-hover'>Marketing</a>
            <a className='link link-hover'>Advertisement</a>
          </nav>
          <nav>
            <h6 className='font-bold text-lg text-primary'>Company</h6>
            <a className='link link-hover'>About us</a>
            <a className='link link-hover'>Contact</a>
            <a className='link link-hover'>Jobs</a>
            <a className='link link-hover'>Press kit</a>
          </nav>
          <nav>
            <h6 className='font-bold text-lg text-primary'>Legal</h6>
            <a className='link link-hover'>Terms of use</a>
            <a className='link link-hover'>Privacy policy</a>
            <a className='link link-hover'>Cookie policy</a>
          </nav>
        </div>
        <div className='divider' />
        <div className='flex items-center justify-start gap-3 pb-5'>
          <Link href='#' className=' btn btn-square btn-sm btn-ghost'>
            <XIcon />
          </Link>
          <Link href='#' className=' btn btn-square btn-sm btn-ghost'>
            <InstagramIcon />
          </Link>
        </div>
      </Container>
    </footer>
  )
}