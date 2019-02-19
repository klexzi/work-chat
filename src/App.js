import React, { Component } from "react";
import { Route } from "react-router-dom";

import AsyncImport from "./hoc/AsyncImport/AsyncImport";
// import Home from "./containers/Home/Home";
const AsyncHome = AsyncImport(() => import("./containers/Home/Home"));
class App extends Component {
  render() {
    return <AsyncHome />;
  }
}

export default App;
