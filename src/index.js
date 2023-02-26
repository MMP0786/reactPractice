import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import{ BrowserRouter} from "react-router-dom"
import Memo2 from "./Memo2";
import store from "./Store";
import { Provider } from "react-redux";
import NewApp from "./NewApp";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
<Provider store={store}>
  <NewApp/>

</Provider>
  // <BrowserRouter>
  // <Memo2/>
  //   {/* <App /> */}
  // </BrowserRouter>
  // <React.StrictMode>
  // </React.StrictMode>
);
