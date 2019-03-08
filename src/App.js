import React, { Component } from "react";
import { Route } from "react-router-dom";

import AsyncImport from "./hoc/AsyncImport/AsyncImport";
const AsyncHome = AsyncImport(() => import("./containers/Home/Home"));
const AsyncLogin = AsyncImport(() => import("./containers/Login/Login"));
const AsyncSignup = AsyncImport(() => import("./containers/Signup/Signup"));
const AsyncForgotPassword = AsyncImport(() =>
  import("./containers/ForgotPassword/ForgotPassword")
);
const AsyncResetCode = AsyncImport(() =>
  import("./containers/ResetCode/ResetCode")
);
const AsyncVerifyAccount = AsyncImport(() =>
  import("./containers/VerifyAccount/VerifyAccount")
);
const AsyncResetPassword = AsyncImport(() =>
  import("./containers/ResetPassword/ResetPassword")
);
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Route path="/" exact component={AsyncHome} />
        <Route path="/login" component={AsyncLogin} />
        <Route path="/signup" component={AsyncSignup} />
        <Route path="/forgot-password" component={AsyncForgotPassword} />
        <Route path="/reset-code" component={AsyncResetCode} />
        <Route path="/verify-account" component={AsyncVerifyAccount} />
        <Route path="/reset-password" component={AsyncResetPassword} />
      </React.Fragment>
    );
  }
}

export default App;
