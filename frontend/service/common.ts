import { apiBaseUrl } from "../config/environment";
import { getCookie } from "./cookie";

export interface apiCallProps {
  method: string;
  url: string;
  body?: any;
  headers?: any;
}

export const apiCall = async ({ method, url, body, headers }: apiCallProps) => {
  const url_ = `${apiBaseUrl.url}${url}`;
  let myHeaders = new Headers();
  let access_token = getCookie("access_token");
  myHeaders.append("Authorization", "Bearer " + access_token);

  const requestOptions = {
    method: method,
    headers: myHeaders,
    body: body,
  };
  return fetch(url_, requestOptions)
    .then((res) => {
      if (res.status === 200 || res.status === 201) {
        return res.json();
      } else {
        throw res;
      }
    })
    .catch((error) => {
      if (error.status === 404) {
        return "404";
      } else if (error.status === 401) {
        console.log(error);
        return "401";
      }
      return "500";
    });
};
