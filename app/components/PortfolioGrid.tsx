"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

const projects = [
  {
    id: 1,
    title: "Precision Rifle Fundamentals",
    description: "3-day course covering essential long-range shooting skills",
    imageUrl: "/placeholder.svg?height=600&width=800",
    category: "Beginner",
  },
  {
    id: 2,
    title: "Advanced Wind Reading",
    description: "Specialized training on reading wind conditions for extreme long-range shooting",
    imageUrl: "/placeholder.svg?height=800&width=600",
    category: "Advanced",
  },
  {
    id: 3,
    title: "Tactical Field Operations",
    description: "Practical field craft and tactical movement for military and law enforcement",
    imageUrl: "/placeholder.svg?height=600&width=800",
    category: "Tactical",
  },
  {
    id: 4,
    title: "Ballistics Mastery",
    description: "Deep dive into external ballistics and advanced trajectory calculations",
    imageUrl: "/placeholder.svg?height=800&width=600",
    category: "Advanced",
  },
  {
    id: 5,
    title: "Positional Shooting",
    description: "Techniques for shooting accurately from non-standard positions",
    imageUrl: "/placeholder.svg?height=600&width=800",
    category: "Intermediate",
  },
  {
    id: 6,
    title: "Sniper Team Operations",
    description: "Two-person sniper team tactics and communication protocols",
    imageUrl: "/placeholder.svg?height=800&width=600",
    category: "Tactical",
  },
]

const categories = ["All", ...new Set(projects.map((project) => project.category))]

export default function PortfolioGrid() {
  const [filter, setFilter] = useState("All")

  const filteredProjects = filter === "All" ? projects : projects.filter((project) => project.category === filter)

  return (
    <section className="py-20 bg-zinc-100 dark:bg-olive-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-olive-800 dark:text-gold-400 sm:text-4xl">Course Catalog</h2>
          <p className="mt-4 text-lg text-zinc-700 dark:text-zinc-200">
            Comprehensive training programs for precision shooting and tactical operations
          </p>
        </motion.div>

        <div className="flex justify-center space-x-4 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 rounded-sm text-sm font-medium transition-colors ${
                filter === category
                  ? "bg-gold-400 text-olive-900"
                  : "bg-white dark:bg-olive-900 text-olive-800 dark:text-zinc-200 hover:bg-zinc-200 dark:hover:bg-olive-800"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white dark:bg-olive-900 rounded-sm shadow-lg overflow-hidden hover-lift transition-all duration-300 ease-in-out border border-zinc-200 dark:border-gold-400/30"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={project.imageUrl || "/placeholder.svg"}
                    alt={project.title}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-300 ease-in-out group-hover:scale-105"
                  />
                  <motion.div
                    className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 transition-opacity duration-300"
                    whileHover={{ opacity: 1 }}
                  >
                    <p className="text-white text-center px-4">{project.description}</p>
                  </motion.div>
                </div>
                <div className="p-6">
                  <div className="text-sm font-medium text-gold-500 dark:text-gold-400 mb-1">{project.category}</div>
                  <h3 className="text-xl font-semibold text-olive-900 dark:text-white mb-2">{project.title}</h3>
                  <a
                    href="#contact"
                    className="text-gold-500 dark:text-gold-400 hover:underline inline-flex items-center"
                  >
                    Enroll Now
                    <svg
                      className="w-4 h-4 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}

