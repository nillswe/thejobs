import Link from 'next/link'
import Image from 'next/image'

export const EmptyResult = () => {
  return (
    <div
      className={`
        flex gap-2 items-center justify-center
        md:justify-start
      `}>
      <Image
        src='/assets/jobs/not-found.png'
        alt='Not found image'
        width={500}
        height={500}
        className={`
          hidden
          md:block
        `}
      />
      <div
        className={`
          flex flex-col items-center
          md:items-start
          gap-3
        `}>
        <h1 className='text-2xl font-bold'>No jobs match that search</h1>
        <Link href='/jobs' title='Clear filters' className='btn btn-primary  rounded-full'>
          Clear search and filters
        </Link>
      </div>
    </div>
  )
}
