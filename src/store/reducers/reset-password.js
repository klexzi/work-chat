import * as actionTypes from "../actions/action-types";

const initState = {
  processing: false,
  resetPassword: null,
  message: null,
  error: false
};

export const resetPasswordReducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.RESET_PASSWORD_START:
      return {
        ...state,
        processing: true
      };
    case actionTypes.RESET_PASSWORD_SUCCESS:
      return {
        ...state,
        processing: false,
        resetPassword: true,
        message: action.payload.message
      };
    case actionTypes.RESET_PASSWORD_FAILED:
      return {
        ...state,
        processing: false,
        resetPassword: false,
        message: action.payload.message,
        error: true
      };
    default:
      return state;
  }
};
