import { chatApi } from "./config";

const authenticate = async (email, password) => {
  try {
    let fetch = chatApi();

    let response = await fetch.post("", {
      query: `
      mutation {
      login(email: "${email}", password: "${password}") {
      userId
      token
      isVerified
  }
}`
    });
    return { error: null, message: null, data: response.data.data.login };
  } catch (error) {
    let errorMessage =
      "there is an internal server error, our team as been contacted";
    if (error.response) {
      errorMessage = error.response.data.errors[0].message;
    }
    return {
      error: true,
      message: errorMessage
    };
  }
};

export { authenticate };
