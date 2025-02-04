'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import movierooIcon from "../app/movieroo-icon.png"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
interface User {
  image?: string
  name?: string
}

export default function Navbar() {
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
          name: 'John Doe'
        };
        setUser(userData);
        setLoading(false);
      }, 500);
    };

    fetchUser();
  }, []);


  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-bold">
              <Image
                priority
                src={movierooIcon}
                alt="Movieroo! Find your next movie!"
                width={32}
                height={32}
              />
            </Link>
          </div>

          <div className="flex items-center gap-4">
            {loading ? (
              <div className="w-8 h-8 rounded-full bg-gray-200 animate-pulse" />
            ) : user ? (
              <div className="relative w-8 h-8">
                <Avatar>
                  <AvatarImage src={user.image || '/default-avatar.png'} />
                  <AvatarFallback>{user.name?.charAt(0)}</AvatarFallback>
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
        </div>
      </div>
    </nav>
  )
}