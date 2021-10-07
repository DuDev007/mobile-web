import React from 'react'
import { Link} from "react-router-dom";
import { getImage } from '../utils'

export default function Item(props) {
  return (
    <div class="product-item card text-center">
      <Link to={`/detail/${props.data._id}`}><img src={getImage(props.data?.image)} /></Link>
      <h4><a href="#">{props.data.name}</a></h4>
      <p>Giá Bán: <span>{props.data.price} $</span></p>
    </div>
  )
}