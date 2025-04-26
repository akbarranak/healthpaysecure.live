"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

export default function CountdownTimer() {
  const [seconds, setSeconds] = useState(60) // Changed to 1 minute (60 seconds)
  const [isActive, setIsActive] = useState(true)

  useEffect(() => {
    if (!isActive) return

    const timer = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1)
      } else {
        setIsActive(false)
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [seconds, isActive])

  const formatTime = (value: number) => {
    const minutes = Math.floor(value / 60)
    const remainingSeconds = value % 60
    return `${minutes.toString().padStart(2, "0")}:${remainingSeconds.toString().padStart(2, "0")}`
  }

  return (
    <div className="bg-red-600 p-3 md:p-6 rounded-xl md:rounded-2xl border border-red-700 relative overflow-hidden shadow-lg">
      {/* Animated background pulse */}
      <motion.div
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 2,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "loop",
        }}
        className="absolute inset-0 bg-red-700 rounded-xl md:rounded-2xl"
      />

      <div className="relative z-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2 md:gap-4">
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
            <p className="text-base md:text-xl font-bold text-white mb-0 md:mb-1">LIMITED TIME OFFER</p>
            <p className="text-white text-xs md:text-lg">Hurry, Stock Running Low!</p>
          </div>

          <div className="bg-white p-2 md:p-4 rounded-lg md:rounded-xl shadow-lg mt-2 sm:mt-0">
            <div className="text-xl md:text-3xl font-bold text-black">
              <motion.span
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 1,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "loop",
                }}
              >
                {formatTime(seconds)}
              </motion.span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
