import { Menu } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useMenuStore } from '@/store/useMenuStore'
import { Button } from '../ui/button'
import MenuDesktop from './MenuDesktop'
import MenuMobile from './MenuMobile'

export default function Header() {
  const { toggleMenu, isOpen } = useMenuStore()

  return (
    <header className="fixed top-0 right-0 z-40 w-full border-b bg-purple-950/80 backdrop-blur-sm">
      <nav className="flex h-16 items-center justify-between px-4 md:px-6">
        <div className="z-50 flex-1">
          <Link className="font-bold text-lg text-zinc-50 md:text-2xl" to="/">
            MindShelf
          </Link>
        </div>

        <MenuDesktop />

        <div className="flex items-center sm:hidden">
          <Button
            className="cursor-pointer"
            onClick={toggleMenu}
            variant="link"
          >
            <Menu className="text-zinc-50" />
          </Button>
        </div>
      </nav>

      {isOpen && <MenuMobile />}
    </header>
  )
}
