import * as actionTypes from "../actions/action-types";

const initState = {
  codeSent: false,
  message: null,
  error: false,
  processing: false
};

export const resendCodeReducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.RESEND_CODE_START:
      return {
        ...state,
        processing: true
      };
    case actionTypes.RESEND_CODE_SUCCESS:
      return {
        ...state,
        codeSent: true,
        message: action.payload.message,
        processing: false
      };
    case actionTypes.RESEND_CODE_FAILED:
      return {
        ...state,
        codeSent: false,
        message: action.payload.message,
        error: true,
        processing: false
      };
    case actionTypes.CLEAR_RESEND_CODE_MESSAGE:
      return {
        ...state,
        error: false,
        message: null,
        codeSent: false,
        processing: false
      };
    default:
      return state;
  }
};
