import { chatApi } from "./config";

let fetch = chatApi();

export const validateUserEmail = async email => {
  let response = await fetch.post("", {
    query: `
      mutation {
         validateUserEmail(email: "${email}") {
           valid
           message
         }
       }
      `
  });
  return {
    valid: response.data.data.validateUserEmail.valid,
    message: response.data.data.validateUserEmail.message
  };
};

export const verifyInvitation = async (email, organizationEmail) => {
  let response = await fetch.post("", {
    query: `
    mutation {
      verifyInvitation(email: "${email}" organization: "${organizationEmail}") {
        valid
        message
      }
    }
    `
  });
  return {
    valid: response.data.data.verifyInvitation.valid,
    message: response.data.data.verifyInvitation.message
  };
};
