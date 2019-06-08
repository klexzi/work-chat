import { chatApi } from "./config";

export const verifyAccount = async (code, token) => {
  try {
    let fetch = chatApi(token);
    let response = await fetch.post("", {
      query: `
      mutation {
         verifyAccount(code: ${+code})
       }
      `
    });
    return {
      error: null,
      message: null,
      data: response.data.data.verifyAccount
    };
  } catch (err) {
    return { error: true, message: err.response.data.errors[0].message };
  }
};
