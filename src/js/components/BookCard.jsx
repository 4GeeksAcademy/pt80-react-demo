import rigoBaby from "../../img/rigo-baby.jpg";
import "./BookCard.css";

const BookCard = ({ book }) => {
  return (
    <div className="card mx-auto mb-2" style={{}}>
      <img
        src={book?.cover ? book.cover : rigoBaby}
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">
          {book?.title ? book.title : "Some Coding Book Or Something"}
        </h5>
        <p className="card-text">
          By{" "}
          {book?.author
            ? book.author
            : "Some Nerd (in the cool sense, because we know nerds are cool.)"}
        </p>
      </div>
    </div>
  );
};

export default BookCard;
