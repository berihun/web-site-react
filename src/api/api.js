import axios from "axios";

// custom axios
const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/posts",
  headers: {
    Authorization: "Bearer <TOKEN>",
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(
  (request) => {
    console.log("starting request ");
    return request;
  },

  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    console.error("Request Error ", error);
    return Promise.reject(error);
  },
);

api.interceptors.response.use(
  (response) => {
    console.log("Response ");
    return response;
  },
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    if (erro.response && error.response.status === 401) {
      console.error("Unauthorized! ", error);
      return Promise.reject(error);
    }
    if (erro.response && error.response.status === 500) {
      console.error("Server Error! ", error);
      return Promise.reject(error);
    }
    return Promise.reject(error);
  },
);

export default api;
