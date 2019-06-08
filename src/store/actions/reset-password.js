import * as actionTypes from "./action-types";

export const initResetPassword = payload => ({
  type: actionTypes.INIT_RESET_PASSWORD,
  payload
});

export const resetPasswordStart = payload => ({
  type: actionTypes.RESET_PASSWORD_START
});

export const resetPasswordSuccess = payload => ({
  type: actionTypes.RESET_PASSWORD_SUCCESS,
  payload
});

export const resetPasswordFailed = payload => ({
  type: actionTypes.RESET_PASSWORD_FAILED,
  payload
});
