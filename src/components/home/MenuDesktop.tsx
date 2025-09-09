import { Link } from 'react-router-dom'

export default function MenuDesktop() {
  return (
    <nav className="hidden sm:block">
      <ul className='flex items-center gap-8'>
        <li>
          <Link
            className="text-base text-zinc-100 hover:underline hover:underline-offset-4"
            to="/catalogo"
          >
            Catalogo
          </Link>
        </li>
        <li>
          <Link
            className="text-base text-zinc-100 hover:underline hover:underline-offset-4"
            to="/servicos"
          >
            Serviços
          </Link>
        </li>
        <li>
          <Link
            className="text-base text-zinc-100 hover:underline hover:underline-offset-4"
            to="/horarios"
          >
            Horários
          </Link>
        </li>
        <li>
          <Link
            className="text-base text-zinc-100 hover:underline hover:underline-offset-4"
            to="/contato"
          >
            Contato
          </Link>
        </li>
      </ul>
    </nav>
  )
}
