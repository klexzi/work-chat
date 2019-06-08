import * as actionTypes from "./action-types";

export const initResendCode = payload => ({
  type: actionTypes.INIT_RESEND_CODE,
  payload
});

export const resendCodeStart = () => ({
  type: actionTypes.RESEND_CODE_START
});

export const resendCodeSuccess = payload => ({
  type: actionTypes.RESEND_CODE_SUCCESS,
  payload
});

export const resendCodeFailed = payload => ({
  type: actionTypes.RESEND_CODE_FAILED,
  payload
});

export const clearResendCodeMessage = () => ({
  type: actionTypes.CLEAR_RESEND_CODE_MESSAGE
});
