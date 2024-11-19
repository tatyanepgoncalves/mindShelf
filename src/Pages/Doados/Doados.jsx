import Book from "../../assets/images/livro.png";
import Do from "./Doados.module.scss";

export default function Doados() {
  return (
    <section className={Do.livrosDoados}>
      <h2>Livros Doados</h2>

      <div className={Do.List}>
        <div className={Do.listItem}>
          <img src={Book} alt="Livro" />

          <div>
            <p>Título do Livro</p>
            <p>Autor do Livro</p>
            <p>Categoria do Livro</p>
          </div>
        </div>
        
        <div className={Do.listItem}>
          <img src={Book} alt="Livro" />

          <div>
            <p>Título do Livro</p>
            <p>Autor do Livro</p>
            <p>Categoria do Livro</p>
          </div>
        </div>
        
        <div className={Do.listItem}>
          <img src={Book} alt="Livro" />

          <div>
            <p>Título do Livro</p>
            <p>Autor do Livro</p>
            <p>Categoria do Livro</p>
          </div>
        </div>
        
        <div className={Do.listItem}>
          <img src={Book} alt="Livro" />

          <div>
            <p>Título do Livro</p>
            <p>Autor do Livro</p>
            <p>Categoria do Livro</p>
          </div>
        </div>
        
        <div className={Do.listItem}>
          <img src={Book} alt="Livro" />

          <div>
            <p>Título do Livro</p>
            <p>Autor do Livro</p>
            <p>Categoria do Livro</p>
          </div>
        </div>
        
        <div className={Do.listItem}>
          <img src={Book} alt="Livro" />

          <div>
            <p>Título do Livro</p>
            <p>Autor do Livro</p>
            <p>Categoria do Livro</p>
          </div>
        </div>
        
        <div className={Do.listItem}>
          <img src={Book} alt="Livro" />

          <div>
            <p>Título do Livro</p>
            <p>Autor do Livro</p>
            <p>Categoria do Livro</p>
          </div>
        </div>

       

      </div>
    </section>
  );
}
