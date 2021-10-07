import axios from 'axios'

// https://reactnative.dev/movies.json
// https://reactnative.dev/category.json

const instance = axios.create({
  baseURL: 'https://mobileshop.hungvu.net',
  timeout: 60000, // 1phut
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  },
});

// Add a request interceptor
axios.interceptors.request.use(function (config) {
  // Do something before request is sent
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

// Add a response interceptor
axios.interceptors.response.use(function (response) {
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  return response;
}, function (error) {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  return Promise.reject(error);
});

export const getProducts = (params) => instance.get('/get-products',{params});
export const getCategories = () => instance.get('/get-categories');
export const getProductDetail = (productId) => instance.get(`/product/${productId}`);
export const getProductComments = (productId,params) => instance.get(`/get-product-comments/${productId}`,{params});
export const createComments = (params) => instance.post('/create-comment',params);
