import axios from "axios";

export const postData = (endpoint: string, body: JSON) => {
  return axios.post(`${process.env.REACT_APP_BASEURL}/${endpoint ?? ""}`, body);
};

export const getData = (endpoint: string) => {
  return axios.get(`${process.env.REACT_APP_BASEURL}/${endpoint ?? ""}`);
};
