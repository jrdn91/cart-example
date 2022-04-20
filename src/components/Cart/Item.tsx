import React, { FC } from 'react'
import { CartItem } from '../../types/cart'

interface ItemProps {
  data: CartItem
}

const Item:FC<ItemProps> = ({ data }) => {
  return (
    <figure className="item">
      <div className="item-data">
        <h3 className="item-title">{data.title}</h3>
        <h4 className="item-quantity">Quantity: {data.quantity}</h4>
      </div>
      <div className="item-price">
        ${data.price}
      </div>
    </figure>
  )
}

export default Item