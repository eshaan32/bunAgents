/**
 * This layout is used to wrap the auth pages.
 * It is used to add the auth provider to the app.
 */

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <main>
        <div className="flex flex-col items-center justify-center h-screen">
          {children}
        </div>
      </main>
    </>
  )
}
