"use client";
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

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
import Link from "next/link";
import { useLoginMutation } from "@/hooks/useAuthMutation";
import { signInFormSchema } from "@/util/schema";

const SignIn = () => {
  const { mutate, isPending } = useLoginMutation();
  const form = useForm<z.infer<typeof signInFormSchema>>({
    resolver: zodResolver(signInFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof signInFormSchema>) {
    mutate(values);
  }

  return (
    <section className="font-inter h-lvh w-[90%] max-w-lg lg:max-w-6xl mx-auto grid gap-8 lg:items-center lg:justify-center py-20">
      <div className="flex flex-col items-center gap-10 px-4">
        <div className="flex flex-col items-center">
          <h2 className="text-xl md:text-2xl font-normal">Welcome Back!</h2>
          <p className="text-sm md:text-base font-normal text-center">
            Log in to access your personalized investment dashboard.
          </p>
        </div>

        <div className="flex flex-col gap-4 w-full">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              {/* Email Field */}
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="you@example.com"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Password Field */}
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="••••••••"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Remember Me & Forgot Password */}
              <div className="flex items-center justify-end">
                {/* <FormField
                  control={form.control}
                  name="rememberMe"
                  render={({ field }) => (
                    <FormItem className="flex items-center space-x-1">
                      <Checkbox
                        id="rememberMe"
                        checked={field.value}
                        onCheckedChange={field.onChange}
                        className="!m-0"
                      />
                      <FormLabel htmlFor="rememberMe" className="text-sm">
                        Remember Me
                      </FormLabel>
                    </FormItem>
                  )}
                /> */}
                <a
                  href="/forgot-password"
                  className="text-sm text-black-950 underline"
                >
                  Forgot Password?
                </a>
              </div>

              <Button type="submit" className="w-full"  disabled={isPending}>
                {isPending ? "Signing In..." : "Sign In"}
              </Button>
            </form>
          </Form>

          <div className="flex items-center justify-center gap-1">
            <p className="text-sm font-normal text-[#7C7C7C]">New Here?</p>
            <Link href="/sign-up" className="text-sm text-black-950 underline">
              Create an Account
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignIn;
