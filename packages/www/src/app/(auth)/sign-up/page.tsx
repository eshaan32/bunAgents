"use client";
import { authClient } from "@/lib/auth-client"; //import the auth client
import { useState } from "react";
import { signUpSchema } from '@/lib/auth-schema';
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { useToast } from '@/hooks/use-toast';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';

export default function SignupPage() {
  const [isLoading, setIsLoading] = useState(false);

  const { toast } = useToast();

  const form = useForm<z.infer<typeof signUpSchema>>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      email: "",
      name: "",
      password: "",
      imageUrl: "",
    },
  })

  const onSubmit = async (values: z.infer<typeof signUpSchema>) => {
    const { name, email, password, imageUrl } = values;
    const { data, error } = await authClient.signUp.email(
      {
        email,
        password,
        name,
        image: imageUrl ? imageUrl : undefined,
        callbackURL: "/sign-in",
      },
      {
        onRequest: () => {
          //show loading
          setIsLoading(true);
          toast({
            title: "Signing up...",
            description: "Please wait while we sign you up",
            duration: 500,
          });
        },
        onSuccess: () => {
          //redirect to the dashboard
          setIsLoading(false);
          form.reset();
          toast({
            title: "Signed up successfully",
            description: "You have been signed up successfully",
            duration: 500,
          });
          // redirect happens within callbackURL
        },
        onError: (ctx) => {
          console.log(ctx.error.message)
          setIsLoading(false);
          toast({
            title: "Error",
            description: ctx.error.message,
            duration: 1000
          });
        },
      }
    );

    if (error?.code === "email_exists") {
      toast({
        title: "Error",
        description: "Email already exists",
        duration: 1000
      });
    }

    console.log(`user data: ${data}`)
  };

  return (
    <div className="container mx-auto flex items-center justify-center min-h-screen">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Create an account</CardTitle>
          <CardDescription>Sign up to get started with our amazing service!</CardDescription>
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
                    <FormDescription>We&apos;ll never share your email with anyone else.</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="John Doe" {...field} />
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
              <FormField
                control={form.control}
                name="imageUrl"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Profile Image URL (optional)</FormLabel>
                    <FormControl>
                      <Input placeholder="https://shadcn.com/your-image.jpg" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? "Creating account..." : "Sign Up"}
              </Button>
            </form>
          </Form>
        </CardContent>
        <CardFooter className="flex justify-center">
          <p className="text-sm text-gray-600">
            Already have an account?{" "}
            <Link href="/sign-in" className="font-medium text-primary hover:underline">
              Log in
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  )
}