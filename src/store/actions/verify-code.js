import * as actionTypes from "./action-types";

export const initVerifyCode = payload => ({
  type: actionTypes.INIT_VERIFY_CODE,
  payload
});

export const verifyCodeStart = () => ({
  type: actionTypes.VERIFY_CODE_START
});

export const verifyCodeSuccess = payload => ({
  type: actionTypes.VERIFY_CODE_SUCCESS,
  payload
});

export const verifyCodeFailed = payload => ({
  type: actionTypes.VERIFY_CODE_FAILED,
  payload
});

export const clearVerifyCodeMessage = () => ({
  type: actionTypes.CLEAR_VERIFY_CODE_MESSAGE
});
