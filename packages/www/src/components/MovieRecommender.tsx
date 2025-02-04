"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"

export default function MovieRecommender() {
  const [query, setQuery] = useState("")
  const [recommendations, setRecommendations] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    try {
      const response = await fetch("/api/recommend", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query }),
      })
      const data = await response.json()
      setRecommendations(data.recommendations)
    } catch (error) {
      console.error("Error fetching recommendations:", error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Movie Recommender</CardTitle>
        <CardDescription>
          Enter a movie title or describe your mood to get personalized recommendations.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="E.g., 'Inception' or 'Feel-good comedy'"
          />
          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? "Getting Recommendations..." : "Get Recommendations"}
          </Button>
        </form>
      </CardContent>
      {recommendations.length > 0 && (
        <CardFooter className="flex flex-col items-start">
          <h2 className="text-xl font-semibold mb-2">Recommendations:</h2>
          <ul className="list-disc pl-5 w-full">
            {recommendations.map((movie, index) => (
              <li key={index} className="mb-1">
                {movie}
              </li>
            ))}
          </ul>
        </CardFooter>
      )}
    </Card>
  )
}

