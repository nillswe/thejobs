import Image from 'next/image'

import { Container } from '@/app/_components/shared'

export const Trusted = () => {
  return (
    <Container>
      <section className='flex flex-col items-center py-14'>
        <h1 className='text-xl text-base-content/50'>
          Trusted by the world's leading tech companies
        </h1>
        <div
          className={`flex gap-10 items-center justify-center mt-10 w-full grayscale-[1] opacity-50`}>
          <Image width={150} height={50} alt='Google' src='/assets/trusted/google.png' />
          <Image width={150} height={50} alt='microsoft' src='/assets/trusted/microsoft.png' />
          <Image width={150} height={50} alt='github' src='/assets/trusted/github.png' />
          <Image width={150} height={50} alt='spotify' src='/assets/trusted/spotify.png' />
        </div>
      </section>
    </Container>
  )
}
