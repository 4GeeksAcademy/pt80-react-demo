import { useEffect, useState } from "react";
import Container, { Col, Row } from "./Grid";
import BookCard from "./BookCard";
import EditableText from "./EditableText";

const Home = ({}) => {
  // This is a container for book objects:
  const [books, setBooks] = useState([]);

  // This is temporary storage for the book properties:
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [cover, setCover] = useState("");

  const [test, setTest] = useState("Hello world!");

  async function whatever() {
    // this is how you make an async function
    // with the function keyword
  }

  const loadData = async () => {
    // This is how you make an async function
    // with anonymous functions

    const resp = await fetch("https://library.dotlag.space/library");
    const data = await resp.json();
    setBooks(data.books);
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    if ([title, author, cover].some((x) => x)) {
      const resp = await fetch("https://library.dotlag.space/library/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: title,
          author: author,
          cover: cover,
        }),
      });
      const data = await resp.json();
      setBooks([...books, data]);

      setTitle("");
      setAuthor("");
      setCover("");
    }
  };

  const enableButton = () => [title, author, cover].some((x) => x);

  const deleteBook = async (book_id) => {
    const resp = await fetch(
      `https://library.dotlag.space/library/${book_id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (resp.ok) {
      loadData();
    }
  };

  return (
    <Container>
      <Row>
        <Col>
          <h2>
            <EditableText text={test} onSubmit={(x) => setTest(x)} />
          </h2>
        </Col>
      </Row>
      <Row>
        <Col>
          <form className="mt-3" onSubmit={handleSubmit}>
            <div className="form-floating mb-3">
              {/* This is a controlled input: */}
              <input
                id="title"
                name="title"
                className="form-control form-control-lg"
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
                className="form-control form-control-lg"
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
                className="form-control form-control-lg"
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
        <Col width={{ sm: 8 }} offset={{ sm: 2 }}>
          {books.map((book) => (
            <BookCard
              book={book}
              showButtons
              onDelete={() => deleteBook(book.id)}
              key={book.id}
            />
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
