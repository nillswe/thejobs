import { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

export const Container = ({ children }: Props) => {
  return <div className='w-full max-w-7xl mx-auto'>{children}</div>
}
