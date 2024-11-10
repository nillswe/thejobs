import Image from 'next/image'

import { Clock, ExternalLink, House, Pin } from 'lucide-react'

import { Container } from '@/app/_components/shared'
import { getJobDetail } from '@/server/functions/jobs.function'
import { acceptedCountry, duration, workplace } from '@/constants/filters'

type Props = {
  params: {
    id: string
  }
}

export default async function Layout({ params }: Props) {
  const { id } = await params
  const job = await getJobDetail(Number(id))

  return (
    <div className='w-full flex flex-col'>
      <Container>
        <div className='bg-base-200 p-5 rounded-xl'>
          <div className='w-full rounded-xl h-14 bg-base-100 flex justify-start relative'>
            <Image
              src='/temp/company.png'
              width={50}
              height={50}
              alt='Company'
              className={`rounded-full object-cover  w-14 h-14 absolute -bottom-[28px] left-5`}
            />

            <button
              className={`btn btn-primary px-5 btn-sm rounded-full absolute -bottom-[16px] right-5`}>
              Apply
              <ExternalLink size={18} />
            </button>
          </div>

          <article className='mt-10'>
            <header className='flex justify-between'>
              <div className='flex flex-col items-start'>
                <h1 className='text-xl font-bold'>{job?.title}</h1>
                <h2 className='font-medium'>{job?.company}</h2>
              </div>
              <div className='flex flex-col items-end'>
                <div className='flex gap-2 text-lg font-medium items-center'>
                  <span>{job.salaryMin.toNumber() / 1000}K</span>
                  {job.salaryMax && (
                    <>
                      <span>-</span>
                      <span>{job.salaryMax?.toNumber() / 1000}K</span>
                    </>
                  )}
                  <span className='text-sm text-base-content/50'>/year</span>
                </div>
                <div className='flex  gap-3 font-medium'>
                  <div className='flex gap-1 items-center text-neutral/80'>
                    <House size={16} />
                    <span className='text-sm'>{workplace[job.workplace]}</span>
                  </div>

                  <div className='flex gap-1 items-center text-neutral/80'>
                    <Pin size={16} />
                    <span className='text-sm'>{acceptedCountry[job.acceptedCountry]}</span>
                  </div>

                  <div className='flex gap-1 items-center text-neutral/80'>
                    <Clock size={16} />
                    <span className='text-sm'>{duration[job.duration]}</span>
                  </div>
                </div>
              </div>
            </header>

            <article
              className='mt-10 prose w-full max-w-full'
              dangerouslySetInnerHTML={{ __html: job?.description }}></article>
          </article>
        </div>
      </Container>
    </div>
  )
}
