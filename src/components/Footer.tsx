export default function Footer() {
  const yearFooter = new Date().getFullYear()

  return (
    <footer className="w-full bg-purple-950 py-6 sm:py-2">
      <p className="text-center text-xs text-zinc-200 leading-loose">
        © {yearFooter} MindShelf. 
        Todos os direitos reservados.
      </p>
    </footer>
  )
}

