import axios from "axios";

export const createProduct = async (authtoken, product) => {
  return await axios.post(
    `${process.env.REACT_APP_BACKEND_API}/product`,
    product,
    {
      headers: {
        authtoken,
      },
    }
  );
};

export const getProductsByCount = async (count) => {
  return await axios.get(
    `${process.env.REACT_APP_BACKEND_API}/products/${count}`
  );
};

export const deleteProduct = async (authtoken, id) => {
  return await axios.delete(
    `${process.env.REACT_APP_BACKEND_API}/product/${id}`,
    {
      headers: {
        authtoken,
      },
    }
  );
};

export const getProduct = async (id) => {
  return await axios.get(
    `${process.env.REACT_APP_BACKEND_API}/product/${id}`
  );
};

export const updateProduct = async (authtoken, id, product) => {
  return await axios.put(
    `${process.env.REACT_APP_BACKEND_API}/product/${id}`,
    product,
    {
      headers: {
        authtoken,
      },
    }
  );
};

export const getProducts = async (sort, order, page) => {
  return await axios.post(`${process.env.REACT_APP_BACKEND_API}/products`, {
    sort,
    order,
    page,
  });
};

export const getProductsCount = async () => {
  return await axios.get(`${process.env.REACT_APP_BACKEND_API}/products/total`);
};

export const updateProductRating = async (authtoken, productId, star) => {
  return await axios.put(
    `${process.env.REACT_APP_BACKEND_API}/product/star/${productId}`,
    { star },
    {
      headers: {
        authtoken,
      },
    }
  );
};

export const listRelated = async (productId) => {
  return await axios.get(
    `${process.env.REACT_APP_BACKEND_API}/product/related/${productId}`
  );
};

export const searchFilter = async (arg) => {
  return await axios.post(
    `${process.env.REACT_APP_BACKEND_API}/search/filters`,
    arg
  );
};
