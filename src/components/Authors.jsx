import "./Authors.css";
function Authors({ image, name, biograph }) {
  return (
    <div className="card-authors">
      <img id="imgs" src={image} alt="" />
      <h1 id="names">{name}</h1>
      <h2 id="bio">{biograph}</h2>
    </div>
  );
}
export default Authors;
