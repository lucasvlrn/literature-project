import React from "react";
import "./Content.css";

function Content({ title, epigraph, author, p1, p2, p3 }) {
  return (
    <div className="content-info">
      <div className="texts">
        <div className="epigraph">
          <p> {epigraph} </p>
          <h5>{author}</h5>
        </div>
        <div className="line"></div>
        <div className="text-content-info">
          <h1>{title}</h1>
          <p>{p1}</p>
          <p>{p2}</p>
          <p>{p3}</p>
        </div>
      </div>
    </div>
  );
}

export default Content;
