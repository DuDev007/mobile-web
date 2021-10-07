import React ,{useState,useEffect}from "react";
import {useHistory} from  'react-router-dom'
import { useSelector, useDispatch } from "react-redux";

export default function Header() {
  const [keyword, setKeyWord] = useState();
  const history = useHistory();
 
  const cart = useSelector((state) => state.cart.cartItems);
  
  const submitHandler = (e) =>{
      e.preventDefault();
      if(keyword.trim()){
        history.push(`/search?query=${keyword}`);
      }else{
        history.push('/')
      }
  }
  
  return (
    <div id="header">
      <div class="container">
        <div class="row">
          <div id="logo" class="col-lg-3 col-md-3 col-sm-12">
            <h1>
              <a href="/">
                <img class="img-fluid" src="images/logo.png" />
              </a>
            </h1>
          </div>
          <div id="search" class="col-lg-6 col-md-6 col-sm-12">
            <form class="form-inline">
              <input
                class="form-control mt-3"
                type="search"
                placeholder="Tìm kiếm"
                aria-label="Search"
                 value={keyword}
                 onChange={e => setKeyWord(e.target.value)}
              />
              <button 
              class="btn btn-danger mt-3" 
              type="submit"
              onClick={ submitHandler}
              >
                Tìm kiếm
              </button>
            </form>
          </div>
          <div id="cart" class="col-lg-3 col-md-3 col-sm-12">
            <a class="mt-4 mr-2" href="#/cart">
              giỏ hàng
            </a>
            <span class="mt-3">{cart.length}</span>
          </div>
        </div>
      </div>
    </div>
    
  );
}
