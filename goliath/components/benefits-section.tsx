"use client"

import { motion } from "framer-motion"
import { Check } from "lucide-react"

export default function BenefitsSection() {
  const benefits = [
    {
      title: "Enhanced Performance",
      description: "Increases energy and stamina for better performance in all activities, day and night.",
    },
    {
      title: "Muscle Development",
      description: "Supports muscle growth and enhances physical endurance for a stronger, more defined physique.",
    },
    {
      title: "Improved Circulation",
      description: "Boosts blood flow throughout the body for better overall health and enhanced results.",
    },
    {
      title: "Hormone Optimization",
      description: "Naturally supports healthy testosterone levels for improved vitality and masculine energy.",
    },
    {
      title: "All-Natural Formula",
      description: "Made with 100% natural ingredients with no side effects or harmful chemicals.",
    },
    {
      title: "Rapid Results",
      description: "Delivers noticeable improvements within days, with optimal results in just a few weeks.",
    },
  ]

  return (
    <section className="mb-12 md:mb-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        viewport={{ once: true, amount: 0.1 }}
        className="backdrop-blur-sm bg-[var(--card-bg)] border border-[var(--card-border)] rounded-xl md:rounded-3xl p-6 md:p-12 overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.3)] relative"
      >
        {/* Glow effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-green-500 rounded-full filter blur-[100px] opacity-10 dark-theme:opacity-10 light-theme:opacity-5"></div>

        <div className="relative">
          <div className="flex items-center justify-center mb-6 md:mb-10">
            <div className="h-0.5 bg-gradient-to-r from-transparent via-emerald-500 to-transparent w-full max-w-xs hidden md:block"></div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center text-[var(--text-primary)] mx-0 md:mx-6">
              Why Choose Goliath XL10
            </h2>
            <div className="h-0.5 bg-gradient-to-r from-transparent via-emerald-500 to-transparent w-full max-w-xs hidden md:block"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-3 md:gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2, delay: index * 0.05 }}
                viewport={{ once: true, amount: 0.1 }}
                className="flex items-start bg-[var(--card-inner-bg)] p-3 md:p-5 rounded-lg md:rounded-2xl border border-[var(--card-inner-border)] backdrop-blur-sm group hover:bg-[var(--card-inner-hover)] transition-all duration-300"
              >
                {/* Changed to green checkmark */}
                <div className="flex-shrink-0 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-2 md:mr-4 mt-0.5 md:mt-1">
                  <Check className="w-3 h-3 text-white" />
                </div>
                <div>
                  <h3 className="text-sm md:text-lg font-bold text-[var(--benefit-title)] mb-0.5 md:mb-1">
                    {benefit.title}
                  </h3>
                  <p className="text-xs md:text-base text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] transition-colors duration-300">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
