import Doar from "../../components/Doar/Doar";
import I from "./Inicio.module.scss";


export default function Inicio() {
  return (
    <section className={I.home}>
      <div className={I.imgHome}>
        <h2>Venha fazer parte da maior rede de doação</h2>
      </div>

      <Doar />
    </section>
  )
}
