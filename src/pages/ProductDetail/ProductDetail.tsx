import { useParams } from 'react-router-dom'
import styles from './ProductDetail.module.css'
import tshirtImg from '../../assets/images/tshirt.jpg'
import pantsImg from '../../assets/images/pants.jpg'
import capsImg from '../../assets/images/capss.jpg'
import accessoriesImg from '../../assets/images/accesorios.jpg'
import { useMemo, useState } from 'react'
import { categoryConfig } from '../../data/catalog'
import { useCart } from '../../contexts/CartContextBase'
import { RiShoppingBasketFill, RiErrorWarningFill } from "react-icons/ri";

export const ProductDetail = () => {
  const { id } = useParams<{ id: string }>()
  const product = useMemo(() => {
    const all = Object.values(categoryConfig).flatMap((c) => c.products)
    const match = all.find((p) => p.id === id)
    if (match) {
      const imgs = Array.from({ length: 6 }, () => match.imageSrc)
      const prefix = (id ?? '').slice(0, 2)
      const sizes = prefix === 'ac' ? ['Única'] : prefix === 'ca' ? ['S', 'M', 'L'] : ['S', 'M', 'L', 'XL']
      return { title: match.title, price: match.price, images: imgs, sizes }
    }
    const prefix = (id ?? '').slice(0, 2)
    if (prefix === 'ts') return { title: 'Bearysad Tee', price: '$22.990', images: [tshirtImg, tshirtImg, tshirtImg, tshirtImg, tshirtImg, tshirtImg], sizes: ['S', 'M', 'L', 'XL'] }
    if (prefix === 'pa') return { title: 'Bearysad Pants', price: '$39.990', images: [pantsImg, pantsImg, pantsImg, pantsImg, pantsImg, pantsImg], sizes: ['S', 'M', 'L', 'XL'] }
    if (prefix === 'ca') return { title: 'Bearysad Cap', price: '$16.990', images: [capsImg, capsImg, capsImg, capsImg, capsImg, capsImg], sizes: ['S', 'M', 'L'] }
    if (prefix === 'ac') return { title: 'Bearysad Accessory', price: '$12.990', images: [accessoriesImg, accessoriesImg, accessoriesImg, accessoriesImg, accessoriesImg, accessoriesImg], sizes: ['Única'] }
    return { title: 'Producto Bearysad', price: '$19.990', images: [tshirtImg, tshirtImg, tshirtImg, tshirtImg, tshirtImg, tshirtImg], sizes: ['S', 'M', 'L', 'XL'] }
  }, [id])

  const [active, setActive] = useState(0)
  const [selectedSize, setSelectedSize] = useState<string | null>(null)
  const [qty, setQty] = useState(1)
  const [added, setAdded] = useState(false)
  const [showAlert, setShowAlert] = useState(false)
  const { addItem } = useCart()

  const handleAdd = () => {
    const requiresSize = product.sizes.length > 1
    if (requiresSize && !selectedSize) {
      setShowAlert(true)
      return
    }
    addItem({
      id: id ?? 'unknown',
      title: product.title,
      imageSrc: product.images[0],
      priceLabel: product.price,
      size: selectedSize,
      qty,
    })
    setAdded(true)
    setTimeout(() => setAdded(false), 650)
  }

  return (
    <section className={styles.page}>
      <div className={styles.inner}>
        <div className={styles.productContainer}>
          <div className={styles.gallery}>
            <div className={styles.mainMedia}>
              <img className={styles.mainImage} src={product.images[active]} alt={product.title} />
            </div>
            <div className={styles.thumbs}>
              {product.images.map((src, i) => (
                <button
                  key={i}
                  className={`${styles.thumb} ${active === i ? styles.thumbActive : ''}`}
                  onClick={() => setActive(i)}
                  aria-label={`Ver imagen ${i + 1}`}
                >
                  <img src={src} alt={`Imagen ${i + 1} de ${product.title}`} />
                </button>
              ))}
            </div>
          </div>
          <div className={styles.details}>
            <h1 className={styles.productTitle}>{product.title}</h1>
            <div className={styles.price}>{product.price}</div>

            <div className={styles.sizeGroup}>
              <div className={styles.sizeLabel}>Tallas disponibles</div>
              <div className={styles.sizes}>
                {product.sizes.map((s) => (
                  <button
                    key={s}
                    className={`${styles.sizeChip} ${selectedSize === s ? styles.sizeChipActive : ''}`}
                    onClick={() => {
                      setSelectedSize(s)
                      if (showAlert) setShowAlert(false)
                    }}
                    aria-label={`Seleccionar talla ${s}`}
                  >
                    {s}
                  </button>
                ))}
              </div>
              {showAlert ? (
                <div className={styles.sizeAlert} role="alert" aria-live="assertive">
                  <RiErrorWarningFill />
                  Selecciona una talla antes de agregar
                </div>
              ) : null}
            </div>

            <div className={styles.qtyGroup}>
              <div className={styles.qtyLabel}>Cantidad</div>
              <div className={styles.qtyControl}>
                <button
                  className={styles.qtyBtn}
                  onClick={() => setQty((q) => Math.max(1, q - 1))}
                  aria-label="Disminuir cantidad"
                >
                  −
                </button>
                <input
                  className={styles.qtyInput}
                  type="number"
                  min={1}
                  value={qty}
                  onChange={(e) => {
                    const v = parseInt(e.target.value || '1', 10)
                    setQty(Number.isNaN(v) ? 1 : Math.max(1, v))
                  }}
                  aria-label="Cantidad"
                />
                <button
                  className={styles.qtyBtn}
                  onClick={() => setQty((q) => q + 1)}
                  aria-label="Aumentar cantidad"
                >
                  +
                </button>
              </div>
            </div>

            <div className={styles.cartActions}>
              <button
                className={`${styles.addButton} ${added ? styles.added : ''}`}
                onClick={handleAdd}
                aria-label="Agregar al carrito"
              >
                <RiShoppingBasketFill /> &nbsp;
                Agregar al carrito
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
