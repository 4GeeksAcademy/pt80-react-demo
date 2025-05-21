import React from "react";
import ReactDOM from "react-dom/client";

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

// index.css'
import "../styles/index.css";

// components
import Home from "./components/Home";

const root = ReactDOM.createRoot(document.getElementById("root"));

let timeInSeconds = 0;

setInterval(() => {
  timeInSeconds++;

  root.render(
    <React.StrictMode>
      <div>{timeInSeconds.toString().padStart(6, "0")[0]}</div>
      <div>{timeInSeconds.toString().padStart(6, "0")[1]}</div>
      <div>{timeInSeconds.toString().padStart(6, "0")[2]}</div>
      <div>{timeInSeconds.toString().padStart(6, "0")[3]}</div>
      <div>{timeInSeconds.toString().padStart(6, "0")[4]}</div>
      <div>{timeInSeconds.toString().padStart(6, "0")[5]}</div>
      <Home time={new Date()} />
    </React.StrictMode>
  );
}, 1000);
