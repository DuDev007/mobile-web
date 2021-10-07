import {
  CART_ADD_ITEM,
  CART_CHANGE_QTY_ITEM,
  CART_REMOVE_ITEM,
} from '../constants/cartConstants'

export const cartReducer = (
  state = { cartItems: []},
  action
) => {
  switch (action.type) {
    case CART_ADD_ITEM:
      
      const item = action.data

      const existItem = state.cartItems.find((x) => x._id === item._id);
      // return {
      //       ...state,
      //       cartItems: existItem ? state.cartItems.map((x) =>
      //         x._id === existItem._id ? {...x,qty:x.qty+1} : x
      //       ):[...state.cartItems, item],
      //     }
      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((x) =>
          x._id === existItem._id ? {...x,qty:x.qty+1} : x
          ),
        }
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        }
      }
    case CART_CHANGE_QTY_ITEM:
      const itemQty = action.data
        return {
          ...state,
          cartItems: state.cartItems.map((x) =>
          x._id === itemQty._id ? itemQty : x
          ),
        }
      
    case CART_REMOVE_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter((x) => x._id !== action.data._id),
      }
    default:
      return state
  }
}