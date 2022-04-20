import { useSelector } from "react-redux"
import { RootState } from "../../store"

function useCartCount() {
  return useSelector((state: RootState) => state.cart.items.length)
}

export default useCartCount