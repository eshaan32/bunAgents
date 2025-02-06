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
type Params = Promise<{ slug: string }>
export default async function MovieDetail({
  params
}: {
  params: Params
}) {
  const { slug } = await params
  // after fetching slug, make api call passing slug to get movie details


  console.log(`slug: ${slug}`)
  return (
    <div>
      <h1>{slug}</h1>
    </div>
  )
}