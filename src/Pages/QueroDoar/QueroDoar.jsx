
import Book from "../../assets/images/book.png";
import D from "./QueroDoar.module.scss";


export default function QueroDoar() {
  

  return (
    <section className={D.doados}>
      <p>
        Por favor, preencha o formulário com suas informações e as informações
        do Livro
      </p>

      <div className={D.boxForm}>
        <div className={D.bookTitle}>
          <img src={Book} alt="Livro aberto" />
          <h2>Informações do Livro</h2>
        </div>

        <form className={D.formDoados}>
          <div>
            <input type="text" id="title"  />
            <label htmlFor="title">Título</label>
          </div>

          <div>
            <input type="text" id="category" placeholder=" " />
            <label htmlFor="category">Categoria</label>
          </div>

          <div>
            <input type="text" id="autor" placeholder=" " />
            <label htmlFor="autor">Autor</label>
          </div>

          <div>
            <input type="text" id="upload" placeholder=" " />
            <label htmlFor="upload">Link da Imagem</label>
          </div>

          <input type="submit" value="Doar" />
        </form>

      </div>
    </section>
  );
}
