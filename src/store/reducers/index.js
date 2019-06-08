import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import authReducer from "./auth";
import { verifyAccountReducer } from "./verify-account";
import { resendCodeReducer } from "./resend-code";
import { verifyCodeReducer } from "./verify-code";
import { resetPasswordReducer } from "./reset-password";

const rootReducer = combineReducers({
  form: formReducer,
  auth: authReducer,
  verifyAccount: verifyAccountReducer,
  resendCode: resendCodeReducer,
  verifyCode: verifyCodeReducer,
  resetPassword: resetPasswordReducer
});

export { rootReducer as default };
