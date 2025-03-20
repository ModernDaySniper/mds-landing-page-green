"use client"

import { useState, useRef } from "react"
import { motion, useScroll, useTransform, useSpring, useInView } from "framer-motion"

const timelineEvents = [
  {
    year: 2015,
    title: "Modern Day Sniper Founded",
    description: "Established by veteran military snipers to share elite tactical knowledge.",
    details:
      "Founded by Frank Galli and other combat-experienced snipers, Modern Day Sniper began with a mission to provide the highest quality long-range shooting instruction available to civilians, military, and law enforcement.",
  },
  {
    year: 2016,
    title: "First Precision Rifle Course",
    description: "Launched our flagship training program focused on long-range shooting fundamentals.",
    details:
      "Our inaugural Precision Rifle Fundamentals course was held in Arizona, teaching students the core principles of ballistics, marksmanship, and precision shooting out to 1000 yards.",
  },
  {
    year: 2017,
    title: "Advanced Curriculum Development",
    description: "Expanded our course offerings to include specialized tactical training modules.",
    details:
      "Developed advanced curriculum including wind reading mastery, positional shooting, and field craft techniques based on real-world combat experience and scientific ballistic principles.",
  },
  {
    year: 2019,
    title: "International Training Programs",
    description: "Began offering specialized training to international military and law enforcement units.",
    details:
      "Expanded our reach globally, providing tailored sniper and precision rifle training programs to allied military forces and international law enforcement tactical teams.",
  },
  {
    year: 2021,
    title: "Training Facility Expansion",
    description: "Opened dedicated long-range training facilities in multiple states.",
    details:
      "Established permanent training locations featuring ranges out to 2000+ yards, urban environments, and varied terrain to simulate real-world operational conditions.",
  },
  {
    year: 2023,
    title: "Digital Training Platform Launch",
    description: "Introduced online courses and training resources for remote learning.",
    details:
      "Launched our comprehensive digital platform offering video instruction, ballistic calculators, and interactive learning modules to complement our in-person training programs.",
  },
]

const CrosshairIcon = ({ progress }: { progress: number }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-6 h-6"
    style={{ transform: `scale(${progress})` }}
  >
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
    <line x1="12" y1="2" x2="12" y2="6" stroke="currentColor" strokeWidth="2" />
    <line x1="12" y1="18" x2="12" y2="22" stroke="currentColor" strokeWidth="2" />
    <line x1="2" y1="12" x2="6" y2="12" stroke="currentColor" strokeWidth="2" />
    <line x1="18" y1="12" x2="22" y2="12" stroke="currentColor" strokeWidth="2" />
  </svg>
)

export default function Timeline() {
  const [expandedEvent, setExpandedEvent] = useState<number | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  return (
    <section ref={containerRef} className="py-20 bg-white dark:bg-olive-800 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-olive-800 dark:text-gold-400 sm:text-4xl">Our Journey</h2>
          <p className="mt-4 text-lg text-zinc-700 dark:text-zinc-200">The evolution of Modern Day Sniper training</p>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <motion.div
            className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gold-500/20 dark:bg-gold-400/20"
            style={{ scaleY: scaleX }}
          />

          {/* Crosshair icon */}
          <motion.div
            className="sticky top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-gold-500 dark:text-gold-400"
            style={{ y: useTransform(scrollYProgress, [0, 1], [0, 100]) }}
          >
            <CrosshairIcon progress={useTransform(scrollYProgress, [0, 1], [0.5, 1]) as any} />
          </motion.div>

          {timelineEvents.map((event, index) => (
            <TimelineEvent
              key={event.year}
              event={event}
              index={index}
              isExpanded={expandedEvent === index}
              onToggle={() => setExpandedEvent(expandedEvent === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

function TimelineEvent({
  event,
  index,
  isExpanded,
  onToggle,
}: {
  event: (typeof timelineEvents)[0]
  index: number
  isExpanded: boolean
  onToggle: () => void
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })

  return (
    <motion.div
      ref={ref}
      className={`mb-8 flex justify-between items-center w-full ${index % 2 === 0 ? "flex-row-reverse" : ""}`}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
    >
      <div className="w-5/12" />
      <div className="z-20">
        <div className="flex items-center justify-center w-8 h-8 bg-gold-500 dark:bg-gold-400 rounded-full">
          <div className="w-3 h-3 bg-white dark:bg-olive-900 rounded-full" />
        </div>
      </div>
      <motion.div
        className="w-5/12 cursor-pointer"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={onToggle}
      >
        <div className="p-4 bg-zinc-100 dark:bg-olive-900 rounded-sm shadow-md border border-zinc-200 dark:border-gold-400/30">
          <span className="font-bold text-gold-500 dark:text-gold-400">{event.year}</span>
          <h3 className="text-lg font-semibold mb-1 text-olive-900 dark:text-white">{event.title}</h3>
          <p className="text-zinc-700 dark:text-zinc-200">{event.description}</p>
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: isExpanded ? "auto" : 0, opacity: isExpanded ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">{event.details}</p>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  )
}

