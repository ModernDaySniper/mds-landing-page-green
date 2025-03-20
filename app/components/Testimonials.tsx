"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const testimonials = [
  {
    quote:
      "Modern Day Sniper transformed my shooting capabilities. Their precision rifle course took me from a 500-yard shooter to consistently hitting targets at 1200+ yards.",
    author: "James R.",
    position: "Military Veteran, Colorado",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    quote:
      "The instructors' real-world experience is invaluable. They break down complex ballistics concepts into practical applications that improved my accuracy dramatically.",
    author: "Michael T.",
    position: "Law Enforcement Officer",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    quote:
      "As a competitive shooter, the advanced marksmanship course gave me the edge I needed. Their methodical approach to wind reading and positional shooting is second to none.",
    author: "Sarah K.",
    position: "Competitive Precision Shooter",
    image: "/placeholder.svg?height=100&width=100",
  },
]

export default function Testimonials() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-olive-900">
      <div className="container mx-auto">
        <motion.h2
          className="text-5xl font-black mb-16 text-center text-olive-900 dark:text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          What Our Students Say
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              className="bg-zinc-100 dark:bg-olive-800 p-6 rounded-sm shadow-md border border-zinc-200 dark:border-gold-400/30"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <p className="text-zinc-700 dark:text-zinc-200 mb-4">"{testimonial.quote}"</p>
              <div className="flex items-center">
                <Image
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.author}
                  width={50}
                  height={50}
                  className="rounded-full mr-4"
                />
                <div>
                  <p className="font-bold text-olive-800 dark:text-gold-400">{testimonial.author}</p>
                  <p className="text-zinc-600 dark:text-zinc-400">{testimonial.position}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

