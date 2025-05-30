import rigoBaby from "../../img/rigo-baby.jpg";
import "./BookCard.css";

const BookCard = ({
  book,
  showButtons = false,
  haveRead = false,
  onDelete,
  toggleRead,
}) => {
  return (
    <div className="card mx-auto mb-2" style={{}}>
      <img
        src={book?.cover ? book.cover : rigoBaby}
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        {haveRead ? <span className="card-title read-label">READ!</span> : ""}
        <h5 className="card-title">
          {book?.title ? book.title : "Some Coding Book Or Something"}
        </h5>
        <p className="card-text">
          By{" "}
          {book?.author
            ? book.author
            : "Some Nerd (in the cool sense, because we know nerds are cool.)"}
        </p>
        {showButtons ? (
          <p className="card-text">
            <button className="btn btn-danger" onClick={onDelete}>
              <i class="fa-solid fa-dumpster-fire"></i>
            </button>
            <button className="btn btn-success ms-2" onClick={toggleRead}>
              <i class="fa-solid fa-book-skull"></i>
            </button>
          </p>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default BookCard;
