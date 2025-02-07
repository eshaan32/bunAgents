'use server'

// export const dynamic = "force-dynamic"
// export const fetchCache = 'default-no-store'
// export const revalidate = 0

import Link from 'next/link'
import { auth } from '@/lib/auth'
import { headers } from 'next/headers'
import AvatarDropdown from './AvatarDropDown'
import { revalidatePath } from 'next/cache'

export default async function AuthBadge() {
  const session = await auth.api.getSession({
    headers: await headers()
  })

  // This function can be called from the client
  async function revalidateAuth() {
    'use server'
    revalidatePath('/', 'layout') // Revalidate the entire layout since navbar is likely in root layout
  }
  console.log(session)
  const user = session?.user

  return (
    <div className="flex items-center gap-4">
      {user ? (
        <AvatarDropdown user={user} revalidateAuth={revalidateAuth} />
      ) : (
        <Link
          href="/sign-in"
          className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
        >
          Sign in
        </Link>
      )}
    </div>
  )
}