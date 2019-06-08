import * as actionTypes from "./action-types";

export const initVerifyAccount = payload => ({
  type: actionTypes.INIT_VERIFY_ACCOUNT,
  payload
});

export const verifyAccountStart = () => ({
  type: actionTypes.VERIFY_ACCOUNT_START
});

export const verifyAccountSuccess = payload => ({
  type: actionTypes.VERIFY_ACCOUNT_SUCCESS,
  payload
});

export const verifyAccountFailed = payload => ({
  type: actionTypes.VERIFY_ACCOUNT_FAILED,
  payload
});
