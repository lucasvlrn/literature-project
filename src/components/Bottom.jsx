import Padre from "../assets/antonio.jpg";
import One from "../assets/carrosel1.png";
import Two from "../assets/carrossel2.png";
import Three from "../assets/carrossel3.png";
import Four from "../assets/carrossel4.png";
import Dante from "../assets/dante.png";
import Jose from "../assets/jose.png";
import "../components/Authors";
import Authors from "../components/Authors";
import "../components/Bottom.css";
import Images from "../components/Images";

function Bottom() {
  return (
    <div className="container-bottom">
      <h1 id="title-authors">Principais Autores</h1>
      <div className="row-authors">
        <Authors
          image={Dante}
          name={"Dante Alighieri"}
          biograph={
            "Dante Alighieri (1265-1321) foi o maior poeta italiano da literatura medieval. Autor do poema épico “A Divina Comédia” na qual relata sua viagem imaginária ao inferno, purgatório e paraíso encontrando mortos ilustres do passado ou de sua época, discutindo fé e razão, religião e ciência, amor e paixões."
          }
        />
        <Authors
          image={Jose}
          name={"José de Alencar"}
          biograph={
            "José de Alencar (1829-1877) foi um romancista, dramaturgo, jornalista, advogado e político brasileiro. Foi um dos maiores representantes da corrente literária indianista e o principal romancista brasileiro da fase romântica. Entre seus romances destacam-se Iracema e Senhora. O Guarani "
          }
        />
        <Authors
          image={Padre}
          name={"Pe. Antônio Vieira"}
          biograph={
            "Padre Antônio Vieira (1608-1697) foi um religioso, escritor e orador português, a principal expressão do Barroco Literário da língua portuguesa. Escreveu cerca de 200 sermões, nos quais revela conhecimento político, social e religioso.Padre Antônio Vieira nasceu em Lisboa,no dia 6 de fevereiro de 1608."
          }
        />
      </div>
      <div className="row-images">
        <Images imagens={Four} />
        <Images imagens={Three} />
        <Images imagens={Two} />
        <Images imagens={One} />
      </div>
    </div>
  );
}
export default Bottom;
