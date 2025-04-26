"use client"

import type React from "react"

import { createContext, useContext, useEffect, useState } from "react"
import { usePathname } from "next/navigation"

type Theme = "light" | "dark"

type ThemeProviderProps = {
  children: React.ReactNode
}

type ThemeProviderState = {
  theme: Theme
  setTheme: (theme: Theme) => void
}

const initialState: ThemeProviderState = {
  theme: "light",
  setTheme: () => null,
}

const ThemeProviderContext = createContext<ThemeProviderState>(initialState)

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>("light")
  const pathname = usePathname()

  useEffect(() => {
    // Check if URL contains "/dark"
    const isDarkPath = pathname?.includes("/dark")

    if (isDarkPath) {
      setTheme("dark")
    } else {
      // For root path, always default to light mode
      setTheme("light")
    }
  }, [pathname])

  useEffect(() => {
    const root = document.documentElement

    if (theme === "dark") {
      root.classList.add("dark-theme")
      root.classList.remove("light-theme")
    } else {
      root.classList.add("light-theme")
      root.classList.remove("dark-theme")
    }
  }, [theme])

  const value = {
    theme,
    setTheme: (theme: Theme) => {
      setTheme(theme)
    },
  }

  return <ThemeProviderContext.Provider value={value}>{children}</ThemeProviderContext.Provider>
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext)

  if (context === undefined) throw new Error("useTheme must be used within a ThemeProvider")

  return context
}
