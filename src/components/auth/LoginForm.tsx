"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { useRouter } from 'next/navigation';
import Link from "next/link";
import { Loader2, Mail, Eye, EyeOff } from 'lucide-react';
import Image from "next/image";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/hooks/useAuth";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";

const formSchema = z.object({
  email: z.string().email("Invalid email address."),
  password: z.string().min(1, "Password is required."),
  rememberMe: z.boolean().default(false).optional(),
});

export type LoginFormInputs = z.infer<typeof formSchema>;

const AppleIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M19.39,14.78A5.3,5.3,0,0,1,16.5,13.1a4.23,4.23,0,0,0-1.28-1.55,3.81,3.81,0,0,0-2.3-1,4.72,4.72,0,0,0-3.26,1.2,4.09,4.09,0,0,0-1.4,3.15,6.3,6.3,0,0,0,1.86,4.64,4.35,4.35,0,0,0,3,1.52,4.32,4.32,0,0,0,2.65-1,1.15,1.15,0,0,1,1.59,0,1.18,1.18,0,0,1,.32,1.64,6.54,6.54,0,0,1-4.57,2,6.76,6.76,0,0,1-5-2.25A6,6,0,0,1,4.3,15.19,6.5,6.5,0,0,1,8.83,9.7,6.3,6.3,0,0,1,12.72,8a5,5,0,0,1,3.41.79,1.15,1.15,0,0,0,1.38-.13,1.13,1.13,0,0,0,.29-1.42,7.21,7.21,0,0,0-5.32-2.1,7.07,7.07,0,0,0-6.28,3.58,7.38,7.38,0,0,0,1.4,7.22,6.59,6.59,0,0,0,4.88,2.5,6,6,0,0,0,4.32-1.63A5.41,5.41,0,0,0,19.39,14.78ZM14.94,6.13a3.54,3.54,0,0,1-1.2,2.3,3.78,3.78,0,0,1-2.58.89,3.46,3.46,0,0,1,1.13-2.31A3.72,3.72,0,0,1,14.94,6.13Z"></path></svg>
);

const FacebookIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M22,12c0-5.52-4.48-10-10-10S2,6.48,2,12c0,4.84,3.44,8.87,8,9.8V15H8v-3h2V9.5C10,7.57,11.57,6,13.5,6H16v3h-2c-.55,0-1,.45-1,1v2h3v3h-3v6.95c5.05-.5,9-4.76,9-9.85z"></path></svg>
);

const GoogleIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M21.35,11.1H12.18V13.83H18.69C18.36,17.64 15.19,19.27 12.19,19.27C8.36,19.27 5,16.25 5,12C5,7.9 8.2,4.73 12.19,4.73C15.29,4.73 16.56,6.16 16.56,6.16L18.49,4.22C18.49,4.22 16.02,2 12.19,2C6.42,2 2.03,6.8 2.03,12C2.03,17.05 6.16,22 12.19,22C17.6,22 21.54,18.33 21.54,12.81C21.54,11.9,21.35,11.1,21.35,11.1Z"></path></svg>
);

export function LoginForm() {
  const router = useRouter();
  const { toast } = useToast();
  const { login, loading } = useAuth();
  const [showPassword, setShowPassword] = useState(false);

  const form = useForm<LoginFormInputs>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false
    },
  });

  async function onSubmit(values: LoginFormInputs) {
    try {
      await login(values);
      toast({
        title: "Login Successful",
        description: "Welcome back!",
      });
      router.push('/');
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Login Failed",
        description: "Invalid credentials. Please try again.",
      });
    }
  }

  return (
    <div className="flex-1 flex items-center justify-center p-4 md:p-8">
      <div className="max-w-md w-full">
        <h2 className="text-3xl font-bold tracking-tight text-foreground mb-8">Log In</h2>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email Address</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input placeholder="Enter Your Email Id" {...field} className="pl-10 h-12" />
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    </div>
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
                    <div className="relative">
                      <Input
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter Your Password"
                        {...field}
                        className="pr-10 h-12"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute inset-y-0 right-0 flex items-center pr-3"
                      >
                        {showPassword ? <EyeOff className="h-5 w-5 text-muted-foreground" /> : <Eye className="h-5 w-5 text-muted-foreground" />}
                      </button>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex items-center justify-between">
              <FormField
                control={form.control}
                name="rememberMe"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel className="font-normal">
                        Remember Me
                      </FormLabel>
                    </div>
                  </FormItem>
                )}
              />
              <div className="text-sm">
                <Link href="#" className="font-medium text-red-600 hover:text-red-500">
                  Forgot Password?
                </Link>
              </div>
            </div>

            <Button type="submit" className="w-full h-12 text-lg rounded-full" size="lg" disabled={loading}>
              {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Log In
            </Button>
          </form>
        </Form>

        <div className="mt-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="bg-background px-2 text-muted-foreground">OR CONTINUE WITH</span>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-3 gap-3">
            <div>
              <Button variant="outline" className="w-full h-12">
                <span className="sr-only">Sign in with Apple</span>
                <AppleIcon className="h-6 w-6" />
              </Button>
            </div>
            <div>
                <Button variant="outline" className="w-full h-12 text-[#1877F2]">
                    <span className="sr-only">Sign in with Facebook</span>
                    <FacebookIcon className="h-6 w-6" />
                </Button>
            </div>
            <div>
              <Button variant="outline" className="w-full h-12">
                <span className="sr-only">Sign in with Google</span>
                <GoogleIcon className="h-6 w-6" />
              </Button>
            </div>
          </div>
        </div>
        
        <div className="mt-6 text-center text-sm">
          Doesn't have an account?{' '}
          <Link href="/signup" className="font-medium text-primary hover:text-primary/90">
            Create One
          </Link>
        </div>
      </div>
    </div>
  );
}
