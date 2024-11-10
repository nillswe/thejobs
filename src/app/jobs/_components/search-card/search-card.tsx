'use client'

import Form from 'next/form'
import { useSearchParams } from 'next/navigation'

import { DollarSign, Globe, Home, Layers, Search, Trophy } from 'lucide-react'

import { FilterRange } from '../filter-range'
import { FilterCheckbox } from '../filter-checkbox'

export const SearchCard = () => {
  const searchParams = useSearchParams()
  const query = searchParams.get('query')

  return (
    <div
      className={`
        bg-base-200 flex flex-col rounded-3xl p-4
        hover:shadow-md hover:cursor-pointer
      `}>
      <div className='flex flex-col rounded-2xl p-4 bg-blue-100/20 gap-3'>
        <Form action='/jobs' className='flex flex-1'>
          <label
            className={`
              input input-bordered items-center flex-1 flex rounded-full pr-2 gap-2 bg-base-200
            `}>
            <input
              name='query'
              type='search'
              className='grow'
              placeholder='Search by job title'
              defaultValue={query ?? ''}
            />
            <button type='submit' className={`btn btn-circle btn-sm btn-primary`}>
              <Search size={18} />
            </button>
          </label>
        </Form>
        <div className='flex flex-1 gap-2 flex-wrap'>
          <FilterCheckbox
            label='Job Type'
            name='type'
            Icon={Layers}
            options={[
              { label: 'Full-time', value: 'full-time' },
              { label: 'Part-time', value: 'part-time' },
              { label: 'Contract', value: 'contract' },
            ]}
          />
          <FilterCheckbox
            Icon={Trophy}
            name='seniority'
            label='Seniority'
            options={[
              { label: 'Entry-level', value: 'entry-level' },
              { label: 'Mid-level', value: 'mid-level' },
              { label: 'Senior', value: 'senior' },
              { label: 'Manager', value: 'manager' },
            ]}
          />

          <FilterCheckbox
            Icon={Globe}
            name='country'
            label='Country'
            options={[
              { label: 'United States', value: 'united-states' },
              { label: 'Brazil', value: 'brazil' },
              { label: 'Argentina', value: 'argentina' },
            ]}
          />
          <FilterCheckbox
            Icon={Home}
            label='Workplace'
            name='workplace'
            options={[
              { label: 'Remote', value: 'remote' },
              { label: 'Hybrid', value: 'hybrid' },
              { label: 'On-site', value: 'on-site' },
            ]}
          />

          <FilterRange Icon={DollarSign} label='Salary' name='salary' />
        </div>
      </div>
    </div>
  )
}
