import React from "react";
import Content from "../pages/Content";
import "./css/antiguidade.css";

function AntiguidadeMov() {
  const scrollToP1 = () => {
    const p1Element = document.getElementById("p1");
    if (p1Element) {
      p1Element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <div className="image-back-class">
        <h1>Antiguidade Clássica</h1>
        <button id="go-text" onClick={scrollToP1}>
          &darr;
        </button>
      </div>
      <div id="p1">
        <Content
          epigraph={
            '"Fala-me, Musa, do homem astuto que tanto vagueou, ' +
            'depois que de Troia destruiu a cidadela sagrada."'
          }
          author={'Homero em "A Odisseia", Canto I'}
          title={"A Antiguidade Clássica"}
          p1={
            "A antiguidade clássica, que como o próprio nome sugere deu origem aos clássicos mundiais." +
            " Responsáveis pela implementação de diversas sociedades e culturas com tantos pensamentos emergindo. "
          }
          p2={
            "As obras de Homero foram de suma importância para o início da composição literária fora dos hieróglifos" +
            "escritos em tábuas de argila na Mesopotâmia. Possivelmente sendo o primeiro autor literário reconhecido," +
            " Homero é autor de Ilíada e Odisséia, obras que marcaram a literatura como conhecemos hoje."
          }
        />
      </div>
    </>
  );
}

export default AntiguidadeMov;
