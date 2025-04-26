"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import CountdownTimer from "./countdown-timer"

export default function ProductHero() {
  return (
    <section className="mb-12 md:mb-20">
      <div className="relative backdrop-blur-sm bg-[var(--card-bg)] border border-[var(--card-border)] rounded-xl md:rounded-3xl p-6 md:p-12 overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.3)]">
        {/* Glow effects */}
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-blue-500 rounded-full filter blur-[80px] opacity-20 dark-theme:opacity-20 light-theme:opacity-10"></div>
        <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-purple-500 rounded-full filter blur-[80px] opacity-20 dark-theme:opacity-20 light-theme:opacity-10"></div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-12 items-center">
          <div className="order-2 md:order-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-4 md:space-y-6"
            >
              <p className="text-sm md:text-xl text-[var(--text-secondary)] leading-relaxed">
                In an effort to combat counterfeit versions of this popular male enhancement formula, we have rebranded
                to
                <span className="font-bold text-[var(--text-primary)]"> Goliath XL10</span>. This ensures you receive
                the highest quality, original product with our proprietary blend of powerful natural ingredients.
              </p>

              <CountdownTimer />

              <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                <Button
                  className="w-full relative overflow-hidden group bg-gradient-to-r from-yellow-500 to-yellow-400 hover:bg-gradient-to-r hover:from-yellow-600 hover:to-yellow-500 text-base md:text-lg py-4 md:py-7 rounded-xl transition-all duration-300 shadow-lg shadow-yellow-900/30 border border-yellow-400/20"
                  onClick={() => window.open("https://www.dailyhealthsupplement.com/goliath-xl10", "_blank")}
                >
                  <span className="relative z-10 font-bold tracking-wider text-base md:text-xl text-black">
                    ORDER NOW
                  </span>
                  <span className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-40 group-hover:animate-shine" />
                </Button>

                <Button
                  variant="outline"
                  className="w-full relative overflow-hidden group bg-[var(--button-secondary-bg)] border-2 border-[var(--button-secondary-border)] hover:bg-white/10 text-base md:text-lg py-4 md:py-7 rounded-xl transition-all duration-300 text-[var(--button-secondary-text)]"
                  onClick={() => {
                    document.getElementById("rename-info-modal")?.classList.remove("hidden")
                  }}
                >
                  <span className="relative z-10 font-bold tracking-wider text-base md:text-xl">LEARN MORE</span>
                  <span className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-20 group-hover:animate-shine" />
                </Button>
              </div>
            </motion.div>
          </div>

          <div className="relative order-1 md:order-2 flex justify-center mb-6 md:mb-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              {/* Responsive bottle size */}
              <div className="relative w-44 h-56 sm:w-56 sm:h-72 md:w-72 md:h-96">
                <div className="absolute inset-0 bg-gradient-to-b from-blue-500/20 to-purple-500/20 rounded-full filter blur-[60px] opacity-70 dark-theme:opacity-70 light-theme:opacity-40"></div>
                <Image src="/images/GOLIATH_XL10.png" alt="Goliath XL10 Product" fill className="object-contain z-10" />
              </div>

              <div className="absolute -top-2 -right-2 w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 z-20">
                <Image
                  src="/images/New-and-Improved-Badge.png"
                  alt="New and Improved Badge"
                  fill
                  className="object-contain"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
