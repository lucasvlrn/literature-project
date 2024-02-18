import React from "react";
import Content from "../pages/Content";
import "./css/barroco.css";

function BarrocoMov() {
  const scrollToP1 = () => {
    const p1Element = document.getElementById("p1");
    if (p1Element) {
      p1Element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <div className="image-back-bar">
        <h1>Barroco</h1>
        <button id="go-text" onClick={() => scrollToP1()}>
          &darr;
        </button>
      </div>
      <div id="p1">
        <Content
          epigraph={
            '"Que coisa é a conversão da alma, senão um homem dentro em si e ver-se a si mesmo?"'
          }
          author={'Pe. Antônio Vieira em "Sermão da Sexagésima", Parte III'}
          title={"Barroco"}
          p1={
            "O Barroco é um estilo de época caracterizado pelo conflito e culto ao contraste. Ele surgiu no contexto histórico da Reforma Protestante e da Contrarreforma Católica. " +
            " As obras mais conhecidas são os sermões de Pe. Antônio Vieira, as poesias de Gregório de Matos, as obras artísticas de Caravaggio, esculturas de Bernini etc."
          }
          p2={
            "No âmbito artístico, ficou conhecido o Chiaroscuro, contraste entre luz e sombra criado por Caravaggio. " +
            "No lado literário, a escrita conceptista era perceptível nos sermões do Padre Antônio Vieira, enquanto Gregório de Matos era adepto ao cultismo. "
          }
        />
      </div>
    </>
  );
}

export default BarrocoMov;
