import styles from './Navbar.module.css'
import { Link } from 'react-router-dom'
import { FaShoppingCart, FaTshirt } from 'react-icons/fa'
import logoSrc from '../../assets/images/lapida360.gif'



export const Navbar = () => {
    return (
        <nav className={styles.navbar}>

            <div className={`${styles.navLinks} ${styles.leftLinks}`}>
                <Link to="/" aria-label="Merch" title="Merch">
                    <FaTshirt className={styles.merchIcon} />
                </Link>
            </div>


            <div className={styles.logo}>
                <Link to="/" aria-label="Inicio" title="Inicio">
                    <img src={logoSrc} alt="Logo" className={styles.logoImage} />
                </Link>
            </div>
            <div className={styles.navLinks}>
                <Link to="/cart" aria-label="Carrito de compra" title="Carrito de compra">
                    <FaShoppingCart className={styles.cartIcon} />
                </Link>
            </div>
        </nav>

    )
}
