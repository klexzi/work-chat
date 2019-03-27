import React, { Component } from "react";
import { Route } from "react-router-dom";

import AsyncImport from "./hoc/AsyncImport/AsyncImport";
const AsyncLanding = AsyncImport(() => import("./pages/Landing/Landing"));
const AsyncLogin = AsyncImport(() => import("./pages/Login/Login"));
const AsyncSignup = AsyncImport(() => import("./pages/Signup/Signup"));
const AsyncForgotPassword = AsyncImport(() =>
  import("./pages/ForgotPassword/ForgotPassword")
);
const AsyncResetCode = AsyncImport(() => import("./pages/ResetCode/ResetCode"));
const AsyncVerifyAccount = AsyncImport(() =>
  import("./pages/VerifyAccount/VerifyAccount")
);
const AsyncResetPassword = AsyncImport(() =>
  import("./pages/ResetPassword/ResetPassword")
);
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Route path="/" exact component={AsyncLanding} />
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
