import Link from 'next/link'
import Image from 'next/image'

import { Clock, House, Pin } from 'lucide-react'

import { merge } from '@/utils'
import { JobModel } from '@/types/models'
import { timeElapsed } from '@/utils/date'
import { acceptedCountry, duration, workplace } from '@/constants/filters'

type Props = {
  job: JobModel
}

export const JobCard = ({ job }: Props) => {
  return (
    <Link
      href={`/jobs/${job.id}`}
      className={`
        bg-base-200 flex flex-col rounded-3xl p-4
        hover:shadow-md hover:cursor-pointer
      `}>
      <div className='flex items-center justify-start mb-2 ml-2 gap-3'>
        <span className='text-sm text-neutral/80'>{timeElapsed(job.createdAt)}</span>
        <span
          className={merge([
            'text-xs badge',
            job.workplace === 'remote' && 'bg-green-200 text-green-900',
            job.workplace === 'hybrid' && 'bg-blue-200 text-blue-900',
            job.workplace === 'on-site' && 'bg-red-200 text-red-900',
          ])}>
          {workplace[job.workplace]} - {acceptedCountry[job.acceptedCountry]}
        </span>
      </div>

      <div
        className={merge([
          'flex rounded-2xl items-center p-4 bg-blue-100/50 gap-3',
          job.workplace === 'remote' && 'bg-green-100/50 ',
          job.workplace === 'hybrid' && 'bg-blue-100/50 ',
          job.workplace === 'on-site' && 'bg-red-100/50 ',
        ])}>
        <Image
          width={50}
          height={50}
          alt='Company'
          src='/temp/company.png'
          className={`rounded-full border-2 border-base-200 object-cover h-fit aspect-square`}
        />
        <div className='flex flex-1 flex-col justify-center'>
          <h1 className='font-medium'>{job.title}</h1>
          <h2 className='font-medium'>{job.company}</h2>
        </div>

        <div className='flex flex-col gap-3 justify-center items-end'>
          <span className='text-xl font-bold flex gap-1'>
            <span>{job.salaryMin?.toNumber() / 1000}K</span>
            {job.salaryMax && (
              <>
                <span>-</span>
                <span>{job.salaryMax?.toNumber() / 1000}K</span>
              </>
            )}
          </span>
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
      </div>
    </Link>
  )
}
