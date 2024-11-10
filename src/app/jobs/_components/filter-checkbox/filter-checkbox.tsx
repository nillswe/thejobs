import { ForwardRefExoticComponent } from 'react'

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
              <input name={name} type='checkbox' value={option.value} className={`checkbox`} />
              <span>{option.label}</span>
            </label>
          </li>
        ))}
      </ul>
    </div>
  )
}
