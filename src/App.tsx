import { useDispatch } from 'react-redux'
import { addCartItem, clearCart } from './features/cart/cartSlice'
import generateCartItem from './utils/generateCartItem'
import Drawer from './components/Cart/Drawer'

function App() {
  /* hooks */
  const dispatch = useDispatch()

  /* handlers */
  const handleAddToCart = () => {
    const newCartItem = generateCartItem()
    dispatch(addCartItem(newCartItem))
  }

  const handleClearCart = () => {
    dispatch(clearCart())
  }

  return (
    <main className="app">
      <button onClick={handleAddToCart}>Add To Cart</button>
      <button onClick={handleClearCart}>Clear Cart</button>
      <Drawer />
    </main>
  )
}

export default App
