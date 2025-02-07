"use client"

import { useState } from "react"
import { authClient } from "@/lib/auth-client"
import { signInSchema } from "@/lib/auth-schema"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import type { z } from "zod"
import Link from "next/link"
import { useToast } from "@/hooks/use-toast"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"

export default function SignInPage() {
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()

  const form = useForm<z.infer<typeof signInSchema>>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  const onSubmit = async (values: z.infer<typeof signInSchema>) => {
    const { email, password } = values
    const { data, error } = await authClient.signIn.email(
      {
        email,
        password,
        callbackURL: "/movies",
      },
      {
        onRequest: () => {
          setIsLoading(true)
          toast({
            title: "Signing in...",
            description: "Please wait while we sign you in",
            duration: 500,
          })
        },
        onSuccess: () => {
          setIsLoading(false)
          form.reset()
          toast({
            title: "Signed in successfully",
            description: "You have been signed in successfully",
            duration: 500,
          })
          // redirect happens within callbackURL
        },
        onError: (ctx) => {
          console.log(ctx.error.message)
          setIsLoading(false)
          toast({
            title: "Error",
            description: ctx.error.message,
            duration: 1000,
          })
        },
      },
    )

    if (error) {
      toast({
        title: "Error",
        description: "Invalid email or password",
        duration: 1000,
      })
    }

    console.log(`user data: ${data}`)
  }

  return (
    <div className="container mx-auto flex items-center justify-center min-h-screen">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Sign in to your account</CardTitle>
          <CardDescription>Enter your email and password to access your account</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="you@example.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input placeholder="********" type="password" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? "Signing in..." : "Sign In"}
              </Button>
            </form>
          </Form>
        </CardContent>
        <CardFooter className="flex justify-center">
          <p className="text-sm text-gray-600">
            Don&apos;t have an account?{" "}
            <Link href="/sign-up" className="font-medium text-primary hover:underline">
              Sign up
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  )
}

