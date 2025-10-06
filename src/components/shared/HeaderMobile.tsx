import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";


export default function HeaderMobile() {
  return (
    <section className="flex flex-col items-center gap-4">
      <section className="flex items-center justify-between w-full">
        <h1 className="font-roboto text-xl font-bold">MindShelf</h1>

        <ThemeToggle />
      </section>

      <nav className="w-full flex items-center justify-between">
        <Link className="text-sm text-purple-800 hover:text-purple-950 dark:text-purple-100 tracking-wide font-light hover:font-normal dark:hover:text-purple-50 duration-300 transition-all" to="/">Início</Link>
        <Link className="text-sm text-purple-800 hover:text-purple-950 dark:text-purple-100 tracking-wide font-light hover:font-normal dark:hover:text-purple-50 duration-300 transition-all" to="/quero-doar">Quero doar</Link>
        <Link className="text-sm text-purple-800 hover:text-purple-950 dark:text-purple-100 tracking-wide font-light hover:font-normal dark:hover:text-purple-50 duration-300 transition-all" to="/livros-doados">Livros doados</Link>
      </nav>
    </section>
  )
}
