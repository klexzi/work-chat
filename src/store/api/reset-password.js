import { chatApi } from "./config";

export const resetPassword = async (code, email, password) => {
  let fetch = chatApi();
  try {
    const response = await fetch.post("", {
      query: `
      mutation {
         resetPassword(
           code: ${code}
           email: "${email}"
           password: "${password}"
         )
       }
      `
    });
    return {
      error: null,
      message: null,
      data: response.data.data.resendCode
    };
  } catch (error) {
    return { error: true, message: error.response.data.errors[0].message };
  }
};
