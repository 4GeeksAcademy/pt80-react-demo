import rigoBaby from "../../img/rigo-baby.jpg";

const Card = () => {
  return (
    <div class="card mt-2 mb-2 mx-auto" style={{ width: "100%" }}>
      <img src={rigoBaby} class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card’s content.
        </p>
        <a href="#" class="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
};

export default Card;
