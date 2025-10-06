import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";


export default function HeaderDesktop() {
  return (
    <section className="hidden md:flex w-full max-w-full items-center justify-between border-red-50">

      <section>
        <h1 className="font-roboto text-xl font-bold">MindShelf</h1>
      </section>

      <section className="flex items-center w-full justify-end gap-10">
        <nav className="flex items-center gap-10">
          <Link className="text-sm text-purple-800 hover:text-purple-950 dark:text-purple-100 tracking-wide font-light hover:font-normal dark:hover:text-purple-50 duration-300 transition-all" to="/">Início</Link>
          <Link className="text-sm text-purple-800 hover:text-purple-950 dark:text-purple-100 tracking-wide font-light hover:font-normal dark:hover:text-purple-50 duration-300 transition-all" to="/quero-doar">Quero doar</Link>
          <Link className="text-sm text-purple-800 hover:text-purple-950 dark:text-purple-100 tracking-wide font-light hover:font-normal dark:hover:text-purple-50 duration-300 transition-all" to="/livros-doados">Livros doados</Link>
        </nav>
        <ThemeToggle />
      </section>



    </section>
  )
}
