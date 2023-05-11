import axios from "axios";
import { servertUrl } from "../../redux/modules";

export const instance = axios.create({
  baseURL: `http://52.79.197.197:8080`,
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
});

export const baseURL = axios.create({
  baseURL: `http://52.79.197.197:8080`,
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
});

//인스턴스 request header
baseURL.interceptors.request.use((config) => {
  if (config.headers === undefined) return;
  const token = localStorage.getItem("id");
  config.headers["Authorization"] = `${token}`;
  return config;
});

