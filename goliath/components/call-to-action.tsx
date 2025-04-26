"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Check } from "lucide-react"
import Image from "next/image"

export default function CallToAction() {
  return (
    <section className="mb-12 md:mb-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="relative overflow-hidden"
      >
        {/* Different background colors for light and dark modes */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-600 dark:from-blue-900 dark:to-blue-800 rounded-xl md:rounded-3xl"></div>
        <div className="absolute inset-0 bg-[url('/images/pattern-bg.png')] opacity-10 dark:opacity-[var(--cta-pattern-opacity)]"></div>

        <div className="relative backdrop-blur-sm rounded-xl md:rounded-3xl p-6 md:p-12 lg:p-16 border border-blue-500/30 dark:border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.3)]">
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center">
            <div className="max-w-xl">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-6 text-white drop-shadow-md">
                Experience Goliath XL10
              </h2>

              <p className="text-base md:text-xl mb-4 md:mb-8 text-white/95 drop-shadow-sm">
                Limited stock available. Don't miss out on this opportunity to transform your performance and
                confidence!
              </p>

              <ul className="mb-4 md:mb-8 space-y-2 md:space-y-3">
                <li className="flex items-center text-white text-xs md:text-base">
                  <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-green-500 flex items-center justify-center mr-2 md:mr-3">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <span className="drop-shadow-sm">Free Shipping on All Orders</span>
                </li>
                <li className="flex items-center text-white text-xs md:text-base">
                  <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-green-500 flex items-center justify-center mr-2 md:mr-3">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <span className="drop-shadow-sm">60-Day Money Back Guarantee</span>
                </li>
                <li className="flex items-center text-white text-xs md:text-base">
                  <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-green-500 flex items-center justify-center mr-2 md:mr-3">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <span className="drop-shadow-sm">24/7 Customer Support</span>
                </li>
              </ul>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Button
                  className="relative overflow-hidden group bg-gradient-to-r from-yellow-500 to-yellow-400 hover:from-yellow-600 hover:to-yellow-500 text-sm md:text-lg py-4 md:py-7 px-4 md:px-10 rounded-xl transition-all duration-300 shadow-lg shadow-yellow-900/30 border border-yellow-400/20 w-full sm:w-auto"
                  onClick={() => window.open("https://www.dailyhealthsupplement.com/goliath-xl10", "_blank")}
                >
                  <span className="relative z-10 font-bold tracking-wider text-base md:text-xl flex items-center text-black">
                    ORDER NOW <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5" />
                  </span>
                  <span className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-40 group-hover:animate-shine" />
                </Button>
              </motion.div>
            </div>

            <div className="flex justify-center mt-6 md:mt-0">
              {/* Responsive bottle size */}
              <div className="relative w-44 h-56 sm:w-56 sm:h-72 md:w-72 md:h-96">
                <div className="absolute inset-0 bg-gradient-to-b from-blue-500/20 to-purple-500/20 rounded-full filter blur-[60px] opacity-70"></div>
                <Image src="/images/GOLIATH_XL10.png" alt="Goliath XL10 Product" fill className="object-contain z-10" />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
