import { useEffect, useState } from "react"

export const useMobile = (breakpoint = 768) => {
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth <= breakpoint)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= breakpoint)
    }

    window.addEventListener("resize", handleResize)

    // Verifica logo na montagem
    handleResize()

    // Limpa o event listener ao desmontar
    return () => window.removeEventListener("resize", handleResize)
  }, [breakpoint])

  return { isMobile }
}
