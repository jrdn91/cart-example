import { useSelector } from "react-redux"
import { CartItem } from "../../types/cart"

function useCartItems():CartItem[] {
  return useSelector((state: RootState) => state.cart.items)
}

export default useCartItems