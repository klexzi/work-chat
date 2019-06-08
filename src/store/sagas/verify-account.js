import { put, call } from "redux-saga/effects";

import * as api from "../api/verify-account";
import {
  verifyAccountStart,
  verifyAccountSuccess,
  verifyAccountFailed
} from "../actions";

export function* verifyAccount({ payload }) {
  yield put(verifyAccountStart());
  try {
    let result = yield call(api.verifyAccount, payload.code, payload.token);
    if (result.error) {
      throw new Error(result.message);
    }
    if (result.data === false) {
      throw new Error("invalid verification code");
    }
    yield put(
      verifyAccountSuccess({
        accountVerified: result.data,
        message: "verified"
      })
    );
  } catch (error) {
    yield put(verifyAccountFailed({ message: error.message }));
  }
}
