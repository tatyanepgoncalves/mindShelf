import ImageLogo from "../../assets/images/logo.png";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import BuscaIcon from "../../assets/images/search.png";
import Inicio from "../../Pages/Inicio/Inicio";
import Doados from "../../Pages/Doados/Doados";
import QueroDoar from "../../Pages/QueroDoar/QueroDoar";

import H from "./Header.module.scss";

export default function Header() {
  return (
    <BrowserRouter>
      <header className={H.header}>
        <section className={H.logo}>
          <img src={ImageLogo} alt="Livro aberto" />
          <h1>Livros Vai na Web</h1>
        </section>

        <nav className={H.menu}>
          <ul>
            <li>
              <Link to="/">Início</Link>
            </li>
            <li>
              <Link to="/doados">Livros Doados</Link>
            </li>
            <li>
              <Link to="/queroDoar">Quero doar</Link>
            </li>
          </ul>

          <div className={H.inputBox}>
            <input type="text" id="input" />
            <label htmlFor="input">O que você procura?</label>
            <img src={BuscaIcon} alt="Busca" className="icon" />
          </div>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/doados" element={<Doados />} />
        <Route path="/queroDoar" element={<QueroDoar />} />
      </Routes>
    </BrowserRouter>
  );
}
