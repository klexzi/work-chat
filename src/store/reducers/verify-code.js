import * as actionTypes from "../actions/action-types";

const initState = {
  processing: false,
  codeVerified: null,
  code: null,
  message: "",
  error: false
};

export const verifyCodeReducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.VERIFY_CODE_START:
      return {
        ...state,
        processing: true
      };
    case actionTypes.VERIFY_CODE_SUCCESS:
      return {
        ...state,
        processing: false,
        codeVerified: action.payload.codeVerified,
        code: action.payload.code,
        message: action.payload.message
      };
    case actionTypes.VERIFY_CODE_FAILED:
      return {
        ...state,
        processing: false,
        codeVerified: false,
        message: action.payload.message,
        error: true
      };
    case actionTypes.CLEAR_VERIFY_CODE_MESSAGE:
      return {
        ...state,
        error: false,
        processing: false,
        message: ""
      };
    default:
      return state;
  }
};
