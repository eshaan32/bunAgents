'use client'

import Image from 'next/image'
import Link from 'next/link'
import AuthBadge from './AuthBadge'
import movierooIcon from "../app/movieroo-icon.png"

export default function Navbar() {

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

          <AuthBadge />
        </div>
      </div>
    </nav >
  )
}