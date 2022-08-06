import React from 'react';
import axios from 'axios';
let mm= [];
let Url = 'https://www.ishtari.com/';
const access_token =
"motor/v1/index.php?route=token/new_token&grant_type=client_credentials";
let requestBody = {
client_id: "shopping_oauth_client",
client_secret: "shopping_oauth_secret",
};

let requestHeader = {
Authorization: "Basic dGVzdGNsaWVudDp0ZXN0cGFzcw==",
};
axios
.post(`${Url}${access_token}`, requestBody, {
headers: requestHeader,
})
.then(function (response) {
let Token = response.data.access_token;
mm.push(Token)
// let access= window.localStorage.setItem("token", Token);
})
.catch(function (error) {
console.log(error);
})

const themecontext = React.createContext(mm);
export default themecontext;