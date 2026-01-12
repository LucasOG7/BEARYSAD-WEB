import styles from './Navbar.module.css'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import logoSrc from '../../assets/images/lapida360.gif'



export const Navbar = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const goCategorias = (e: React.MouseEvent) => {
        e.preventDefault()
        if (location.pathname !== '/') {
            navigate('/', { state: { scrollTo: 'categorias' } })
        } else {
            const el = document.getElementById('categorias')
            el?.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
    }
    return (
        <nav className={styles.navbar}>

            <div className={`${styles.navLinks} ${styles.leftLinks}`}>
                <Link
                    to="/"
                    onClick={goCategorias}
                    aria-label="Ir a categorías"
                    title="Ir a categorías"
                    className={styles.navChip}
                >
                    TIENDA
                </Link>
            </div>


            <div className={styles.logo}>
                <Link to="/" aria-label="Inicio" title="Inicio">
                    <img src={logoSrc} alt="Logo" className={styles.logoImage} />
                </Link>
            </div>
            <div className={styles.navLinks}>
                <Link
                    to="/cart"
                    aria-label="Carrito de compra"
                    title="Carrito de compra"
                    className={styles.navChip}
                >
                    CARRITO
                </Link>
            </div>
        </nav>

    )
}
