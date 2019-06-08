import { chatApi } from "./config";

export const verifyCode = async (code, email) => {
  try {
    let fetch = chatApi();
    let response = await fetch.post("", {
      query: `
      mutation {
         verifyCode(code: ${+code}, email: "${email}")
       }
      `
    });
    return {
      error: null,
      message: null,
      data: response.data.data.verifyCode
    };
  } catch (err) {
    return { error: true, message: err.response.data.errors[0].message };
  }
};
