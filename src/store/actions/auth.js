import * as actionTypes from "./action-types";

export const initLogin = action => {
  return { type: actionTypes.INIT_LOGIN, payload: action };
};

export const loginStart = () => ({
  type: actionTypes.LOGIN_START
});
export const authSuccess = payload => ({
  type: actionTypes.AUTH_SUCCESS,
  payload
});

export const authFailed = payload => ({
  type: actionTypes.AUTH_FAILED,
  payload
});

export const clearAuthMessage = () => ({
  type: actionTypes.CLEAR_AUTH_MESSAGE
});
