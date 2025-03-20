import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-zinc-100 dark:bg-zinc-900 border-t border-zinc-200 dark:border-zinc-800">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
        <nav className="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12" aria-label="Footer">
          {["Courses", "About", "Instructors", "FAQ", "Privacy", "Terms"].map((item) => (
            <div key={item} className="pb-6">
              <Link
                href="#"
                className="text-sm leading-6 text-zinc-600 dark:text-zinc-400 hover:text-gold-500 dark:hover:text-gold-400 transition-colors"
              >
                {item}
              </Link>
            </div>
          ))}
        </nav>
        <p className="mt-10 text-center text-sm leading-5 text-zinc-600 dark:text-zinc-400">
          &copy; 2023 Modern Day Sniper. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

