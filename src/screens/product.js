import React, { useEffect, useState } from "react";
import { useParams,Link } from "react-router-dom";
import Comments from "../components/comments";
// import { getProductDetail } from "../service/Api";
import { getImage } from "../utils";
import { getProductComments,createComments } from "../service/Api";
import { useSelector, useDispatch } from "react-redux";
import { listProductDetails } from "../actions/productActions";
import { CART_ADD_ITEM } from "../constants/cartConstants";
import Pagination from "react-js-pagination";

export default function Product() {
  // const dispatch = useDispatch();
  const [pagination,setPagination] = useState({
    currentPage: 1,
    totalPages: 1,
    pageSize: 5
  });
  

  const params = useParams();
  // const [detail, setDetail] = useState({});
  const [isCreateCmt,setIsCreateCmt] = useState(false);
  const [commentList, setCommentsList] = useState([]);


  const dispatch = useDispatch();
  const detail = useSelector(state => state.productDetails.product)

  
  useEffect(() => {
    dispatch(listProductDetails(params?.id));
  }, [dispatch])

  const onAddCart= ()=>{
    dispatch({type:CART_ADD_ITEM,data:{...detail,qty:1}})
  }

  // useEffect(() => {
  //   const getDetail = async () => {
  //     const result = await getProductDetail(params?.id);
  //     setDetail(result.data.data);
  //   };
  //   params?.id && getDetail ();
  // }, [params?.id]);

  const onGetValue = async(values) => {
    const result = await createComments({...values,productId:params?.id});
    setIsCreateCmt(true);
    
  };

  useEffect(() => {
    const getComments = async () => {
      
      const result2 = await getProductComments(params?.id,{
        limit: pagination.pageSize,
        skip:pagination.pageSize*(pagination.currentPage-1)
      }); //
      setCommentsList(result2.data.data);
      setIsCreateCmt(false);
      setPagination(prev=>({
        ...prev,
        totalPages:result2.data.total
      }));
    };
    params?.id && getComments();
  }, [params?.id,isCreateCmt,pagination.currentPage]);


  const handlePageChange =(page)=>{
    console.log(`active page is ${page}`);
      setPagination(prev=>({
        ...prev,
        currentPage:page
      }));
      
  }
  
  return (
    <>
      <div id="product">
        <div id="product-head" class="row">
          <div id="product-head" class="row">
            <div id="product-img" class="col-lg-6 col-md-6 col-sm-12">
              {detail?.image && <img src={getImage(detail?.image)} />}
            </div>
            <div id="product-details" class="col-lg-6 col-md-6 col-sm-12">
              <h1>{detail?.name}</h1>
              <ul>
                <li>
                  <span>Bảo hành:</span> 12 Tháng
                </li>
                <li>
                  <span>Đi kèm:</span> {detail?.accessories}
                </li>
                <li>
                  <span>Tình trạng:</span> {detail?.status}
                </li>
                <li>
                  <span>Khuyến Mại:</span> {detail?.promotion}
                </li>
                <li id="price">Giá Bán (chưa bao gồm VAT)</li>
                <li id="price-number">{detail?.price}đ</li>
                <li id="status">
                  {detail?.is_stock ? "Còn hàng" : "Hết hàng"}
                </li>
              </ul>
              <div id="add-cart" onClick={onAddCart}>
                <a id="add">Mua ngay</a>
              </div>
            </div>
          </div>
          <div id="product-body" class="row">
            <div class="col-lg-12 col-md-12 col-sm-12">
              <h3>Đánh giá về {detail?.name}</h3>
              <p>{detail?.details}</p>
            </div>
          </div>
        </div>

        <Comments onSubmit={onGetValue} />

        <div id="comments-list" class="row">
          <div class="col-lg-12 col-md-12 col-sm-12">
            <div class="comment-item">
              {commentList?.map((e) =>
              <ul key={e._id}>
                  <li>
                    <b>{e?.name}</b>
                  </li>
                  <li>{e?.created_date}</li>
                  <li>
                    <p>
                    {e?.content}
                    </p>
                  </li>
              </ul> )}
            </div>
          </div>
        </div>
      </div>

        <div>
        <Pagination
          activePage={pagination.currentPage}
          itemsCountPerPage={pagination.pageSize}
          totalItemsCount={pagination.totalPages}
          pageRangeDisplayed={5}
          onChange={handlePageChange}
          itemClass="page-item"
          linkClass="page-link"
        />
      </div>          
      {/* <div id="pagination">
        <ul class="pagination">
          <li class="page-item">
            <a class="page-link" href="#">
              Trang trước
            </a>
          </li>
          <li class="page-item active">
            <a class="page-link" href="#">
              1
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">
              2
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">
              3
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">
              Trang sau
            </a>
          </li>
        </ul>
      </div> */}
    </>
  );
}
