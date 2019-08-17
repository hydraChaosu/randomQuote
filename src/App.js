import React, { useEffect, useState } from "react";
import { Button, Jumbotron, Container } from "react-bootstrap";
// import { Button } from "reactstrap";
import "./App.css";
import axios from "axios";

function App() {
  const [text, setText] = useState("Example text");
  const [author, setAuthor] = useState("Example author");
  useEffect(() => {
    getNewQuote();
  }, []);

  const getNewQuote = () => {
    axios.get("https://api.quotable.io/random").then(res => {
      setText(res.data.content);
      setAuthor(res.data.author);
    });
  };

  const tweetQuote = () => {
    window.open(
      `http://twitter.com/intent/tweet?text="${text}" ${author}`,
      "_blank"
    );
  };

  return (
    <div className="wrapper" id="quote-box">
      <Jumbotron className="d-flex flex-column justify-content-between">
        <div className="text-wrapper">
          <p id="text" className="lead">
            "{text}"
          </p>
          <p id="author" className="text-right">
            {author}
          </p>
        </div>
        <div className="btn-wrapper">
          <a
            className="btn btn-success"
            id="tweet-quote"
            // rel="noopener noreferrer"
            onClick={() => tweetQuote()}
            // href={`http://twitter.com/intent/tweet?text="${text}" ${author}`}
          >
            Tweet Quote
          </a>
          <Button id="new-quote" onClick={getNewQuote}>
            New Quote
          </Button>
        </div>
      </Jumbotron>
    </div>
  );
}

export default App;
