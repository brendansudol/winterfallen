import React from "react";
import ReactDOM from "react-dom";

import "ace-css/css/ace.min.css";
import "./index.css";

import App from "./App";
import { urlToParams } from "./util";

const { predictions } = urlToParams(window.location.hash);

ReactDOM.render(
  <App initialPredictions={(predictions || "").split("")} />,
  document.getElementById("root")
);
