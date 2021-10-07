import React ,{useState,useEffect}from "react";

import axios from 'axios';

export default function Header() {
  // const [data, setData] = useState({ hits: [] });
  // const [query, setQuery] = useState('Iphone');
  // const [search, setSearch] = useState('');

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const result = await axios(
  //       `https://mobileshop.hungvu.net/search?query=${query}`,
  //     );
  //     setData(result.data);
  //   };
  //   fetchData();
  // }, [query]);
  
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
                //  value={query}
                //  onChange={e => setQuery(e.target.value)}
              />
              <button 
              class="btn btn-danger mt-3" 
              type="submit"
              // onClick={() => setSearch(query)}
              >
                Tìm kiếm
              </button>
            </form>
          </div>
          <div id="cart" class="col-lg-3 col-md-3 col-sm-12">
            <a class="mt-4 mr-2" href="#/cart">
              giỏ hàng
            </a>
            <span class="mt-3">8</span>
          </div>
        </div>
      </div>
    </div>
    
  );
}
