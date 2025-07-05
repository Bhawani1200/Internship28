/* eslint-disable no-unused-vars */

import axios from "axios";
import { api } from "../../config/apiConfig";
import {
  FIND_PRODUCT_BY_ID_FAILURE,
  FIND_PRODUCT_BY_ID_REQUEST,
  FIND_PRODUCT_BY_ID_SUCCESS,
  FIND_PRODUCTS_FAILURE,
  FIND_PRODUCTS_REQUEST,
  FIND_PRODUCTS_SUCCESS,
} from "./ActionType";

export const findProducts = (reqData) => async (dispatch) => {
  dispatch({ type: FIND_PRODUCTS_REQUEST });
  const {
    colors,
    sizes,
    minPrice,
    stock,
    maxPrice,
    category,
    minDiscount,
    sort,
    pageNumber,
    pageSize,
  } = reqData;
  try {
    const { data } = await api.get(
      `/api/products?color=${colors}&size=${sizes}&minPrice=${minPrice}&maxPrice=${maxPrice}&minDiscount=${minDiscount}&category=${category}&stock=${stock}&sort=${sort}&pageNumber=${pageNumber}&pageSize=${pageSize}`
    );
    console.log("Product data", data);
    dispatch({ type: FIND_PRODUCTS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: FIND_PRODUCTS_FAILURE, payload: error.message });
  }
};

//   dispatch({ type: FIND_PRODUCTS_REQUEST });
  
//   try {
//     // Create cleaned parameters object
//     const params = {
//       color: reqData.colors || undefined,        // Omit if empty
//       size: reqData.sizes || undefined,          // Omit if empty
//       minPrice: reqData.minPrice,
//       maxPrice: reqData.maxPrice,
//       minDiscount: reqData.minDiscount,
//       category: reqData.category || undefined,   // Omit if empty
//       stock: reqData.stock ?? undefined,         // Omit if null/undefined
//       sort: reqData.sort || undefined,           // Omit if empty
//       pageNumber: reqData.pageNumber,
//       pageSize: reqData.pageSize
//     };

//     // Make API call with cleaned params
//     const { data } = await api.get(`/api/products`, { params });
    
//     console.log("Product data", data);
//     dispatch({ type: FIND_PRODUCTS_SUCCESS, payload: data });
//   } catch (error) {
//     dispatch({ type: FIND_PRODUCTS_FAILURE, payload: error.message });
//   }
// };
export const findProductsById = (reqData) => async (dispatch) => {
  dispatch({ type: FIND_PRODUCT_BY_ID_REQUEST });
  const { productId } = reqData;
  try {
    const { data } = await api.get(`/api/products/id/${productId}`);
    dispatch({ type: FIND_PRODUCT_BY_ID_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: FIND_PRODUCT_BY_ID_FAILURE, payload: error.message });
  }
};
