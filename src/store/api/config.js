import axios from "axios";

let url = "http://localhost:5000/graphql";
const chatApi = token => {
  const axiosInstance = axios.create({
    baseURL: url,
    withCredentials: false,
    timeout: 10000,
    headers: {
      Authorization: token ? `bearer ${token}` : "",
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*"
    }
  });
  return axiosInstance;
};

export { chatApi };
