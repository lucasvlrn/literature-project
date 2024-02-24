import React from "react";
import Content from "../pages/Content";
import "./css/romantismo.css";

function RomantismoMov() {
  window.scrollTo(top);
  const scrollToP1 = () => {
    const p1Element = document.getElementById("p1");
    if (p1Element) {
      p1Element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="image-back-rom">
        <h1>Romantismo</h1>
        <button id="go-text" onClick={scrollToP1}>
          &darr;
        </button>
      </div>
      <div id="p1">
        <Content
          epigraph={
            '"Aquele que tem sentimentos sofre reconhecendo o seu erro. É seu castigo, independentemente da prisão."'
          }
          author={'Dostoiévski em "Crime e Castigo"'}
          title={"Romantismo"}
          p1={
            "O romantismo é um estilo de época. Apesar de ter surgido na Alemanha, o fato histórico que motivou o aparecimento desse movimento artístico foi a Revolução Francesa " +
            " um acontecimento importante para toda a Europa. Ele é caracterizado pelo subjetivismo, excesso sentimental, idealização e fuga da realidade. "
          }
          p2={
            "As obras mais conhecidas são A moreninha de Joaquim Manuel de Macedo, O guarani de José de Alencar, Orgulho e Preconceito de Jane Austen, " +
            "Frankenstein de Mary Shelley, Oliver Twist de Charles Dickens e Crime e Castigo de Dostoievski"
          }
        />
      </div>
    </>
  );
}

export default RomantismoMov;
