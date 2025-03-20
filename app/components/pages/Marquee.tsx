"use client"

import { motion } from "framer-motion"

export default function Marquee() {
  return (
    <div className="relative w-full overflow-hidden bg-white dark:bg-olive-900 py-16">
      <div className="absolute inset-0 bg-gradient-to-r from-white dark:from-olive-900 via-transparent to-white dark:to-olive-900 z-10" />
      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ repeat: Number.POSITIVE_INFINITY, ease: "linear", duration: 20 }}
      >
        {[...Array(4)].map((_, index) => (
          <div key={index} className="flex items-center mx-4">
            <span
              className="text-7xl sm:text-8xl md:text-9xl font-bold text-transparent px-4"
              style={{
                WebkitTextStroke: "1px rgba(61, 61, 29, 0.3)", // olive-800 with opacity in light mode
                WebkitTextStrokeWidth: "1px",
                WebkitTextStrokeColor: "rgba(212, 188, 125, 0.3)", // gold-400 with opacity in dark mode
              }}
            >
              MODERN DAY SNIPER
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  )
}

