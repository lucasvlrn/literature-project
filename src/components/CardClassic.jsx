import { Link } from "react-router-dom";
import "./CardClassic.css";

function CardClassic({ title, subtitle, link }) {
  return (
    <Link to={link}>
      <div className="cardz">
        <div className="image"></div>
        <div className="text-content">
          <h3>{title}</h3>
          <p>{subtitle}</p>
        </div>
      </div>
    </Link>
  );
}

export default CardClassic;
