import { put, call } from "redux-saga/effects";
import {
  resetPasswordStart,
  resetPasswordFailed,
  resetPasswordSuccess
} from "../actions";
import * as api from "../api/reset-password";

export function* resetPassword({ payload }) {
  yield put(resetPasswordStart());
  try {
    const result = yield call(
      api.resetPassword,
      payload.code,
      payload.email,
      payload.password
    );
    if (result.error) throw new Error(result.message);
    if (result.data === false) throw new Error("unable to reset password");
    yield put(resetPasswordSuccess({ message: "password as been changed" }));
  } catch (error) {
    yield put(
      resetPasswordFailed({
        message: error.message
      })
    );
  }
}
