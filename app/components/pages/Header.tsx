"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import ThemeToggle from "./ThemeToggle"

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { href: "#courses", label: "Courses" },
    { href: "#about", label: "About" },
    { href: "#contact", label: "Contact" },
  ]

  return (
    <motion.header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "glass-effect shadow-lg"
          : "bg-white/50 dark:bg-zinc-950/50 backdrop-blur-sm"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5 focus-ring rounded-md">
            <span className="sr-only">Modern Day Sniper</span>
            <motion.span 
              className="text-xl font-bold text-tactical-gradient"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              MODERN DAY SNIPER
            </motion.span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-x-12">
          {navItems.map((item) => (
            <motion.div
              key={item.href}
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
            >
              <Link
                href={item.href}
                className="tactical-link text-sm font-semibold leading-6 focus-ring rounded-md px-2 py-1"
              >
                {item.label}
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="flex flex-1 justify-end items-center gap-4">
          <ThemeToggle />
          
          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md focus-ring"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="h-6 w-6 text-zinc-800 dark:text-zinc-200"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden glass-effect"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <motion.div
                  key={item.href}
                  whileHover={{ x: 4 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link
                    href={item.href}
                    className="tactical-link block px-3 py-2 rounded-md text-base font-medium hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors focus-ring"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

