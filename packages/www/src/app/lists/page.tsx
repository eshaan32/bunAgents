/**
 * This page renders the user's list of pages
 * In the future, the user will be able to create custom lists and add movies to them. 
 * 
 * By default this page will render the user's favorited movies
 */

export default function ListsPage() {
  return (
    <div>
      <h1 className='text-3xl font-bold mb-8 text-center'>Lists</h1>
      <div className="max-w-5xl">
        <div className="flex flex-col justify-between sm:flex-row md:gap-16 sm:gap-2">
          {/* 2 lists, one for favorites and one for watchlist */}
          <div>
            {/* favorites */}
            <h2 className="text-2xl font-bold text-gray-900 mb-2 outline outline-1 outline-gray-200 rounded-md p-2">Favorites</h2>
            <div>
              {/* list container */}
            </div>
          </div>
          <div>
            {/* watchlist */}
            <h2 className="text-2xl font-bold text-gray-900 mb-2 outline outline-1 outline-gray-200 rounded-md p-2">Watchlist</h2>
            {/* list container */}
          </div>
        </div>
      </div>
    </div>
  )
}