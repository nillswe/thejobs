'use client'

import { ChangeEvent, ForwardRefExoticComponent } from 'react'

import { useSearchParams, useRouter, usePathname } from 'next/navigation'

import { ChevronDown, LucideProps } from 'lucide-react'

type Props = {
  label: string
  name: string
  Icon: ForwardRefExoticComponent<Omit<LucideProps, 'ref'>>
  options: Array<{
    label: string
    value: string
  }>
}

export const FilterCheckbox = ({ label, name, Icon, options }: Props) => {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const router = useRouter()

  const handleAddFilter = (event: ChangeEvent<HTMLInputElement>) => {
    const params = new URLSearchParams(searchParams)

    if (event.target.checked) {
      params.append(event.target.name, event.target.value)
    } else {
      params.delete(event.target.name, event.target.value)
    }

    router.replace(`${pathname}?${params.toString()}`)
  }

  return (
    <div className='dropdown'>
      <div
        tabIndex={0}
        role='button'
        className={`btn btn-sm m-1 rounded-full border border-base-content/20 text-base-content/70`}>
        <Icon size={18} />
        <span>{label}</span>
        <ChevronDown size={18} />
      </div>
      <ul
        tabIndex={0}
        className={`dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow`}>
        {options.map(option => (
          <li key={option.value}>
            <label className='cursor-pointer'>
              <input
                name={name}
                type='checkbox'
                value={option.value}
                className={`checkbox`}
                onChange={event => handleAddFilter(event)}
              />
              <span>{option.label}</span>
            </label>
          </li>
        ))}
      </ul>
    </div>
  )
}
