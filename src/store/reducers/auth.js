import * as actionTypes from "../actions/action-types";

const initState = {
  token: "",
  userId: "",
  error: false,
  authenticated: false,
  processing: false,
  isVerified: null,
  message: "not authenticated"
};
const authReducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.LOGIN_START || actionTypes.SIGNUP_START:
      return {
        ...state,
        processing: true
      };
    case actionTypes.AUTH_SUCCESS:
      return {
        ...state,
        token: action.payload.token,
        userId: action.payload.userId,
        isVerified: action.payload.isVerified,
        message: "logged in successfully",
        authenticated: true,
        processing: false,
        error: false
      };
    case actionTypes.AUTH_FAILED:
      return {
        ...state,
        message: action.payload.message,
        processing: false,
        error: true
      };
    case actionTypes.CLEAR_AUTH_MESSAGE:
      return {
        ...state,
        error: false,
        processing: false
      };
    default:
      return state;
  }
};
export { authReducer as default };
