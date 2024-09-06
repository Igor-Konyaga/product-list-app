import axios, { AxiosInstance } from "axios";
import { ProductType } from "../models/models.ts";

const baseURL = "https://66d61413f5859a7042684cca.mockapi.io";

const api: AxiosInstance = axios.create({
  baseURL,
});

export const fetchAllProducts = async (): Promise<ProductType[]> => {
  const { data } = await api.get("/products");

  return data;
};