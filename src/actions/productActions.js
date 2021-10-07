
import axios from 'axios';
import { 
    PRODUCT_LIST_REQUEST,
    PRODUCT_LIST_SUCCESS,
    PRODUCT_LIST_FAIL,
    PRODUCT_DETAILS_SUCCESS,
    PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_FAIL
}from '../constants/productConstants'
import { getProductDetail, getProducts } from '../service/Api';

export const listProduct = () => async(dispatch)=>{
    try {
        dispatch({type: PRODUCT_LIST_REQUEST});

        const {data} = await getProducts()
  //    const {data} = await axios.get('/get-products')

  // useEffect(() => {
  //   const getProduct = async () => {
  //       const result = await getProducts()
  //       setLoading(false)
  //       setProducts(result.data.data)
  //   }
  //   getProduct()
  // }, [])
        console.log("data",data)

        dispatch({
            type: PRODUCT_LIST_SUCCESS,
            payload : data.data
        })
    } catch (error) {
        dispatch({
            type: PRODUCT_LIST_FAIL
            
        })
    }
}

export const listProductDetails = (productId) => async(dispatch)=>{
    try {
        dispatch({type: PRODUCT_DETAILS_REQUEST});

        const {data} = await getProductDetail(productId);
        // const {data} = await axios.get(`/product/${productId}`);
        console.log("ab",data);
        dispatch({
            type: PRODUCT_DETAILS_SUCCESS,
            payload : data.data
        })
    } catch (error) {
        dispatch({
            type: PRODUCT_DETAILS_FAIL
            
        })
    }
}