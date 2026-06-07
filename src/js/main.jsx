import React from "react";
import ReactDOM from "react-dom/client";


import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";


import "../styles/index.css";


import SecondsCounter from "./components/secondsCounter.jsx";

let counter = 0;

const root = ReactDOM.createRoot(document.getElementById("root"));

setInterval(() => {
  counter++;
  root.render(
    <React.StrictMode>
      <SecondsCounter seconds={counter} />
    </React.StrictMode>
  );
}, 1000);

