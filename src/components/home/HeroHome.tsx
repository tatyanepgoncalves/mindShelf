import { Link } from 'react-router-dom'
import { Button } from '../ui/button'

export default function HeroHome() {
  return (
    <section className="mb-15 grid items-center justify-center gap-6 pt-6 text-center sm:mb-8 md:py-10">
      <div className="flex flex-col items-center gap-8">
        <div className="flex flex-col gap-2">
          <h1 className="font-extrabold text-xl leading-tight tracking-tighter sm:text-3xl md:text-5xl">
            Bem vindo à MindShelf
          </h1>
          <p className="w-full max-w-[700px] text-muted-foreground text-sm sm:w-[450px] sm:text-lg">
            Descubra um mundo de conhecimento e imaginação. Encontre seu próximo
            livro favorito.
          </p>
        </div>

        <div className="flex gap-4">
          <Link to="/sign">
            <Button className="cursor-pointer" size="lg" type="button">
              Cadastra-se já
            </Button>
          </Link>
          <Link to="/login">
            <Button
              className="cursor-pointer"
              size="lg"
              type="button"
              variant="secondary"
            >
              Entre já
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
