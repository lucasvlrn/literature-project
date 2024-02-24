import React from "react";
import Content from "../pages/Content";
import "./css/arcadismo.css";

function ArcadismoMov() {
  window.scrollTo(top);
  const scrollToP1 = () => {
    const p1Element = document.getElementById("p1");
    if (p1Element) {
      p1Element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <div className="image-back-arc">
        <h1>Arcadismo</h1>
        <button id="go-text" onClick={scrollToP1}>
          &darr;
        </button>
      </div>
      <div id="p1">
        <Content
          epigraph={'"Fugure urbem"'}
          author={
            "Expressão em latim que condiz com o ideal de valorizar o campo em vez das   cidades"
          }
          title={"Arcadismo"}
          p1={
            "A escola arcádia surgiu com a influencia do iluminismo e do avanço industrial europeu.  " +
            "Sendo um dos principais movimentos artístico-literarios do século XVIII, o arcadismo buscava o resgate a mitologia antiga e a exaltação da natureza, " +
            "a partir de um conceito amplamente falado no contexto deste movimento: o buscolismo. "
          }
          p2={
            "Neste período, era comum o uso de pseudônimos para esconder as críticas feitas nas obras, algo comumente feito. " +
            "Algumas obras deste período como a Vila Rica de Cláudio Manuel da Costa (Glauceste Satúrnio) e Cartas Chilenas de Tomás Antônio Gonzaga (Dirceu)."
          }
        />
      </div>
    </>
  );
}

export default ArcadismoMov;
