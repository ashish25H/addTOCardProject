import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Card from "./Components/Card";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import {store} from './Store/Store';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
 
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/Card" element={<Card />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
