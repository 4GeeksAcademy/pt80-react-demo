import { useEffect, useState } from "react";
import Container, { Col, Row } from "./Grid";
import BookCard from "./BookCard";

const Home = ({}) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [cover, setCover] = useState("");

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
              <button className="btn btn-primary">Add Book</button>
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
    </Container>
  );
};

export default Home;
