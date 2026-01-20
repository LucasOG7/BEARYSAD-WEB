import styles from './Cart.module.css'
import { useCart } from '../../contexts/CartContextBase'
import { RiDeleteBin5Fill } from "react-icons/ri";

export const Cart = () => {
  const { items, updateQty, removeItem, totalCLP, formatCLP, clearCart } = useCart()
  return (
    <section className={styles.page}>
      <div className={styles.inner}>
        <header className={styles.header}>
          <h1 className={styles.title}>Carrito</h1>
        </header>

        <div className={styles.grid}>
          <div className={styles.list}>
            {items.length === 0 ? (
              <div className={styles.empty}>Tu carrito está vacío</div>
            ) : (
              items.map((it) => (
                <div key={`${it.id}-${it.size ?? ''}`} className={styles.card}>
                  <div className={styles.media}>
                    <img src={it.imageSrc} alt={it.title} />
                  </div>
                  <div className={styles.info}>
                    <div className={styles.itemTitle}>{it.title}</div>
                    <div className={styles.meta}>
                      <span>Talla: {it.size ?? '—'}</span>
                      <div className={styles.qtyControls}>
                        <button
                          className={styles.qtyBtn}
                          onClick={() => updateQty({ id: it.id, size: it.size }, Math.max(1, it.qty - 1))}
                          aria-label="Disminuir cantidad"
                        >
                          −
                        </button>
                        <input
                          className={styles.qtyInput}
                          type="number"
                          min={1}
                          value={it.qty}
                          onChange={(e) => {
                            const v = parseInt(e.target.value || '1', 10)
                            updateQty({ id: it.id, size: it.size }, Number.isNaN(v) ? 1 : Math.max(1, v))
                          }}
                          aria-label="Cantidad"
                        />
                        <button
                          className={styles.qtyBtn}
                          onClick={() => updateQty({ id: it.id, size: it.size }, it.qty + 1)}
                          aria-label="Aumentar cantidad"
                        >
                          +
                        </button>
                        <button
                          className={styles.removeBtn}
                          onClick={() => removeItem({ id: it.id, size: it.size })}
                          aria-label="Eliminar del carrito"
                        >
                          <RiDeleteBin5Fill />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className={styles.price}>{formatCLP(it.priceCLP * it.qty)}</div>
                </div>
              ))
            )}
          </div>

          <aside className={styles.summary}>
            <div className={styles.row}>
              <div className={styles.summaryTitle}>Resumen de la compra</div>
            </div>
            <div className={styles.row}>
              <span>Total</span>
              <span className={styles.total}>{formatCLP(totalCLP)}</span>
            </div>
            <button className={styles.checkout} onClick={() => clearCart()} aria-label="Finalizar compra">
              Finalizar compra
            </button>
          </aside>
        </div>
      </div>
    </section>
  )
}
