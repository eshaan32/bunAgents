// movies slug page
// renders the detailed view for a particular movie passed by the [slug] parameter

export function generateStaticParams() { }


export default function MovieDetail({ params }: { params: { slug: string } }) {
  const { slug } = params
  console.log(`slug: ${slug}`)
  return (
    <div>
      <h1>Movie Page</h1>
    </div>
  )
}