import { useParams } from 'react-router-dom'
import styles from './ProductDetail.module.css'

export const ProductDetail = () => {
  const { id } = useParams<{ id: string }>()
  return (
    <section className={styles.page}>
      <div className={styles.inner}>
        <h2>Producto ID: {id}</h2>
      </div>
    </section>
  )
}
