import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { CART_CHANGE_QTY_ITEM, CART_REMOVE_ITEM } from "../constants/cartConstants";

export default function Cart() {
  const params = useParams();
  const [qty, setQty] = useState(0);
  const productId = params?.id;

  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cartItems);

  // const { cartItems } = cart


  useEffect(() => {
    if (productId) {
      // dispatch(addToCart(productId, qty))
    }
  }, [dispatch, productId, qty]);

 const onChangeQty=(item)=>(event)=>{
    dispatch({type:CART_CHANGE_QTY_ITEM,data:{...item,qty:event.target.value}})

 }
 const onRemoveItem=(item)=>(event)=>{
  dispatch({type:CART_REMOVE_ITEM,data:item})

}


  return (
    <>
      <div id="customer">
        <form method="post">
          <div class="row">
            <div id="customer-name" class="col-lg-4 col-md-4 col-sm-12">
              <input
                placeholder="Họ và tên (bắt buộc)"
                type="text"
                name="name"
                class="form-control"
                required
              />
            </div>
            <div id="customer-phone" class="col-lg-4 col-md-4 col-sm-12">
              <input
                placeholder="Số điện thoại (bắt buộc)"
                type="text"
                name="phone"
                class="form-control"
                required
              />
            </div>
            <div id="customer-mail" class="col-lg-4 col-md-4 col-sm-12">
              <input
                placeholder="Email (bắt buộc)"
                type="text"
                name="mail"
                class="form-control"
                required
              />
            </div>
            <div id="customer-add" class="col-lg-12 col-md-12 col-sm-12">
              <input
                placeholder="Địa chỉ nhà riêng hoặc cơ quan (bắt buộc)"
                type="text"
                name="add"
                class="form-control"
                required
              />
            </div>
          </div>
        </form>
        <div class="row">
          <div class="by-now col-lg-6 col-md-6 col-sm-12">
            <Link to={"/success"}>
              <b>Mua ngay</b>
              <span>Giao hàng tận nơi siêu tốc</span>
            </Link>
          </div>
          <div class="by-now col-lg-6 col-md-6 col-sm-12">
            <a href="#">
              <b>Trả góp Online</b>
              <span>Vui lòng call (+84) 0988 550 553</span>
            </a>
          </div>
        </div>
      </div>

      <div id="my-cart">
        <div class="row">
          <div class="cart-nav-item col-lg-7 col-md-7 col-sm-12">
            Thông tin sản phẩm
          </div>
          <div class="cart-nav-item col-lg-2 col-md-2 col-sm-12">Tùy chọn</div>
          <div class="cart-nav-item col-lg-3 col-md-3 col-sm-12">Giá</div>
        </div>
        <form method="post">
          {cart?.map((e) => {
            return (
              <div class="cart-item row">
                <div class="cart-thumb col-lg-7 col-md-7 col-sm-12">
                  <img src="images/product-1.png" />
                  <h4>{e?.name}</h4>
                </div>

                <div class="cart-quantity col-lg-2 col-md-2 col-sm-12">
                  <input
                    type="number"
                    id="quantity"
                    class="form-control form-blue quantity"
                    value={e.qty}
                    min={1}
                    onChange={onChangeQty(e)}
                  />
                </div>
                <div class="cart-price col-lg-3 col-md-3 col-sm-12" onClick={onRemoveItem(e)}>
                  <b>{e?.price}</b>
                  <a>Xóa</a>
                </div>
              </div>
            );
          })}

          <div class="row">
            <div class="cart-thumb col-lg-7 col-md-7 col-sm-12">
              <button
                id="update-cart"
                class="btn btn-success"
                type="submit"
                name="sbm"
              >
                Cập nhật giỏ hàng
              </button>
            </div>
            <div class="cart-total col-lg-2 col-md-2 col-sm-12">
              <b>Tổng cộng:</b>
            </div>
            <div class="cart-price col-lg-3 col-md-3 col-sm-12">
              <b>88.970.000đ</b>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
