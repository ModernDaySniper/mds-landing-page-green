"use client"

import { motion } from "framer-motion"

export default function WearYourStory() {
  return (
    <section id="about" className="bg-white dark:bg-olive-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-olive-800 dark:text-gold-400 mb-6">
            Train With The Best
          </h2>
          <p className="text-xl md:text-2xl text-zinc-700 dark:text-zinc-200 max-w-3xl mx-auto">
            Modern Day Sniper was founded by active-duty and former military snipers with extensive combat experience.
            Our instructors bring real-world expertise to every course, ensuring you receive the most relevant and
            effective training available.
          </p>
          <motion.div
            className="mt-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <a href="#contact" className="tactical-button inline-flex items-center">
              Join Our Next Course
              <svg
                className="w-5 h-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

