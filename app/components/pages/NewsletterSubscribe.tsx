"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form"

const formSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address." }),
})

export default function NewsletterSubscribe() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)
    // Simulate API call
    setTimeout(() => {
      console.log(values)
      setIsSubmitting(false)
      form.reset()
      alert("Thank you for subscribing to our newsletter!")
    }, 2000)
  }

  return (
    <section className="bg-white dark:bg-olive-900 py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-zinc-100 dark:bg-olive-800 rounded-sm p-8 shadow-lg border border-zinc-200 dark:border-gold-400/30"
        >
          <h2 className="text-2xl font-bold text-olive-800 dark:text-gold-400 mb-4 text-center">Stay Updated</h2>
          <p className="text-zinc-700 dark:text-zinc-200 mb-6 text-center">
            Subscribe to our newsletter for training tips, course announcements, and tactical insights.
          </p>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder="Enter your email"
                        {...field}
                        className="bg-white dark:bg-olive-900 border-zinc-200 dark:border-gold-400/30 text-zinc-900 dark:text-white"
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
                {isSubmitting ? "Subscribing..." : "Subscribe"}
              </Button>
            </form>
          </Form>
        </motion.div>
      </div>
    </section>
  )
}

