import { useState } from "react";
import Book from "../../assets/images/book.png";
import D from "./QueroDoar.module.scss";
import axios from "axios";

export default function QueroDoar() {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [author, setAuthor] = useState("");
  const [image_url, setImage_Url] = useState("");
  
  const enviarDados = async () => {
    const apiUrl = "https://api-library-wgk2.onrender.com/doar";

    const dadosEnviar = {
      title,
      category,
      author,
      image_url,
    };

    try {
      const envioApi = await axios.post(apiUrl, dadosEnviar, {
        headers: {"Content-Type": "application/json"}
      });
      
      if (envioApi.status === 201 || envioApi.status === 200) {
        alert("Livro doado com sucesso!");
        setTitle("");
        setCategory("");
        setAuthor("");
        setImage_Url("");
      } else {
        alert("Erro ao enviar os dados do livro. Tente novamente.");
      } 
    } catch (erro) {
      console.error("Erro ao enviar os dados do livro:", erro)
      alert("Ocorreu um erro ao enviar os dados do livro.")
    }


  };

  const capturaTitle = (e) => {
    setTitle(e.target.value);
  };

  const capturaCategory = (e) => {
    setCategory(e.target.value);
  };

  const capturaAuthor = (e) => {
    setAuthor(e.target.value);
  };

  const capturaImage = (e) => {
    setImage_Url(e.target.value);
  };

 

  return (
    <section className={D.doados}>
      <p>
        Por favor, preencha o formulário com suas informações e as informações
        do livro
      </p>

      <article className={D.boxForm}>
        <div className={D.bookTitle}>
          <img src={Book} alt="Livro aberto" />
          <h2>Informações do Livro</h2>
        </div>

        <form className={D.formDoados} onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            className="input title"
            onChange={capturaTitle}
            value={title}
            placeholder="Título"
          />
          <input
            type="text"
            className="input category"
            onChange={capturaCategory}
            value={category}
            placeholder="Categoria"
          />
          <input
            type="text"
            className="input author"
            onChange={capturaAuthor}
            value={author}
            placeholder="Autor"
          />
          <input
            type="text"
            className="input upload"
            onChange={capturaImage}
            value={image_url}
            placeholder="Link da Imagem"
          />

          <input type="submit" value="Doar" onClick={enviarDados} />
        </form>
      </article>
    </section>
  );
}
