import { useEffect, useState } from "react"

export const useTheme = () => {
  const [isDark, setIsDark] = useState<boolean>(false)

  useEffect(() => {
    const root = document.documentElement

    if (isDark) {
      root.classList.add("dark")
    } else {
      root.classList.remove("dark")
    }
  }, [isDark])


  const toggleTheme = () => {
    setIsDark((prev) => !prev)
  } 
  
  return {
    toggleTheme,
    isDark
  }
}