import { put, call, delay } from "redux-saga/effects";

import * as api from "../api/resend-code";
import {
  resendCodeSuccess,
  resendCodeFailed,
  clearResendCodeMessage,
  resendCodeStart
} from "../actions/";

export function* resendCode({ payload }) {
  try {
    yield put(resendCodeStart());
    let result = yield call(
      api.resendCode,
      payload.type,
      payload.token,
      payload.email ? payload.email : null
    );
    if (result.error) {
      throw new Error(result.message);
    }
    if (result.data === false) {
      throw new Error("there was an error sending the code");
    }
    yield put(
      resendCodeSuccess({
        message: "code sent"
      })
    );
    yield delay(10000);
    yield put(clearResendCodeMessage());
  } catch (error) {
    yield put(
      resendCodeFailed({
        message: error.message
      })
    );
    yield delay(10000);
    yield put(clearResendCodeMessage());
  }
}
