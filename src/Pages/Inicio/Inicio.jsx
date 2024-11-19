import Community from "../../assets/images/community.svg";
import Reading from "../../assets/images/reading.svg";
import Transform from "../../assets/images/transform.svg";
import Balance from "../../assets/images/balance.svg";

import I from "./Inicio.module.scss";


export default function Inicio() {
  return (
    <section className={I.home}>
      <div className={I.imgHome}>
        <h2>VENHA FAZER PARTE DA MAIOR REDE DE DOAÇÃO</h2>
      </div>

      <div className={I.doar}>
        <h2>Por que devo doar?</h2>

        <div className={I.boxDoar} >
          <div>
            <img src={Community} alt="Community" />
            <p>Oferece livros a quem não tem acesso, ajudando a reduzir a exclusão social.</p>
          </div>

          <div>
            <img src={Reading} alt="Reading" />
            <p>Estimula o hábito da leitura e o aprendizado contínuo.</p>
          </div>

          <div>
            <img src={Transform} alt="Transform" />
            <p>Fornece conhecimento e inspiração, permitindo que indivíduos transformem suas vidas.</p>
          </div>

          <div>
            <img src={Balance} alt="Balance" />
            <p>Garante que todos, independentemente de sua condição, tenham oportunidades de aprendizado.</p>
          </div>
        </div>

      </div>
    </section>
  )
}
