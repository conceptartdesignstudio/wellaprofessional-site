import axios from 'axios';

export const getAllProductsFromServer = async () => {
  //   get all products from Server
  try {
    const { data } = await axios.get(process.env.NEXT_PUBLIC_WELLA_ENV_API);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getFeaturedImage = async (id) => {
  try {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_WELLA_MEDIA_API}/${id}`
    );
    return res.data.source_url;
  } catch (error) {
    console.log(error);
    return "";
  }
};

export const getBrandLogo = async (id) => {
  try {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_WELLA_MEDIA_API}/${id}`
    );
    return res.data.source_url;
  } catch (error) {
    console.log(error);
    return "";
  }
};