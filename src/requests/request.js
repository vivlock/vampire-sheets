import axios from "axios";

export default function sendRequest( config ) {
  const fullConfig = {
    baseURL: "https://haven4crimsonshadow-c260.restdb.io/rest/",
    crossDomain: true,
    headers: {
      "content-type": "application/json",
      "x-apikey": "5e0acf4db68f0802dd3e5e8e",
      "cache-control": "no-cache"
    },
    ...config
  };

  return axios( fullConfig )
}