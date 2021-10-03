import React, { Fragment } from "react";
import "./App.css";

//components

import InputForm from "./components/InputForm";
import Header from "./components/Header";

function App() {
  return (
    <Fragment>
      <div className="container">
        <Header />
        <InputForm />
      </div>
    </Fragment>
  );
}

export default App;
