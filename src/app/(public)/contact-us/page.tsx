"use client";
import React from "react";
import Head from "next/head";
import GoogleMap from "@/components/features/GoogleMap";
import { Input } from "@/components/ui/input";
import { AtSign, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageHeader from "@/components/shared/PageHeader";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  const formSchema = z.object({
    firstName: z
      .string()
      .min(2, { message: "First name must be at least 2 characters." }),
    lastName: z
      .string()
      .min(2, { message: "Last name must be at least 2 characters." }),
    email: z.string().email({ message: "Invalid email address." }),
    phoneNumber: z.string().regex(/^\+?[1-9]\d{1,14}$/, {
      message: "Invalid phone number format.",
    }),
    message: z
      .string()
      .min(10, { message: "Message must be at least 10 characters long." }),
    // terms: z.boolean().refine((val) => val === true, {
    //   message: "You must accept the terms.",
    // }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      message: "",
      // terms: false,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log("Form Data:", values); // Replace with actual signup logic
  }

  return (
    <>
      <Head>
        <title>GVEST Global || Contact Us</title>
        <meta
          property="og:description"
          content="Learn about GVEST: Our core values, our dedicated team, and our commitment to providing cutting-edge financial technology solutions, real estate, banking, investments, and financial inclusion. Join us for a brighter financial future."
        />
      </Head>
      <PageHeader title="CONTACT US" />
      <section className="max-w-[1400px] px-5 lg:px-10 mx-auto py-20 md:py-28 bg-white">
        <div className="w-full grid gap-10 justify-center items-center max-w-[1400px]">
          <div className="flex flex-col items-center gap-2 font-inter">
            <h3 className="text-2xl md:text-3xl font-medium">
              Get in Touch with Gtext
            </h3>
            <p className="text-base md:text-xl font-normal text-center">
              Whether you have questions, need assistance, or are ready to
              invest, our team is here to help.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 gap-y-20 px-3 lg:px-10 font-inter">
            <div className="flex flex-col gap-8">
              <div className="grid">
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-4 grid grid-cols-1 gap-4"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 items-start gap-4 gap-y-8 mb-4">
                      <FormField
                        control={form.control}
                        name="firstName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>First Name</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Enter your First Name"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="lastName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Last Name</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Enter your Last Name"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

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
                    <FormField
                      control={form.control}
                      name="phoneNumber"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone Number</FormLabel>
                          <FormControl>
                            <Input
                              type="number"
                              placeholder="you@example.com"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Enter your message"
                              {...field}
                              className="w-full p-2 border rounded-md min-h-[120px] md:min-h-[150px] lg:min-h-[180px] resize-y"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button
                      type="submit"
                      className="w-fit border h-fit py-2 px-4 text-lg"
                    >
                      Submit
                    </Button>
                  </form>
                </Form>
              </div>
            </div>
            <div className="flex flex-col gap-5 font-inter">
              <div className="flex flex-col gap-5">
                <div className="flex flex-row gap-3 items-center">
                  <MapPin
                    aria-label="map-icon"
                    className="w-6 h-6 md:w-8 md:h-8"
                  />
                  <div className="flex flex-col gap-1">
                    <p className="text-base font-medium">
                      Gtext HQ Office Address:
                    </p>
                    <p className="text-base font-normal">
                      18851 NE 29th Ave, Suite 1000 Aventura, FL 33180
                    </p>
                  </div>
                </div>
                <div className="flex flex-row gap-3 items-center">
                  <Phone
                    aria-label="phone-icon"
                    className="w-6 h-6 md:w-8 md:h-8"
                  />
                  <div className="flex flex-col gap-1">
                    <div className="flex gap-1">
                      <p className="text-base font-medium">Phone:</p>
                      <p className="text-base font-normal">+1 305 407 0276</p>
                    </div>
                    <p className="text-sm md:text-base font-normal">
                      (Monday to Friday, 9:00 AM - 6:00 PM EST)
                    </p>
                  </div>
                </div>
                <div className="flex flex-row gap-3 items-center">
                  <AtSign
                    aria-label="email-icon"
                    className="w-6 h-6 md:w-8 md:h-8"
                  />
                  <div className="flex gap-1">
                    <p className="text-base font-medium">Email:</p>
                    <p className="text-base font-normal">invest@gtext.com</p>
                  </div>
                </div>
              </div>
              <div className="flex mt-4 md:mt-10">
                <GoogleMap />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
