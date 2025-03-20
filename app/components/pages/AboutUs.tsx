"use client"

import { motion } from "framer-motion"

export default function AboutUs() {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gold-100 dark:bg-zinc-900">
      <div className="container mx-auto relative z-10">
        <motion.h2
          className="text-5xl font-black mb-8 text-center text-olive-900 dark:text-gold-400"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          About Us
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="relative z-10"
            initial={{ opacity: 0, x: -50 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl font-bold mb-4 text-olive-900 dark:text-gold-400">We are Creative Innovators</h3>
            <p className="text-zinc-700 dark:text-zinc-200 mb-6">
              At CreativeAgency, we blend cutting-edge technology with artistic vision to create digital experiences
              that captivate and inspire. Our team of passionate designers, developers, and strategists work tirelessly
              to push the boundaries of what's possible in the digital realm.
            </p>
            <p className="text-zinc-700 dark:text-zinc-200">
              With a focus on innovation and user-centric design, we've helped countless brands transform their digital
              presence and connect with their audience in meaningful ways.
            </p>
          </motion.div>
          <motion.div
            className="relative h-96"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-gold-400 to-gold-500 dark:from-gold-500 dark:to-gold-600 rounded-lg transform rotate-3"></div>
            <div className="absolute inset-0 bg-white dark:bg-zinc-800 rounded-lg transform -rotate-3 flex items-center justify-center">
              <p className="text-2xl font-bold text-olive-900 dark:text-gold-400">Creative Team at Work</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

