import React from "react";
import Content from "../pages/Content";
import "./css/humanismo.css";

function HumanismoMov() {
  const scrollToP1 = () => {
    const p1Element = document.getElementById("p1");
    if (p1Element) {
      p1Element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <div className="image-back-hum">
        <h1>Humanismo</h1>
        <button id="go-text" onClick={scrollToP1}>
          &darr;
        </button>
      </div>
      <div id="p1">
        <Content
          epigraph={
            '"As riquezas pintam o homem, e com as suas cores cobrem e escondem ' +
            'não apenas os defeitos do corpo, mas também os da alma." '
          }
          author={'Giovanni Boccaccio em "O Decamerão" '}
          title={"Humanismo"}
          p1={
            "O humanismo foi um movimento que marcou o modo de pensar do ser humano, que a partir daí, começaram a se importar com coisas diferentes além do teocentrismo. " +
            "Como o foco era o valor do ser humano, ele teve destaque com as produções artísticas em massa, como fundamento a valorização do ser humano."
          }
          p2={
            "Sendo a marca temporal e artística da transição do período medieval para o renascimento, o Humanismo exaltou a valorização antropológica em detrimento da teológica. " +
            "Neste período, surgiu a teoria heliocêntrica, o que contribuiu para uma maior valorização do ser humano durante o movimento"
          }
        />
      </div>
    </>
  );
}

export default HumanismoMov;
