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
    <>
      <main>
        <div className="flex flex-col items-center justify-center p-16">
          {children}
        </div>
      </main>
    </>
  )
}