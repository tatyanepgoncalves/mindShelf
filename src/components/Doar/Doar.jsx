import { Users, LibraryBig, Brain, Scale } from "lucide-react";
import d from "./doar.module.scss";

export default function Doar() {
  return (
    <section className={d.doar}>
      <div className={d.container}>
        <h2>Por que devo doar?</h2>

        <div className={d.boxDoar} >
          <article>
            <Users size={40} />
            <p>Oferece livros a quem não tem acesso, ajudando a reduzir a exclusão social.</p>
          </article>

          <article>
            <LibraryBig size={40} />
            <p>Estimula o hábito da leitura e o aprendizado contínuo.</p>
          </article>

          <article>
            <Brain size={40} />
            <p>Fornece conhecimento e inspiração, permitindo que indivíduos transformem suas vidas.</p>
          </article>

          <article>
            <Scale size={40} />
            <p>Garante que todos, independentemente de sua condição, tenham oportunidades de aprendizado.</p>
          </article>
        </div>
      </div>
    </section>
  )
}
