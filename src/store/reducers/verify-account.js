import * as actionTypes from "../actions/action-types";

const initState = {
  processing: false,
  accountVerified: null,
  message: "",
  error: false
};

export const verifyAccountReducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.VERIFY_ACCOUNT_START:
      return {
        ...state,
        processing: true
      };
    case actionTypes.VERIFY_ACCOUNT_SUCCESS:
      return {
        ...state,
        processing: false,
        accountVerified: action.payload.accountVerified,
        message: action.payload.message
      };
    case actionTypes.VERIFY_ACCOUNT_FAILED:
      return {
        ...state,
        processing: false,
        message: action.payload.message,
        error: true
      };
    default:
      return state;
  }
};
