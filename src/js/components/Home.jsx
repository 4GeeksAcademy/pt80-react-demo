import { useEffect, useState } from "react";
import Container, { Col, Row } from "./Grid";
import BookCard from "./BookCard";

const Home = ({}) => {
  const [book, setBook] = useState({
    title: null,
    author: null,
    cover: null,
  });

  return (
    <Container>
      <Row>
        <Col>
          <form
            className="mt-3"
            onSubmit={(ev) => {
              ev.preventDefault();
            }}
          >
            <div className="form-floating mb-3">
              <input
                id="title"
                class="form-control form-control-lg"
                type="text"
                aria-label="title"
              />
              <label htmlFor="title">Title</label>
            </div>
            <div className="form-floating mb-3">
              <input
                id="author"
                class="form-control form-control-lg"
                type="text"
                aria-label="author"
              />
              <label htmlFor="author">Author</label>
            </div>
            <div className="form-floating mb-3">
              <input
                id="cover-url"
                class="form-control form-control-lg"
                type="text"
                aria-label="cover-url"
              />
              <label htmlFor="cover-url">Cover URL</label>
            </div>
            <div className="mb-3">
              <button className="btn btn-primary">Add Book</button>
            </div>
          </form>
        </Col>
        <Col>
          <div className="mt-3">
            <BookCard book={book} />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
