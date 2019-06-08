import { put, call, delay } from "redux-saga/effects";

import {
  authSuccess,
  loginStart,
  authFailed,
  clearAuthMessage
} from "../actions";
import * as api from "../api/authenticate";

export function* login({ payload }) {
  yield put(loginStart());
  try {
    console.log(payload);
    const result = yield call(
      api.authenticate,
      payload.email,
      payload.password
    );
    if (result.error) {
      throw new Error(result.message);
    }
    yield localStorage.setItem("token", result.data.token);
    yield localStorage.setItem("userId", result.data.userId);
    yield put(
      authSuccess({
        token: result.data.token,
        userId: result.data.userId,
        isVerified: result.data.isVerified
      })
    );
  } catch (error) {
    yield put(authFailed({ message: error.message }));
    yield delay(10000);
    yield put(clearAuthMessage());
  }
}
