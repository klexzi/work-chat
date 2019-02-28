import React, { Component } from "react";
import { Route } from "react-router-dom";

import AsyncImport from "./hoc/AsyncImport/AsyncImport";
const AsyncHome = AsyncImport(() => import("./containers/Home/Home"));
const AsyncLogin = AsyncImport(() => import("./containers/Login/Login"));
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Route path="/" exact component={AsyncHome} />
        <Route path="/login" component={AsyncLogin} />
        <Route path="/signup" component={AsyncLogin} />
        <Route path="/forgot-password" component={AsyncLogin} />
      </React.Fragment>
    );
  }
}

export default App;
