import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import{ BrowserRouter} from "react-router-dom"
import Memo2 from "./Memo2";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
  <Memo2/>
    {/* <App /> */}
  </BrowserRouter>
  // <React.StrictMode>
  // </React.StrictMode>
);
