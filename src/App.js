import { useState, useEffect } from "react";
import "./style.css";

//https://sujeitoprogramador.com/rn-api/?api=posts
function App() {
  const [nutritions, setNutritions] = useState([]);

  useEffect(() => {
    function loadApi() {
      fetch("https://sujeitoprogramador.com/rn-api/?api=posts")
        .then((r) => r.json())
        .then((json) => {
          console.log(json);
          setNutritions(json);
        });
    }
    loadApi();
  }, []);
  return (
    <div className="contanier">
      <header>
        <strong>React Nutritions {nutritions.length}</strong>
      </header>
      {nutritions.map((item) => {
        return (
          <article key={item.id} className="post">
            <strong className="titulo">{item.titulo}</strong>
            <br />
            <img src={item.capa} className="capa" alt={item.titulo} />
            <p className="subtitulo">{item.subtitulo}</p>
            <h2>Categoria: {item.categoria}</h2>
            <a className="botao">Acessar</a>
            <br />
            <hr />
          </article>
        );
      })}
    </div>
  );
}

export default App;
