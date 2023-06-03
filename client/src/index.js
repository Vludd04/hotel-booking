import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./app/App";
import { createStore } from "./app/store/createStore";
import { Provider } from "react-redux";
import CustomRouter from "./app/utils/customRouter";
import history from "./app/utils/history";

export const store = createStore();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <CustomRouter history={history}>
        <App />
      </CustomRouter>
    </Provider>
  </React.StrictMode>
);
