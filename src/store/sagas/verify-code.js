import { put, call, delay } from "redux-saga/effects";

import * as api from "../api/verify-code";
import {
  verifyCodeStart,
  verifyCodeSuccess,
  verifyCodeFailed,
  clearVerifyCodeMessage
} from "../actions";

export function* verifyCode({ payload }) {
  yield put(verifyCodeStart());
  try {
    let result = yield call(api.verifyCode, payload.code, payload.email);
    if (result.error) {
      throw new Error(result.message);
    }
    if (result.data === false) {
      throw new Error("invalid verification code");
    }
    yield put(
      verifyCodeSuccess({
        codeVerified: result.data,
        code: payload.code,
        message: "verified"
      })
    );
  } catch (error) {
    yield put(verifyCodeFailed({ message: error.message }));
    yield delay(10000);
    yield put(clearVerifyCodeMessage());
  }
}
