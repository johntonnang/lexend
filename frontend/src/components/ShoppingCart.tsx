import React, { useState, useEffect } from "react"
import { Button, Offcanvas, Stack } from "react-bootstrap"
import { useShoppingCart } from "../context/ShoppingCartContext"
import { CartItem } from "./CartItem"
import { formatCurrency } from "../utilities/formatCurrency"

interface ShoppingCartProps {
  isOpen: boolean
}

interface Product {
  id: number
  name: string
  price: number
  img: string
  description: string
  measurements: {
    height: number
    width: number
    depth: number
  }
  category?: string
  categories: string[]
}

export function ShoppingCart({ isOpen }: ShoppingCartProps): JSX.Element {
  const { closeCart, cartItems } = useShoppingCart()
  const [productItems, setProductItems] = useState<Product[]>([])

  useEffect(() => {
    const fetchProductItems = async (): Promise<void> => {
      try {
        const response = await fetch("/data/items.json")
        const data = await response.json()
        setProductItems(data)
      } catch (error) {
        console.log(error)
      }
    }

    void fetchProductItems()
  }, [])

  return (
    <Offcanvas show={isOpen} onHide={closeCart} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Stack gap={3}>
          {cartItems.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
          <div className="ms-auto fw-bold fs-5">
            Total{" "}
            {formatCurrency(
              cartItems.reduce((total, cartItem) => {
                const item = productItems.find((i) => i.id === cartItem.id)
                return total + (item?.price ?? 0) * cartItem.quantity
              }, 0)
            )}
          </div>
        </Stack>
        <Button
          className="w-full my-4"
          variant="outline-dark"
          size="sm"
          href="/checkout"
        >
          Continue to Checkout
        </Button>
      </Offcanvas.Body>
    </Offcanvas>
  )
}
