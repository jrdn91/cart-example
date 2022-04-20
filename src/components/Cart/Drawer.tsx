import classNames from 'classnames'
import React, { useEffect, useState } from 'react'
import useCartCount from '../../hooks/cart/useCartCount'
import useCartItems from '../../hooks/cart/useCartItems'
import useCartTotal from '../../hooks/cart/useCartTotal'
import Item from './Item'

const Drawer = () => {
  /* state */
  const [drawerOpen, setDrawerOpen] = useState(false)

  /* hooks */
  const count = useCartCount()
  const cartItems = useCartItems()
  const cartTotal = useCartTotal()

  /* handlers */
  const handleCloseDrawer = () => {
    setDrawerOpen(false)
  }

  /* effects */
  useEffect(() => {
    if (count > 0) {
      // if count updates and is greater than 0 open the drawer
      setDrawerOpen(true)
    } else {
      // close the drawer
      setDrawerOpen(false)
    }
  }, [count])

  return (
    <aside className={classNames("drawer", {
      "open": drawerOpen
    })}>
      <div className="cart-top">
        <button className="close-button" onClick={handleCloseDrawer}>Close</button>
      </div>
      <div className="cart-list">
        {cartItems.map((item) => (
          <Item data={item} />
        ))}
      </div>
      <div className="count-box">
        <h2 className="cart-count">Items in cart: <strong>({count})</strong></h2><h2 className="cart-total">Cart Total: ${cartTotal}</h2>
      </div>
    </aside>
  )
}

export default Drawer