/**
 * when visiting /movies, this layout is rendered
 * content in /movies/page.tsx is rendered at /movies, being the
 * child of this layout
 * 
 * this layout is the parent of the /movies/[slug]/page.tsx
 * rendered when visiting /movies/[slug]
 * 
 * Layout controlling the movies spacing and general styling
 */

export default function MovieLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <section className="flex flex-col items-center justify-center p-16">
      {/* <h1 className='text-3xl font-bold mb-8 text-center p-4'>Movie Layout</h1> */}
      {children}
    </section>
  )
}