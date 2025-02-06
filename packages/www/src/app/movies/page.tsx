/**
 * the primary movies page. 
 * rendered within the {children} within layout module under /movies folder
 * 
 * this page is the child of the layout module under /movies folder
 * rendered when visiting /movies
 */

import Link from 'next/link'

export type Movie = {
  id: string
  slug: string
  title: string
  director: string
  releaseYear: number
  genre: string
  rating: number
  description: string
}

export const movies: Movie[] = [
  {
    id: '1',
    slug: 'the-last-horizon',
    title: 'The Last Horizon',
    director: 'James Cameron',
    releaseYear: 2020,
    genre: 'Sci-Fi',
    rating: 8.2,
    description: 'A daring journey beyond the stars as humanity reaches new frontiers.'
  },
  {
    id: '2',
    slug: 'mystic-river',
    title: 'Mystic River',
    director: 'Clint Eastwood',
    releaseYear: 2003,
    genre: 'Crime Drama',
    rating: 8.0,
    description: 'A story of friendship, loss, and the past that refuses to stay buried.'
  },
  {
    id: '3',
    slug: 'eternal-night',
    title: 'Eternal Night',
    director: 'Christopher Nolan',
    releaseYear: 2021,
    genre: 'Thriller',
    rating: 7.8,
    description: 'An enigmatic tale where every moment brings a twist in the race against time.'
  },
  {
    id: '4',
    slug: 'red-velvet',
    title: 'Red Velvet',
    director: 'Sofia Coppola',
    releaseYear: 2019,
    genre: 'Drama',
    rating: 7.5,
    description: 'A poetic journey through love and ambition in a vibrant cityscape.'
  },
  {
    id: '5',
    slug: 'blue-ocean',
    title: 'Blue Ocean',
    director: 'Steven Spielberg',
    releaseYear: 2018,
    genre: 'Adventure',
    rating: 8.4,
    description: 'An underwater adventure exploring lost civilizations and deep secrets.'
  },
  {
    id: '6',
    slug: 'silver-shadow',
    title: 'Silver Shadow',
    director: 'Ridley Scott',
    releaseYear: 2022,
    genre: 'Action',
    rating: 7.9,
    description: 'In a dystopian future, shadows conceal more than darkness.'
  },
  {
    id: '7',
    slug: 'golden-days',
    title: 'Golden Days',
    director: 'Ron Howard',
    releaseYear: 2017,
    genre: 'Biopic',
    rating: 8.1,
    description: 'A heartwarming portrayal of life, legacy, and lost moments in time.'
  },
  {
    id: '8',
    slug: 'crimson-rose',
    title: 'Crimson Rose',
    director: 'Quentin Tarantino',
    releaseYear: 2020,
    genre: 'Crime',
    rating: 8.3,
    description: 'A high-stakes thriller painted in shades of red and revenge.'
  },
  {
    id: '9',
    slug: 'violet-dusk',
    title: 'Violet Dusk',
    director: 'Denis Villeneuve',
    releaseYear: 2019,
    genre: 'Mystery',
    rating: 7.6,
    description: 'A mysterious conundrum uncovered as twilight falls over the city.'
  },
  {
    id: '10',
    slug: 'silent-echo',
    title: 'Silent Echo',
    director: 'Guillermo del Toro',
    releaseYear: 2021,
    genre: 'Horror',
    rating: 8.0,
    description: 'A haunting exploration of the past that echoes through the halls of memory.'
  },
]

export default function MoviePage() {
  return (
    <>
      <main className='min-h-screen flex flex-col items-center justify-center'>
        <h1 className='text-3xl font-bold mb-8 text-center'>Movies</h1>
        <div className='z-10 max-w-5xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
          {movies.map((movie) => (
            <div
              key={movie.id}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-200 ease-in-out"
            >
              <Link href={`/movies/${movie.slug}`}>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">{movie.title}</h2>
              </Link>
              <p className="text-gray-700">Directed by: {movie.director}</p>
              <p className="text-gray-600">Release Year: {movie.releaseYear}</p>
              <p className="text-gray-600">Genre: {movie.genre}</p>
              <p className="text-gray-600">Rating: {movie.rating}</p>
              <p className="text-gray-500 mt-4">{movie.description}</p>
            </div>
          ))}
        </div>
      </main>
    </>
  )
}