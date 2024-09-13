import axios from "axios";

export const weatherAPI = axios.create({
  baseURL: "https://api.open-meteo.com/v1",
});

weatherAPI.interceptors.response.use(
  (response) => {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return Promise.resolve(response);
  },
  (error) => {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);

//Install and start with tailwind css
