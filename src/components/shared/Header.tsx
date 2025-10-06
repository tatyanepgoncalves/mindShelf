import { useMobile } from "@/hooks/useMobile"
import HeaderMobile from "./HeaderMobile"
import HeaderDesktop from "./HeaderDesktop"

export default function Header() {
  const { isMobile } = useMobile()

  return (
    <header className="bg-purple-200 dark:bg-purple-800">
      <div className="p-8 w-full max-w-5xl mx-auto">
        <HeaderDesktop />
        {isMobile && <HeaderMobile />}
      </div>
    </header>
  )
}
