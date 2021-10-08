import React, { useEffect, useState } from 'react'
// import { useHistory } from "react-router-dom";
// import {getProducts} from "../service/Api"
import {ClipLoader} from "react-spinners";
import Item from '../components/items';
import { useDispatch,useSelector } from 'react-redux';
import { listProduct } from '../actions/productActions';
export default function Home() {
  // const history = useHistory();
  const dispatch = useDispatch();
  // const [loading, setLoading] = useState(false)
  // const [products, setProducts] = useState([])

  const productList = useSelector(state=>state.productList);
  const {loading,error,products} = productList
  useEffect(() => {
      dispatch(listProduct()) 
  },[dispatch])

  // useEffect(() => {
  //   const getProduct = async () => {
  //     setLoading(true)
  //     try {
  //       const result = await getProducts()
  //       setLoading(false)
  //       setProducts(result.data.data)
  //     } catch (error) {
  //       setLoading(false)
  //     }
  //   }

  //   getProduct()
  // }, [])


  // const onMoveToDetail = (e) => {
  //   e.preventDefault()
  //   history.push({ pathname: "/detail/1", state: { id: 1 } });
  // }

  return (
    <>
      <div class="products">
       
        <h3>Sản phẩm nổi bật</h3>
        { loading ? (
           <div className="sweet-loading">
           <ClipLoader color={'green'} loading={loading} size={50} />
           </div>
        ) : error ? (
          <h3>{error}</h3> 
        ) : (
            <div class="product-list card-deck">
            {products?.map(e => <Item data={e} key={e._id } />)}
            </div>
        )}
        
      </div>
    </>
  )
}