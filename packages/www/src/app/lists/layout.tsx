export default function ListsLayout({
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