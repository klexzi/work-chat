import { chatApi } from "./config";

export const resendCode = async (type, token = null, email = null) => {
  try {
    let fetch = chatApi(token ? token : null);
    let emailWrite = "";
    if (email) emailWrite = `, email: "${email}"`;
    let response = await fetch.post("", {
      query: `
       mutation {
         resendCode(type: ${type}${emailWrite}) 
       }
       `
    });
    return {
      error: null,
      message: null,
      data: response.data.data.resendCode
    };
  } catch (error) {
    let errorMessage =
      "there is an internal server error, our team as been contacted";
    if (error.response) {
      errorMessage = error.response.data.errors[0].message;
    }
    return { error: true, message: errorMessage };
  }
};
