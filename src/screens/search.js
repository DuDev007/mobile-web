
// import Item from "../components/items";
import React ,{useState, useEffect}from "react";
import { useLocation } from "react-router";
import Item from "../components/items";
import { getProducts } from "../service/Api";

export default function Search() {
  const location = useLocation();
  const urlParams = new URLSearchParams(location.search)
  const key = urlParams.get('query');
   const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getProducts({name:key});
      setData(result.data.data);
    };
    fetchData();
  }, [key]);

  
    return (
        <>
        <div class="products">
          <div id="search-result">
            Kết quả tìm kiếm với sản phẩm 
            <span>iPhone Xs Max 2 Sim - 256GB</span>
          </div>
          <div class="product-list card-deck">
            
          
          {data?.map(e => <Item data={e} key={e._id } />)}
            
          </div>
          
          
        </div>
      </>
    )
}
