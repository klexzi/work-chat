import {
  SIGNUP_START,
  INIT_CREATE_ORGANIZATION,
  INIT_JOIN_ORGANIZATION
} from "./action-types";

export const initCreateOrganization = payload => ({
  type: INIT_CREATE_ORGANIZATION,
  payload
});
export const initJoinOrganization = payload => ({
  type: INIT_JOIN_ORGANIZATION,
  payload
});
export const signupStart = () => ({
  type: SIGNUP_START
});
