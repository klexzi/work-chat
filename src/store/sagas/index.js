import { takeLatest, all } from "redux-saga/effects";
import * as actionTypes from "../actions/action-types";

import { login } from "./auth";
import { createOrganization, joinOrganization } from "./signup";
import { verifyAccount } from "./verify-account";
import { resendCode } from "./resend-code";
import { verifyCode } from "./verify-code";
import { resetPassword } from "./reset-password";

function* watchAuth() {
  yield takeLatest(actionTypes.INIT_LOGIN, login);
  yield takeLatest(actionTypes.INIT_CREATE_ORGANIZATION, createOrganization);
  yield takeLatest(actionTypes.INIT_JOIN_ORGANIZATION, joinOrganization);
}

function* watchVerification() {
  yield takeLatest(actionTypes.INIT_VERIFY_ACCOUNT, verifyAccount);
  yield takeLatest(actionTypes.INIT_VERIFY_CODE, verifyCode);
}

function* watchResendCode() {
  yield takeLatest(actionTypes.INIT_RESEND_CODE, resendCode);
}

function* watchResetPassword() {
  yield takeLatest(actionTypes.INIT_RESET_PASSWORD, resetPassword);
}

export function* rootSaga() {
  yield all([
    watchAuth(),
    watchVerification(),
    watchResendCode(),
    watchResetPassword()
  ]);
}
