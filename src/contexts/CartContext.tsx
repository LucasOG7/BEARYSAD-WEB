import { useEffect, useMemo, useState } from 'react'
import { CartContext } from './CartContextBase'
import type { CartContextType, CartItem } from './CartContextBase'

const parseCLP = (label: string) => {
  const digits = label.replace(/[^\d]/g, '')
  const value = digits ? parseInt(digits, 10) : 0
  return value
}

const formatCLP = (v: number) => {
  return '$' + v.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
}

const storageKey = 'bearysad_cart'

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [items, setItems] = useState<CartItem[]>(() => {
    try {
      const raw = localStorage.getItem(storageKey)
      if (raw) {
        const parsed = JSON.parse(raw) as CartItem[]
        return Array.isArray(parsed) ? parsed : []
      }
      return []
    } catch {
      return []
    }
  })

  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(items))
  }, [items])

  const addItem: CartContextType['addItem'] = ({ id, title, imageSrc, priceLabel, size = null, qty = 1 }) => {
    const priceCLP = parseCLP(priceLabel)
    setItems((prev) => {
      const idx = prev.findIndex((it) => it.id === id && it.size === size)
      if (idx >= 0) {
        const next = [...prev]
        next[idx] = { ...next[idx], qty: next[idx].qty + qty }
        return next
      }
      return [...prev, { id, title, imageSrc, priceCLP, size, qty }]
    })
  }

  const removeItem: CartContextType['removeItem'] = ({ id, size = null }) => {
    setItems((prev) => prev.filter((it) => !(it.id === id && it.size === size)))
  }

  const updateQty: CartContextType['updateQty'] = ({ id, size = null }, qty) => {
    setItems((prev) =>
      prev.map((it) => (it.id === id && it.size === size ? { ...it, qty: Math.max(1, qty) } : it))
    )
  }

  const clearCart = () => setItems([])

  const count = useMemo(() => items.reduce((acc, it) => acc + it.qty, 0), [items])
  const totalCLP = useMemo(() => items.reduce((acc, it) => acc + it.priceCLP * it.qty, 0), [items])

  const value: CartContextType = {
    items,
    addItem,
    removeItem,
    updateQty,
    clearCart,
    count,
    totalCLP,
    formatCLP,
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
