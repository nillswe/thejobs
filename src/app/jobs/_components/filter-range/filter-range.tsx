'use client'

import { ChangeEvent, ForwardRefExoticComponent } from 'react'

import { useSearchParams, useRouter, usePathname } from 'next/navigation'

import { ChevronDown, LucideProps } from 'lucide-react'

type Props = {
  label: string
  name: string
  Icon: ForwardRefExoticComponent<Omit<LucideProps, 'ref'>>
}

export const FilterRange = ({ label, name, Icon }: Props) => {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const router = useRouter()

  const activeFilters = searchParams.getAll(name)

  const handleAddFilter = (event: ChangeEvent<HTMLInputElement>) => {
    const params = new URLSearchParams(searchParams)

    params.set(event.target.name, event.target.value)

    router.replace(`${pathname}?${params.toString()}`, { scroll: false })
  }

  console.log({ activeFilters })

  return (
    <div className='dropdown'>
      <div
        tabIndex={0}
        role='button'
        className={`
          btn btn-sm m-1 rounded-full border border-base-content/20 text-base-content/70 flex-nowrap
        `}>
        <Icon size={18} />
        <span>{label}</span>
        {activeFilters.length > 0 && (
          <span className='badge badge-primary'>({activeFilters}k)</span>
        )}
        <ChevronDown size={18} />
      </div>
      <div
        tabIndex={0}
        className={`dropdown-content menu bg-base-100 rounded-box z-[1] w-64 p-2 shadow`}>
        <span className='font-bold'>Minimum payment per year</span>
        <div className='mt-5'>
          <input
            type='range'
            name={name}
            min={40}
            max={120}
            defaultValue={40}
            className='range range-sm'
            step='20'
            onChange={handleAddFilter}
          />
          <div className='flex w-full justify-between px-2 text-xs'>
            <span>40k</span>
            <span>60k</span>
            <span>80k</span>
            <span>100k</span>
            <span>120k</span>
          </div>
        </div>
      </div>
    </div>
  )
}
