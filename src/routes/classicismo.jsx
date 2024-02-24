import React from "react";
import Content from "../pages/Content";
import "./css/classicismo.css";

function ClassicismoMov() {
  window.scrollTo(top);
  const scrollToP1 = () => {
    const p1Element = document.getElementById("p1");
    if (p1Element) {
      p1Element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <div className="image-back-cla">
        <h1>Classicismo</h1>
        <button id="go-text" onClick={scrollToP1}>
          &darr;
        </button>
      </div>
      <div id="p1">
        <Content
          epigraph={
            '"Mudam-se os tempos, mudam-se as vontades, (...) Tomando sempre novas qualidades'
          }
          author={"Luís Vaz de Camões, em um de seus poemas líricos"}
          title={"O Renascimento e o Classicismo"}
          p1={
            "A escola renascentista ficou reconhecida por renascer, os conceitos provenientes da antiguidade clássica, como a simetria, " +
            "universalidade etc. Com isso, surgiram duas principais escolas artístico-literárias: o classicismo e o barroco "
          }
          p2={
            "O classicismo busca pelo equilíbrio, pureza e rigor da forma, juntamente com a perfeição e o senso de proporção. " +
            "As obras mais notórias deste período são os sonetos e peças de Shakespeare, os lusíadas de camões, " +
            "Dom quixote de Miguel de Cervantes, as pinturas de Da Vinci, entre outras obras."
          }
        />
      </div>
    </>
  );
}

export default ClassicismoMov;
