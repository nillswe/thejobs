import { NextRequest, NextResponse } from 'next/server'

import { EmailOtpType } from '@supabase/supabase-js'

import { createUser, getUserByUid } from '@/server/data/user.data'
import { supabaseCreateClient } from '@/libs/supabase/supabase-server'

export const GET = async (request: NextRequest) => {
  const supabase = await supabaseCreateClient()

  const { searchParams } = new URL(request.url)
  const token_hash = searchParams.get('token_hash')
  const type = searchParams.get('type') as EmailOtpType
  const redirectUrl = new URL('/auth', request.url)

  if (!token_hash && !type) {
    redirectUrl.searchParams.append('status', 'missing-params')
    return NextResponse.redirect(redirectUrl)
  }

  const { error, data } = await supabase.auth.verifyOtp({ token_hash: token_hash!, type })

  if (error || !data.user) {
    redirectUrl.searchParams.append('status', 'login-failed')
    return NextResponse.redirect(redirectUrl)
  }

  const user = await getUserByUid(data.user.id)

  if (!user) {
    await createUser({
      email: data.user.email!,
      uid: data.user.id,
      name: null,
    })
  }

  return NextResponse.redirect(new URL('/panel', request.url))
}
