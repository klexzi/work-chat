import { chatApi } from "./config";
let fetch = chatApi();
// ,
//          phone: "${form.phone}",
//          address: "${form.address}"
export const createOrganization = async form => {
  try {
    let response = await fetch.post("", {
      query: `
      mutation {
      createOrganizationAccount(data: {
         name: "${form.name}", 
         email: "${form.email}",
         password:"${form.password}", 
         organizationName:"${form.organizationName}",
         organizationEmail: "${form.organizationEmail}"
       }) {
      userId
      token
      isVerified
  }
}`
    });
    return {
      error: null,
      message: null,
      data: response.data.data.createOrganizationAccount
    };
  } catch (err) {
    return { error: true, message: err.response.data.errors[0].message };
  }
};

export const joinOrganization = async form => {
  try {
    let includePhone = "";
    if (form.phone) {
      includePhone = `phone: "${form.phone}"`;
    }
    let response = await fetch.post("", {
      query: `
        mutation {
          createUserAccount(data: {
            name: "${form.name}"
            email: "${form.email}"
            password: "${form.password}"
            organization: "${form.organizationEmail}"
            ${includePhone}
          }) 
          {
            userId
            token
            isVerified
          }
        }
      `
    });
    return {
      error: null,
      message: null,
      data: response.data.data.createUserAccount
    };
  } catch (err) {
    return { error: true, message: err.response.data.errors[0].message };
  }
};
