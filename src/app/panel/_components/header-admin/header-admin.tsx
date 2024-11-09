'use client'

import Link from 'next/link'
import Image from 'next/image'
import { redirect } from 'next/navigation'

import { LogOut } from 'lucide-react'

import { UserModel } from '@/types/models'
import { ThemeToggle } from '@/app/_components'
import { supabase } from '@/libs/supabase/supabase-client'

type Props = {
  user: UserModel
}

export const HeaderAdmin = ({ user }: Props) => {
  const userInitial = user?.email.split('@')[0][0]

  const handleLogout = async () => {
    await supabase.auth.signOut()
    redirect('/')
  }

  return (
    <div className='navbar bg-base-300'>
      <div className='navbar-start'>
        <Link href='/panel' className='btn btn-ghost text-xl'>
          <Image alt='Logo' width={120} height={80} src='/logo/logo.svg' />
        </Link>
      </div>
      <div className='navbar-center flex'>
        <ul className='menu menu-horizontal px-1'>
          <li>
            <Link href='/panel'>Dashboard</Link>
          </li>
          <li>
            <Link href='/panel/todo'>Todo</Link>
          </li>
        </ul>
      </div>
      <div className='navbar-end'>
        <ThemeToggle />
        <div className='dropdown dropdown-end'>
          <div tabIndex={0} role='button' className={`
            flex items-center
            hover:cursor-pointer
          `}>
            <div className='avatar placeholder'>
              <div className='w-10 rounded-full bg-accent'>
                <span className='text-xl text-white'>{userInitial}</span>
              </div>
            </div>
          </div>
          <ul
            tabIndex={0}
            className='menu dropdown-content z-[1] w-52 rounded-box bg-base-100 p-2 shadow'>
            <li>
              <Link href='/panel/profile'>My profile</Link>
            </li>
            <li>
              <button onClick={handleLogout} className='text-error'>
                <LogOut size={18} />
                Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
