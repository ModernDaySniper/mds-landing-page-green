"use client"

import { useRef, useEffect, useState } from "react"
import { motion, useAnimation, useMotionValue } from "framer-motion"

const features = [
  {
    title: "Expert Instructors",
    description: "Learn from combat-experienced military snipers with proven field expertise.",
    icon: "🎯",
  },
  {
    title: "Real-World Training",
    description: "Practical courses designed around actual operational requirements and scenarios.",
    icon: "🌍",
  },
  {
    title: "Advanced Equipment",
    description: "Train with professional-grade precision rifles and tactical gear.",
    icon: "🔫",
  },
  {
    title: "Comprehensive Curriculum",
    description: "From fundamentals to advanced techniques, our courses cover all aspects of precision shooting.",
    icon: "📚",
  },
  {
    title: "Small Class Sizes",
    description: "Limited enrollment ensures personalized instruction and maximum range time.",
    icon: "👥",
  },
]

export default function FeatureCarousel() {
  const [width, setWidth] = useState(0)
  const carousel = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const controls = useAnimation()

  useEffect(() => {
    if (carousel.current) {
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
    }
  }, [])

  const handleDragEnd = () => {
    const currentX = x.get()
    if (currentX > 0) {
      controls.start({ x: 0, transition: { type: "spring", stiffness: 300, damping: 30 } })
    } else if (currentX < -width) {
      controls.start({ x: -width, transition: { type: "spring", stiffness: 300, damping: 30 } })
    }
  }

  return (
    <div className="py-20 bg-gradient-to-b from-zinc-100 to-white dark:from-olive-800 dark:to-olive-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-olive-800 dark:text-gold-400">Why Train With Us</h2>
        <motion.div ref={carousel} className="cursor-grab overflow-hidden">
          <motion.div
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            whileTap={{ cursor: "grabbing" }}
            animate={controls}
            style={{ x }}
            onDragEnd={handleDragEnd}
            className="flex"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="min-w-[300px] h-[400px] p-8 m-4 bg-white dark:bg-olive-900 rounded-sm shadow-lg flex flex-col justify-between hover-lift transition-all duration-300 ease-in-out border border-zinc-200 dark:border-gold-400/30"
              >
                <div>
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-2 text-olive-800 dark:text-gold-400">{feature.title}</h3>
                  <p className="text-zinc-700 dark:text-zinc-200">{feature.description}</p>
                </div>
                <div className="mt-4">
                  <a href="#contact" className="text-gold-500 dark:text-gold-400 hover:underline">
                    Learn more →
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

