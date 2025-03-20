"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import ThemeToggle from "./ThemeToggle"

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 dark:bg-olive-900/90 backdrop-blur-md shadow-md"
          : "bg-white/50 dark:bg-olive-900/50 backdrop-blur-sm"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Modern Day Sniper</span>
            <span className="text-xl font-bold text-olive-800 dark:text-gold-400">MODERN DAY SNIPER</span>
          </Link>
        </div>
        <div className="flex gap-x-12">
          <Link
            href="#courses"
            className="text-sm font-semibold leading-6 text-olive-800 dark:text-zinc-200 hover:text-gold-500 dark:hover:text-gold-400 transition-colors"
          >
            Courses
          </Link>
          <Link
            href="#about"
            className="text-sm font-semibold leading-6 text-olive-800 dark:text-zinc-200 hover:text-gold-500 dark:hover:text-gold-400 transition-colors"
          >
            About
          </Link>
          <Link
            href="#contact"
            className="text-sm font-semibold leading-6 text-olive-800 dark:text-zinc-200 hover:text-gold-500 dark:hover:text-gold-400 transition-colors"
          >
            Contact
          </Link>
        </div>
        <div className="flex flex-1 justify-end">
          <ThemeToggle />
        </div>
      </nav>
    </motion.header>
  )
}

