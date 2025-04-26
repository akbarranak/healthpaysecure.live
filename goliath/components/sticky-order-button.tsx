"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowUp } from "lucide-react"
import { motion } from "framer-motion"

export default function StickyOrderButton() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", toggleVisibility)
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-3 md:bottom-6 right-3 md:right-6 z-50 flex gap-2 md:gap-3">
      <Button
        onClick={scrollToTop}
        className="rounded-full w-8 h-8 md:w-12 md:h-12 bg-[var(--sticky-button-bg)] backdrop-blur-md border border-[var(--sticky-button-border)] hover:bg-[var(--toggle-hover)] transition-all duration-300 text-[var(--sticky-button-text)]"
      >
        <ArrowUp className="w-3 h-3 md:w-5 md:h-5" />
      </Button>

      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        <Button
          className="relative overflow-hidden group bg-gradient-to-r from-yellow-500 to-yellow-400 hover:from-yellow-600 hover:to-yellow-500 py-1.5 md:py-3 px-3 md:px-6 rounded-full transition-all duration-300 shadow-lg shadow-black/30 border border-yellow-400/20 text-xs md:text-base"
          onClick={() => window.open("https://www.dailyhealthsupplement.com/goliath-xl10", "_blank")}
        >
          <span className="relative z-10 font-bold tracking-wider text-black">ORDER NOW</span>
          <span className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-40 group-hover:animate-shine" />
        </Button>
      </motion.div>
    </div>
  )
}
