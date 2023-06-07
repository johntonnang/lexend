import { useEffect, useState } from "react"
import { Button, Stack } from "react-bootstrap"
import { useShoppingCart } from "../context/ShoppingCartContext"
import { formatCurrency } from "../utilities/formatCurrency"

interface CartItemProps {
  id: number
  quantity: number
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

export function CartItem({ id, quantity }: CartItemProps): JSX.Element {
  const { increaseCartQuantity, decreaseCartQuantity } = useShoppingCart()
  const [item, setItem] = useState<Product | null>(null)

  useEffect(() => {
    const fetchItem = async (): Promise<void> => {
      try {
        const response = await fetch("/product")
        const data = await response.json()
        const product = data.find((p: Product) => p.id === id)
        setItem(product)
      } catch (error) {
        console.error(error)
      }
    }

    fetchItem().catch((error) => {
      console.log(error)
    })
  }, [id])

  if (item === null) return <></>

  return (
    <>
      <Stack
        direction="horizontal"
        gap={2}
        className="d-flex align-items-center"
      >
        <img
          src={item.img}
          style={{ width: "105px", height: "75px", objectFit: "cover" }}
        />
        <div className="me-auto">
          <div>
            {item.name}{" "}
            {quantity > 1 && (
              <span className="text-muted" style={{ fontSize: ".65rem" }}>
                x{quantity}
              </span>
            )}
          </div>
          <div className="text-muted" style={{ fontSize: ".75rem" }}>
            {formatCurrency(item.price)}
          </div>
        </div>
        <div>{formatCurrency(item.price * quantity)}</div>
        <Button
          variant="outline-dark"
          size="sm"
          onClick={() => {
            if (decreaseCartQuantity != null) {
              decreaseCartQuantity(id)
            }
          }}
        >
          -
        </Button>
        <Button
          variant="outline-dark"
          size="sm"
          onClick={() => {
            if (increaseCartQuantity != null) {
              increaseCartQuantity(id)
            }
          }}
        >
          +
        </Button>
      </Stack>
    </>
  )
}
