"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function Hero() {
  return (
    <div className="relative isolate overflow-hidden bg-zinc-100 dark:bg-olive-900">
      {/* Hero image with overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/MDS-Home-Hero-Image.png"
          alt="Modern Day Sniper instructors training"
          fill
          priority
          className="object-cover object-right"
        />
        <div className="absolute inset-0 bg-white/30 dark:bg-black/40 mix-blend-multiply" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 lg:flex lg:items-center lg:gap-x-10 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg lg:flex-shrink-0 backdrop-blur-sm bg-white/30 dark:bg-black/30 p-8 rounded-sm border border-zinc-200/50 dark:border-gold-400/20">
          <motion.h1
            className="mt-4 text-4xl font-bold tracking-tight text-olive-900 dark:text-white sm:text-6xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-tactical-gradient">MODERN DAY SNIPER</span>
          </motion.h1>
          <motion.p
            className="mt-6 text-lg leading-8 text-zinc-700 dark:text-zinc-200"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Professional long-range shooting and tactical training from experienced military snipers. Elevate your
            precision and operational effectiveness with our specialized courses.
          </motion.p>
          <motion.div
            className="mt-10 flex items-center gap-x-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <a href="#courses" className="tactical-button">
              View Courses
            </a>
            <a
              href="#about"
              className="text-sm font-semibold leading-6 text-olive-800 dark:text-gold-400 hover:text-olive-900 dark:hover:text-gold-500 transition-colors"
            >
              Learn more <span aria-hidden="true">→</span>
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

