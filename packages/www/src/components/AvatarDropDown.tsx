"use client"

import { useState } from 'react'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Avatar, AvatarImage, AvatarFallback } from './ui/avatar'
import { authClient } from '@/lib/auth-client'
import { User } from '@/lib/auth-client'
import { redirect } from 'next/navigation'

const DROPDOWN_SIDE = "top"
// const DROPDOWN_SIDE_OFFSET = 11

export default function ClientProfileDropdown({ user, revalidateAuth }: { user: User, revalidateAuth: () => void }) {
  const [open, setOpen] = useState(false)

  const handleEnter = () => setOpen(true)
  const handleLeave = () => setOpen(false)

  async function handleSignOut(e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault()
    await authClient.signOut({
      fetchOptions: {
        onSuccess: async (context) => {
          console.log(context)
          await revalidateAuth()
          redirect('sign-in')
        },
      }
    })
  }

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <div
          className="relative w-10 h-10 transition-all"
          onMouseEnter={handleEnter}
          onMouseLeave={handleLeave}
        >
          <Avatar className="hover:scale-110 transition-all duration-500 ease-in">
            <AvatarImage src={user.image || '/default-avatar.png'} />
            <AvatarFallback>
              {user.name?.split(" ").map((n) => n.charAt(0)).join("")}
            </AvatarFallback>
          </Avatar>
        </div>
      </PopoverTrigger>
      <PopoverContent
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
        side={DROPDOWN_SIDE}
        // sideOffset={DROPDOWN_SIDE_OFFSET}
        className="w-48 p-4 bg-white shadow-lg rounded-md dark:bg-gray-800"
      >
        <ul>
          <li>
            <a
              href="/profile"
              className="block p-2 hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              Profile
            </a>
          </li>
          <li>
            <a
              href="/settings"
              className="block p-2 hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              Settings
            </a>
          </li>
          <li>
            <a
              href="#"
              onClick={handleSignOut}
              className="block p-2 hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              Sign Out
            </a>
          </li>
        </ul>
      </PopoverContent>
    </Popover>
  )
}
