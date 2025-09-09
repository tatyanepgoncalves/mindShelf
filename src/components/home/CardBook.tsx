import type { Book } from '@/db/books'

// biome-ignore lint/nursery/useConsistentTypeDefinitions: only in dev
interface CardBookProps {
  book: Book
}

export default function CardBook({ book }: CardBookProps) {
  return (
    <article
      className="flex w-full items-center gap-8 rounded-xl border border-zinc-200 p-4 shadow-sm md:w-[400px]"
      key={book.id}
    >
      <div className="w-[50%]">
        {/** biome-ignore lint/nursery/useImageSize: only in dev*/}
        {/** biome-ignore lint/performance/noImgElement: only in dev */}
        <img alt={book.title} className="w-full" src={book.imageUrl} />
      </div>

      <div className="space-y-2">
        <h2 className="font-medium text-base text-zinc-800">{book.title}</h2>
        <p className="text-xs text-zinc-400">{book.description}</p>
      </div>
    </article>
  )
}
