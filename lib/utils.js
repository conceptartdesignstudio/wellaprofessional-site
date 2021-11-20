import axios from 'axios';
import { PRODUCTS_API_URL, MEDIA_API_URL } from "./constants";

export const getAllProductsFromServer = async () => {
  //   get all products from Server
  try {
    const { data } = await axios.get(PRODUCTS_API_URL);
    console.log(data)
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getFeaturedImage = async (id) => {
  try {
    const res = await axios.get(`${MEDIA_API_URL}/${id}`);
    return res.data.source_url;
  } catch (error) {
    console.log(error);
    return "";
  }
};

export const getBrandLogo = async (id) => {
  try {
    const res = await axios.get(`${MEDIA_API_URL}/${id}`);
    return res.data.source_url;
  } catch (error) {
    console.log(error);
    return "";
  }
};