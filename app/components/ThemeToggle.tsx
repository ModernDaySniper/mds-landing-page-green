"use client"

import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import { motion } from "framer-motion"
import { SunIcon, MoonIcon } from "lucide-react"

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  // Avoid hydration mismatch
  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return (
    <motion.button
      className="flex items-center justify-center w-12 h-12 rounded-full bg-zinc-200 dark:bg-olive-800 text-olive-800 dark:text-gold-400 hover:bg-zinc-300 dark:hover:bg-olive-900 transition-colors relative overflow-hidden"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
    >
      <motion.div
        initial={false}
        animate={{
          rotate: theme === "dark" ? 0 : 180,
          opacity: theme === "dark" ? 1 : 0,
          y: theme === "dark" ? 0 : 20,
        }}
        transition={{ duration: 0.3 }}
        className="absolute"
      >
        <MoonIcon className="h-6 w-6" />
      </motion.div>

      <motion.div
        initial={false}
        animate={{
          rotate: theme === "light" ? 0 : -180,
          opacity: theme === "light" ? 1 : 0,
          y: theme === "light" ? 0 : -20,
        }}
        transition={{ duration: 0.3 }}
        className="absolute"
      >
        <SunIcon className="h-6 w-6" />
      </motion.div>
    </motion.button>
  )
}

