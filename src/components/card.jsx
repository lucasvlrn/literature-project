import { Link } from "react-router-dom";
import "./card.css";
function Card({ image, title, subtitle, link }) {
  return (
    <Link to={link}>
      <div className="card">
        <div className="img">
          <img className="img" src={image} />
        </div>
        <div className="text">
          <h3>{title}</h3>
          <p>{subtitle}</p>
        </div>
      </div>
    </Link>
  );
}

export default Card;
