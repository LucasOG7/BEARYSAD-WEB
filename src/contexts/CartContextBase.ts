import { createContext, useContext } from 'react'

export type CartItem = {
  id: string
  title: string
  imageSrc: string
  size?: string | null
  qty: number
  priceCLP: number
}

export type CartContextType = {
  items: CartItem[]
  addItem: (payload: { id: string; title: string; imageSrc: string; priceLabel: string; size?: string | null; qty?: number }) => void
  removeItem: (key: { id: string; size?: string | null }) => void
  updateQty: (key: { id: string; size?: string | null }, qty: number) => void
  clearCart: () => void
  count: number
  totalCLP: number
  formatCLP: (v: number) => string
}

export const CartContext = createContext<CartContextType | undefined>(undefined)

export const useCart = () => {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('CartContext not found')
  return ctx
}

