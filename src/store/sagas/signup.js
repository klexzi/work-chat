import { put, call } from "redux-saga/effects";

import { signupStart, authFailed, authSuccess } from "../actions";
import * as api from "../api/signup";

export function* createOrganization({ payload }) {
  yield put(signupStart());
  try {
    console.log("payload saga", payload);
    let result = yield call(api.createOrganization, payload);
    console.log("res", result);
    if (result.error) {
      throw new Error(result.message);
    }
    yield localStorage.setItem("userId", result.data.userId);
    yield localStorage.setItem("token", result.data.token);
    yield put(
      authSuccess({
        token: result.data.token,
        userId: result.data.userId,
        isVerified: result.data.isVerified
      })
    );
  } catch (error) {
    yield put(authFailed({ message: error.message }));
  }
}

export function* joinOrganization({ payload }) {
  yield put(signupStart());
  try {
    let result = yield call(api.joinOrganization, payload);
    if (result.error) {
      throw new Error(result.message);
    }

    yield localStorage.setItem("userId", result.data.userId);
    yield localStorage.setItem("token", result.data.token);
    yield put(
      authSuccess({
        token: result.data.token,
        userId: result.data.userId,
        isVerified: result.data.isVerified
      })
    );
  } catch (error) {
    yield put(authFailed({ message: error.message }));
  }
}
