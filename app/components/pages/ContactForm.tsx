"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phoneNumber: z.string().min(10, { message: "Please enter a valid phone number." }),
  course: z.string().min(1, { message: "Please select a course." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
})

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phoneNumber: "",
      course: "",
      message: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)
    // Simulate API call
    setTimeout(() => {
      console.log(values)
      setIsSubmitting(false)
      form.reset()
      alert("Thank you for your message. We'll get back to you soon!")
    }, 2000)
  }

  return (
    <section id="contact" className="bg-gold-200 dark:bg-zinc-900 py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-olive-800 dark:text-gold-400 sm:text-4xl mb-4">Enroll Today</h2>
          <p className="text-lg text-zinc-700 dark:text-zinc-200">
            Ready to take your shooting skills to the next level? Fill out the form below and we'll contact you with
            course details.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white dark:bg-zinc-900 p-8 rounded-sm shadow-lg border border-zinc-200 dark:border-gold-400/30"
        >
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-olive-800 dark:text-zinc-200">Name</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="John Doe"
                        {...field}
                        className="bg-zinc-50 dark:bg-zinc-800 border-zinc-200 dark:border-gold-400/30 text-zinc-900 dark:text-white"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-olive-800 dark:text-zinc-200">Email</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="john@example.com"
                        {...field}
                        className="bg-zinc-50 dark:bg-zinc-800 border-zinc-200 dark:border-gold-400/30 text-zinc-900 dark:text-white"
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
                    <FormLabel className="text-olive-800 dark:text-zinc-200">Phone Number</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="+1 (555) 000-0000"
                        {...field}
                        className="bg-zinc-50 dark:bg-zinc-800 border-zinc-200 dark:border-gold-400/30 text-zinc-900 dark:text-white"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="course"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-olive-800 dark:text-zinc-200">Interested Course</FormLabel>
                    <FormControl>
                      <select
                        {...field}
                        className="w-full rounded-sm border border-zinc-200 dark:border-gold-400/30 bg-zinc-50 dark:bg-zinc-800 px-3 py-2 text-zinc-900 dark:text-white"
                      >
                        <option value="">Select a course</option>
                        <option value="precision-rifle-fundamentals">Precision Rifle Fundamentals</option>
                        <option value="advanced-wind-reading">Advanced Wind Reading</option>
                        <option value="tactical-field-operations">Tactical Field Operations</option>
                        <option value="ballistics-mastery">Ballistics Mastery</option>
                        <option value="positional-shooting">Positional Shooting</option>
                        <option value="sniper-team-operations">Sniper Team Operations</option>
                      </select>
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
                    <FormLabel className="text-olive-800 dark:text-zinc-200">Message</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Tell us about your experience level and goals..."
                        className="min-h-[120px] bg-zinc-50 dark:bg-zinc-800 border-zinc-200 dark:border-gold-400/30 text-zinc-900 dark:text-white"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                className="w-full bg-gold-500 hover:bg-gold-400 dark:bg-gold-400 dark:hover:bg-gold-500 text-olive-900 font-bold"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Submit Enrollment Request"}
              </Button>
            </form>
          </Form>
        </motion.div>
      </div>
    </section>
  )
}

