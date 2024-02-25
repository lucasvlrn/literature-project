import "../components/Images.css";
function Images({ imagens }) {
  return (
    <div className="card-images">
      <img id="carrossel" src={imagens} alt="" />
    </div>
  );
}
export default Images;
