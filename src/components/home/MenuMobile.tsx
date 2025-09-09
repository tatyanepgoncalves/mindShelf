import { X } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useMenuStore } from '@/store/useMenuStore'
import { Button } from '../ui/button'

export default function MenuMobile() {
  const { closeMenu } = useMenuStore()

  return (
    <nav className="absolute top-0 right-0 left-0 min-h-screen bg-purple-950/90">
      <div className="fixed top-4 right-4">
        <Button
          className="cursor-pointer"
          onClick={closeMenu}
          size="icon"
          variant="link"
        >
          <X className="text-zinc-50" size={24} />
        </Button>
      </div>

      <ul className="mt-20 flex flex-col items-center gap-6">
        <li>
          <Link
            className="text-sm text-zinc-100 hover:underline hover:underline-offset-4"
            to="/catalogo"
          >
            Catalogo
          </Link>
        </li>
        <li>
          <Link
            className="text-sm text-zinc-100 hover:underline hover:underline-offset-4"
            onClick={closeMenu}
            to="/servicos"
          >
            Serviços
          </Link>
        </li>
        <li>
          <Link
            className="text-sm text-zinc-100 hover:underline hover:underline-offset-4"
            onClick={closeMenu}
            to="/horarios"
          >
            Horários
          </Link>
        </li>
        <li>
          <Link
            className="text-sm text-zinc-100 hover:underline hover:underline-offset-4"
            onClick={closeMenu}
            to="/contato"
          >
            Contato
          </Link>
        </li>
      </ul>
    </nav>
  )
}
