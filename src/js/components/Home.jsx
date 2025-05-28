import { useEffect, useState } from "react";
import Container, { Col, Row } from "./Grid";
import BookCard from "./BookCard";

const Home = ({}) => {
  // This is a container for book objects:
  const [books, setBooks] = useState([]);

  // This is temporary storage for the book properties:
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [cover, setCover] = useState("");

  /**
   * This useEffect stores and retrieves book objects
   * in localStorage so that the application remembers
   * stuff when you reload the page.
   */
  useEffect(() => {
    const library = localStorage.getItem("library");

    if (!library) {
      localStorage.setItem("library", "[]");
    }

    if (JSON.parse(library)?.length) {
      setBooks(JSON.parse(library));
    }
  }, []);

  useEffect(() => {
    if (books.length) {
      localStorage.setItem("library", JSON.stringify(books));
    }
  }, [books]);

  const handleSubmit = (ev) => {
    ev.preventDefault();
    if ([title, author, cover].some((x) => x)) {
      setBooks([
        ...books,
        {
          title,
          author,
          cover,
        },
      ]);
      setTitle("");
      setAuthor("");
      setCover("");
    }
  };

  const enableButton = () => [title, author, cover].some((x) => x);

  const deleteBook = (idx) => {
    localStorage.setItem("library", JSON.stringify(books.toSpliced(idx, 1)));
    setBooks(books.toSpliced(idx, 1));
  };

  return (
    <Container>
      <Row>
        <Col>
          <form className="mt-3" onSubmit={handleSubmit}>
            <div className="form-floating mb-3">
              {/* This is a controlled input: */}
              <input
                id="title"
                name="title"
                class="form-control form-control-lg"
                type="text"
                aria-label="title"
                value={title}
                onChange={(ev) => setTitle(ev.target.value)}
              />
              {/*
                Controlled inputs are great when you want immediate input
                into the application, but they can get a bit unwieldy if you
                have a lot of inputs that use them.
              */}
              <label htmlFor="title">Title</label>
            </div>
            <div className="form-floating mb-3">
              <input
                id="author"
                name="author"
                class="form-control form-control-lg"
                type="text"
                aria-label="author"
                value={author}
                onChange={(ev) => setAuthor(ev.target.value)}
              />
              <label htmlFor="author">Author</label>
            </div>
            <div className="form-floating mb-3">
              <input
                id="cover"
                name="cover"
                class="form-control form-control-lg"
                type="text"
                aria-label="cover"
                value={cover}
                onChange={(ev) => setCover(ev.target.value)}
              />
              <label htmlFor="cover">Cover URL</label>
            </div>
            <div className="mb-3">
              <button className="btn btn-primary" disabled={!enableButton()}>
                Add Book
              </button>
            </div>
          </form>
        </Col>
        <Col>
          <div className="mt-3">
            <BookCard
              book={{
                title,
                author,
                cover,
              }}
            />
          </div>
        </Col>
      </Row>
      <hr />
      <Row>
        <Col>
          {books.map((book, idx) => (
            <BookCard
              book={book}
              showDelete
              onDelete={() => deleteBook(idx)}
              key={idx}
            />
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
