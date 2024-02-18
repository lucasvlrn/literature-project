import "../App.css";
import Arcadismo from "../assets/Arcadismo.png";
import Classicismo from "../assets/classicismo.png";
import Dante from "../assets/dante.png";
import Caravaggio from "../assets/davi.png";
import Romantismo from "../assets/romantismo.png";
import Vassalagem from "../assets/vassalagem.png";
import CardClassic from "../components/CardClassic.jsx";
import Card from "../components/card.jsx";
import "./Home.css";

function Home() {
  return (
    <>
      <div className="container"></div>
      <div className="container-content">
        <div className="content">
          <div className="content-left">
            <CardClassic
              title={"Antiguidade Clássica"}
              subtitle={"O Início de tudo"}
              link="antiguidade-classica"
            />
          </div>
          <div className="content-right">
            <div className="container-right-top">
              <Card
                title={"Trovadorismo"}
                subtitle={"Período Medieval"}
                image={Vassalagem}
                link="/trovadorismo"
              />
              <Card
                title={"Humanismo"}
                subtitle={"Transição para a renascença"}
                image={Dante}
                link="/humanismo"
              />
              <Card
                title={"Classicismo"}
                subtitle={"O retorno aos clássicos"}
                image={Classicismo}
                link="/classicismo"
              />
            </div>
            <div className="container-right-bottom">
              <Card
                title={"Barroco"}
                subtitle={"Contraste ao classicismo"}
                image={Caravaggio}
                link="/barroco"
              />
              <Card
                title={"Arcadismo"}
                subtitle={"Bucolismo e a mitologia"}
                image={Arcadismo}
                link="/arcadismo"
              />

              <Card
                title={"Romantismo"}
                subtitle={"Idealizações e a subjetividade"}
                image={Romantismo}
                link="/romantismo"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
