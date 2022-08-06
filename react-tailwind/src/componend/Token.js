import axios from "axios";






const access_token =
  "motor/v1/index.php?route=token/new_token&grant_type=client_credentials";

const url = `https://www.ishtari.com/`;

const ken = window.sessionStorage.getItem("token")
console.log(ken)

const _token = axios.create({
  baseURL: `${url}${access_token}`,
  headers: { Authorization: `Bearer ${ken} ` },
});



_token.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);
_token.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default _token;

