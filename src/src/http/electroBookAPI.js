import { $authHost, $host } from "./index";

export const createBook = async (book) => {
  const { data } = await $authHost.post("api/electro", book);
  return data;
};

export const fetchBooks = async () => {
  const { data } = await $host.get("api/electro");
  return data;
};

export const fetchOneBook = async (id) => {
  const { data } = await $host.get("api/electro/" + id);
  return data;
};
