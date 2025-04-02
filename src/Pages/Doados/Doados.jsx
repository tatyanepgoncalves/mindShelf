import { useState, useEffect } from "react";
import axios from "axios";
import Do from "./Doados.module.scss";


export default function Doados() {
  const [livros, setLivros] = useState([]);

  const getLivros = async () => {
    const response =  await axios.get("https://api-library-wgk2.onrender.com/list-livros")

    setLivros(response.data)
    console.log(response.data)
  }

  useEffect(() => {
    getLivros()
  }, [])

  return (
    <section className={Do.livrosDoados}>
      <h2>Livros Doados</h2>

      
      <div className={Do.List}>

        {livros.map((item) => {
          return (
            <article key={item.id}>
              <img src={item.image_url} alt={item.title} />

              <div className={Do.info}>
                <h3>{item.title}</h3>
                <span>{item.category}</span>
                <p>{item.author}</p>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  );
}
