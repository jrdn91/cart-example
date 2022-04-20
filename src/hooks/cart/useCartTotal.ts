import { useSelector } from "react-redux"
import { RootState } from "../../store"

function useCartTotal() {
  return useSelector((state: RootState) => state.cart.items.map((i) => i.price).reduce((prevValue: number, currValue: number) => prevValue + currValue, 0))
}

export default useCartTotal