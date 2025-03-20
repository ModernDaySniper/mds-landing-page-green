"use client"

import { motion } from "framer-motion"
import { Target, Crosshair, Users, Calendar } from "lucide-react"

const services = [
  {
    icon: <Target className="w-12 h-12 mb-4 text-gold-500 dark:text-gold-400" />,
    title: "Precision Rifle Training",
    description: "Master long-range shooting with our comprehensive precision rifle courses for all skill levels.",
  },
  {
    icon: <Crosshair className="w-12 h-12 mb-4 text-gold-500 dark:text-gold-400" />,
    title: "Advanced Marksmanship",
    description: "Develop elite shooting skills with our advanced marksmanship and ballistics training programs.",
  },
  {
    icon: <Users className="w-12 h-12 mb-4 text-gold-500 dark:text-gold-400" />,
    title: "Tactical Team Operations",
    description: "Learn specialized team tactics and communication for military and law enforcement applications.",
  },
  {
    icon: <Calendar className="w-12 h-12 mb-4 text-gold-500 dark:text-gold-400" />,
    title: "Custom Training Programs",
    description: "Tailored training solutions designed to meet your specific operational requirements and objectives.",
  },
]

export default function Services() {
  return (
    <section id="courses" className="py-20 px-4 sm:px-6 lg:px-8 bg-zinc-100 dark:bg-olive-800">
      <div className="container mx-auto">
        <motion.h2
          className="text-5xl font-black mb-16 text-center text-olive-900 dark:text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Our Training Courses
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="bg-white dark:bg-olive-900 p-6 rounded-sm shadow-md border border-zinc-200 dark:border-gold-400/30"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              {service.icon}
              <h3 className="text-xl font-bold mb-2 text-olive-800 dark:text-gold-400">{service.title}</h3>
              <p className="text-zinc-700 dark:text-zinc-200">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

