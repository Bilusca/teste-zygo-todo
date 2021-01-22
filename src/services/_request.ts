import axios, { AxiosInstance } from "axios";

const server: AxiosInstance = axios.create({
  baseURL: "http://todo-backend-express.herokuapp.com/"
});

export default server;
