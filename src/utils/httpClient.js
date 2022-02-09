import axios from "axios";

const scheme = process.env.NODE_ENV !== "production" ? "http" : "https";
const basePath =
  process.env.NODE_ENV !== "production" ? "localhost:8888" : "fillthisinlater";
const apiPath = "/rhc/api";
export const httpClient = axios.create({
  baseURL: `${scheme}://${basePath}${apiPath}`,
  responseType: "json",
  headers: {
    "Content-Type": "application/json",
  },
});
