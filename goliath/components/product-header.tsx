"use client"

import Image from "next/image"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

export default function ProductHeader() {
  const [seconds, setSeconds] = useState(30)

  useEffect(() => {
    if (seconds <= 0) return

    const timer = setInterval(() => {
      setSeconds((prevSeconds) => {
        if (prevSeconds <= 1) {
          clearInterval(timer)
          return 0
        }
        return prevSeconds - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [seconds])

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60)
    const remainingSeconds = time % 60
    return `${minutes.toString().padStart(2, "0")}:${remainingSeconds.toString().padStart(2, "0")}`
  }

  return (
    <section className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white p-8 rounded-2xl mb-8 shadow-xl">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="order-2 md:order-1">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-200">
            Goliath XL10
          </h2>

          <p className="text-lg mb-6">
            In an effort to combat counterfeit versions of this popular male enhancement formula, we have rebranded to
            <span className="font-bold"> Goliath XL10</span>. This ensures you receive the highest quality, original
            product.
          </p>

          <div className="bg-red-600/20 p-4 rounded-lg mb-6">
            <div className="flex items-center justify-between">
              <p className="text-lg font-bold text-red-300">Hurry, Limited Stock Available!</p>
              <div className="bg-red-600 text-white rounded-full w-16 h-16 flex items-center justify-center">
                <span className="text-xl font-bold">{formatTime(seconds)}</span>
              </div>
            </div>
          </div>

          <Button
            className="w-full relative overflow-hidden group bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-lg py-6 rounded-xl transition-all duration-300"
            onClick={() => window.open("https://www.dailyhealthsupplement.com/goliath-xl10", "_blank")}
          >
            <span className="relative z-10 font-bold tracking-wider">ORDER NOW</span>
            <span className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-40 group-hover:animate-shine" />
          </Button>
        </div>

        <div className="relative order-1 md:order-2 flex justify-center">
          <div className="relative w-48 h-64">
            <Image src="/images/GOLIATH_XL10.png" alt="Goliath XL10 Product" fill className="object-contain" />
          </div>

          <div className="absolute -bottom-4 right-0 md:right-10 w-24 h-24">
            <Image
              src="/images/New-and-Improved-Badge.png"
              alt="New and Improved Badge"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
