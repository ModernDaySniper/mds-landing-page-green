"use client"

import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import { motion, AnimatePresence } from "framer-motion"
import { SunIcon, MoonIcon } from "lucide-react"

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  // Avoid hydration mismatch
  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return (
    <motion.button
      className="relative flex items-center justify-center w-12 h-12 rounded-full glass-effect text-zinc-800 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors focus-ring"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
    >
      <AnimatePresence mode="wait">
        {theme === "dark" ? (
          <motion.div
            key="moon"
            initial={{ rotate: -180, opacity: 0, y: 20 }}
            animate={{ rotate: 0, opacity: 1, y: 0 }}
            exit={{ rotate: 180, opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="absolute text-gold-400"
          >
            <MoonIcon className="h-6 w-6" />
          </motion.div>
        ) : (
          <motion.div
            key="sun"
            initial={{ rotate: 180, opacity: 0, y: -20 }}
            animate={{ rotate: 0, opacity: 1, y: 0 }}
            exit={{ rotate: -180, opacity: 0, y: 20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="absolute text-gold-500"
          >
            <SunIcon className="h-6 w-6" />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  )
}

