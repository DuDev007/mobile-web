import React ,{useState, useEffect}from "react";
import { useLocation,useParams } from "react-router";
import Item from "../components/items";
import { getCategories, getProducts } from "../service/Api";


export default function Category() {
  const location = useLocation();
  const params = useParams();
  
  const [data, setData] = useState([]);
  const [categoryList, setCategoryList] = useState([]);
  const currentCategory = categoryList?.find(e=>e._id === params?.id )

  useEffect(() => {
    const fetchData = async () => {
      const result = await getProducts({categoryId:params?.id});
      setData(result.data.data);
    };
    fetchData();
  }, [params?.id]);

  useEffect(() => {
    const getCategory = async () => {
       const result = await getCategories()
       setCategoryList(result.data.data)
      
    }
    
    getCategory();
    
  }, []);
    return (
      <>
      <div class="products">
        <div id="search-result">
          Kết quả tìm kiếm với sản phẩm 
          <span> {currentCategory?.name}</span>
        </div>
        <div class="product-list card-deck">
          
        
        {data?.map(e => <Item data={e} key={e._id } />)}
          
        </div>
        
        
      </div>
    </>
    )
}
