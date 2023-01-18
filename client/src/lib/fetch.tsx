import axios from "axios";

export const getData = (endpoint: string) => {
  return axios.get(`${process.env.REACT_APP_BASEURL}/${endpoint ?? ""}`);
};
