import React, {
  createContext,
  type ReactNode,
  useContext,
  useState,
} from "react"
import { ShoppingCart } from "../components/ShoppingCart"
import { useLocalStorage } from "../hooks/useLocalStorage"

interface ShoppingCartProviderProps {
  children: ReactNode
}

interface CartItem {
  img: string
  name: string
  price: number
  id: number
  quantity: number
}

interface ShoppingCartContext {
  openCart?: () => void
  closeCart?: () => void
  increaseCartQuantity?: (id: number) => void
  decreaseCartQuantity?: (id: number) => void
  removeFromCart?: (id: number) => void
  getItemQuantity: (id: number) => number
  cartQuantity: number
  cartItems: CartItem[]
}

const ShoppingCartContextValue = createContext<ShoppingCartContext>({
  openCart: undefined,
  closeCart: undefined,
  increaseCartQuantity: undefined,
  decreaseCartQuantity: undefined,
  removeFromCart: undefined,
  getItemQuantity: (id) => 0,
  cartQuantity: 0,
  cartItems: [],
} satisfies ShoppingCartContext)

export function useShoppingCart(): ShoppingCartContext {
  return useContext(ShoppingCartContextValue)
}

export function ShoppingCartProvider({
  children,
}: ShoppingCartProviderProps): JSX.Element {
  const [cartItems, setCartItems] = useLocalStorage<CartItem[]>(
    "shopping-cart",
    []
  )
  const [isOpen, setIsOpen] = useState(false)

  const cartQuantity = cartItems.reduce(
    (quantity, item) => item.quantity + quantity,
    0
  )

  const openCart = (): void => {
    setIsOpen(true)
  }
  const closeCart = (): void => {
    setIsOpen(false)
  }

  function getItemQuantity(id: number): number {
    return cartItems.find((item) => item.id === id)?.quantity ?? 0
  }

  function increaseCartQuantity(id: number): void {
    setCartItems((currItems) => {
      const existingItem = currItems.find((item) => item.id === id)
      if (existingItem == null) {
        const newItem: CartItem = {
          id,
          quantity: 1,
          img: "",
          name: "",
          price: 0,
        }
        return [...currItems, newItem]
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 }
          } else {
            return item
          }
        })
      }
    })
  }

  function decreaseCartQuantity(id: number): void {
    setCartItems((currItems) => {
      const existingItem = currItems.find((item) => item.id === id)
      if (existingItem != null) {
        if (existingItem.quantity === 1) {
          return currItems.filter((item) => item.id !== id)
        } else {
          return currItems.map((item) => {
            if (item.id === id) {
              return { ...item, quantity: item.quantity - 1 }
            } else {
              return item
            }
          })
        }
      }
      return currItems
    })
  }

  function removeFromCart(id: number): void {
    setCartItems((currItems) => {
      return currItems.filter((item) => item.id !== id)
    })
  }

  return (
    <ShoppingCartContextValue.Provider
      value={{
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart,
        openCart,
        closeCart,
        cartItems,
        cartQuantity,
      }}
    >
      {children}
      <ShoppingCart isOpen={isOpen} />
    </ShoppingCartContextValue.Provider>
  )
}
