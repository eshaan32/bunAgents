import { Button } from '@/components/ui/button';
import Link from 'next/link';
export default function Menu() {

  return (
    <div className="relative">
      <Button variant="link">
        <Link href="/movies">Movies</Link>
      </Button>
      <Button variant="link">
        <Link href="/my-lists">My Lists</Link>
      </Button>
    </div>
  )
}