'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

import { User } from '@/types'

export default function AuthBadge() {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchUser = async () => {
      setLoading(true);
      // Simulate a network call with a timeout
      setTimeout(() => {
        // Example user data
        const userData: User = {
          image: '/user-avatar.png',
          name: 'Eshaan Joshi'
        };
        setUser(userData);
        setLoading(false);
      }, 500);
    };

    fetchUser();
  }, []);

  return (
    <div className="flex items-center gap-4">
      {loading ? (
        <div className="w-10 h-10 rounded-full bg-gray-200 animate-pulse" />
      ) : user ? (
        <div className="relative w-10 h-10 transition-all">
          <Avatar className='hover:scale-110 transition-all duration-500 ease-in'>
            <AvatarImage src={user.image || '/default-avatar.png'} />
            <AvatarFallback>{
              user.name?.split(" ")
                .map((name) => name.charAt(0))
                .join("")}
            </AvatarFallback>
          </Avatar>
        </div>
      ) : (
        <Link
          href="/login"
          className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
        >
          Sign in
        </Link>
      )}
    </div>
  )
}