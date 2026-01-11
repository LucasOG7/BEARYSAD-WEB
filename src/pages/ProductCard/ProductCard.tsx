import { Link } from 'react-router-dom'
import { Product } from './types/product'   
import styles from './ProductCard.module.css'


interface ProductCardProps {
    product: Product
}

export const ProductCard = ({ product }: ProductCardProps) => {
    return (
        <div className={styles.productCard}>
            <Link to={`/product/${product.id}`}>
                <img src={product.image} alt={product.title} />
                <h3>{product.title}</h3>
                <p>${product.price}</p>
            </Link>
        </div>
    )
}