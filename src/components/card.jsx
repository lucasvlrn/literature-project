import { Link } from "react-router-dom";
import "./card.css";
function Card({ title, subtitle, link }) {
  return (
    <div className="card-content">
      <h3 id="tt">{title}</h3>
      <h5 id="sub">{subtitle}</h5>
      <Link className="link" to={link}>
        Saiba Mais
      </Link>
    </div>
  );
}
export default Card;
