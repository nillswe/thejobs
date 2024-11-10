import Link from 'next/link'
import Image from 'next/image'

import { InstagramIcon, XIcon } from '@/app/_components/icons'

import { Container } from '../container'

export const Footer = () => {
  return (
    <footer
      className={`
        flex flex-col pt-10 px-5
        md:px-0
      `}>
      <Container>
        <div
          className={`
            flex w-full flex-col-reverse
            md:flex-row
            items-center justify-center gap-5
          `}>
          <div
            className={`
              flex flex-col gap-5 justify-center items-center
              md:items-start
            `}>
            <h1
              className={`
                text-4xl font-bold text-center
                md:text-left
              `}>
              Live anywhere, work everywhere.
            </h1>
            <Link href='/jobs' className='btn btn-primary rounded-full  btn-wide max-w-full'>
              Find your dream job
            </Link>
          </div>
          <div className='flex-1 opacity-70'>
            <Image
              width={620}
              height={435}
              alt='Illustration'
              src='/assets/illustration-footer.svg'
            />
          </div>
        </div>
      </Container>
      <Container>
        <div
          className={`
            footer p-10 grid-cols-2
            md:grid-cols-4
          `}>
          <aside>
            <Image alt='Logo' width={100} height={100} src='/logo/logo-small.svg' />
          </aside>
          <nav className=''>
            <h6 className='font-bold text-lg text-primary'>Services</h6>
            <a className='link link-hover'>Branding</a>
            <a className='link link-hover'>Design</a>
            <a className='link link-hover'>Marketing</a>
            <a className='link link-hover'>Advertisement</a>
          </nav>
          <nav className=''>
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
