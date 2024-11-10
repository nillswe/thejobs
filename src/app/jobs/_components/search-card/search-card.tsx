'use client'

import Form from 'next/form'

import { DollarSign, Globe, Home, Layers, Search, Trophy } from 'lucide-react'

import { FilterCheckbox } from '../filter-checkbox'

export const SearchCard = () => {
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
            <input name='query' type='search' className='grow' placeholder='Search by job title' />
            <div
              className={`
                bg-primary rounded-full flex justify-center items-center p-2 text-base-200
              `}>
              <Search size={18} />
            </div>
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

          <FilterCheckbox
            Icon={DollarSign}
            label='Salary'
            name='salary'
            options={[
              { label: '60k', value: '60' },
              { label: '60k - 80k', value: '60-120' },
              { label: '80k - 100k', value: '80-100' },
              { label: '100k - 120k', value: '100-120' },
              { label: '120k +', value: '120+' },
            ]}
          />
        </div>
      </div>
    </div>
  )
}
