/**
 * movies slug page
 * renders the detailed view for a particular movie passed by the [slug] parameter
 * when visiting /movies/[slug], this page content is swapped in as children for the /movies layout
 * 
 * this page is the child of the layout module under /movies folder
 * rendered when visiting /movies/[slug]
 */

// export function generateStaticParams() {
//   return [
//     {
//       slug: '1'
//     },
//     {
//       slug: '2'
//     }
//   ]
// }

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

// Example movie data fetching function
async function getMovieDetails(slug: string) {
  // In a real app, this would be an API call or database query
  // This is just a placeholder implementation
  return {
    id: slug,
    title: `Movie ${slug}`,
    description: `This is the description for movie ${slug}`,
    releaseDate: '2023-01-01',
    rating: 4.5,
    genres: ['Action', 'Adventure']
  }
}

type Params = Promise<{ slug: string }>
export default async function MovieDetail({
  params
}: {
  params: Params
}) {
  const { slug } = await params

  // Fetch movie details using the slug
  const movie = await getMovieDetails(slug)

  return (
    <div className="container mx-auto py-8">
      <Card className="overflow-hidden">
        <CardHeader>
          <CardTitle className="text-3xl">{movie.title}</CardTitle>
          <div className="flex flex-wrap gap-2 mt-2">
            {movie.genres.map(genre => (
              <Badge
                key={genre}
                variant="secondary"
              >
                {genre}
              </Badge>
            ))}
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-gray-700 dark:text-gray-300">{movie.description}</p>
        </CardContent>
        <CardFooter className="flex justify-between text-sm text-gray-500 dark:text-gray-400 border-t pt-4">
          <span>Released: {movie.releaseDate}</span>
          <span>Rating: {movie.rating}/5</span>
        </CardFooter>
      </Card>
    </div>
  )
}