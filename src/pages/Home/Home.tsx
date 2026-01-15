// Importaciones de estados y efectos
import { useEffect, useState } from 'react'

// Importaciones de componentes y utilidades
import { Link, useLocation } from 'react-router-dom'

// Importaciones de estilos e imagenes
import styles from './Home.module.css'
import img1 from '../../assets/images/tshirt.jpg'
import img2 from '../../assets/images/pants.jpg'
import img3 from '../../assets/images/capss.jpg'
import img4 from '../../assets/images/accesorios.jpg'
import icon1 from '../../assets/images/ICON1.jpg'
import icon2 from '../../assets/images/ICON2.jpg'
import icon3 from '../../assets/images/ICON3.jpg'
import icon4 from '../../assets/images/ICON4.jpg'
import icon5 from '../../assets/images/ICON5.jpg'
import icon6 from '../../assets/images/ICON6.jpg'
import icon7 from '../../assets/images/ICON7.jpg'
import icon8 from '../../assets/images/ICON8.png'
import icon9 from '../../assets/images/ICON9.jpg'
import icon10 from '../../assets/images/ICON10.jpg'
import icon11 from '../../assets/images/ICON11.jpg'
import icon12 from '../../assets/images/ICON12.jpg'
import icon13 from '../../assets/images/ICON13.jpg'
import icongif from '../../assets/images/ICONSgif.gif'
import icon14 from '../../assets/images/duko.jpg'

// Funcion para renderizar captions en seccion BEARY ICONS
export function Home() {
  const icons = [
    { src: icon1, handle: '@zellwow' },
    { src: icon2, handle: '@likeetnn + @kmarttype' },
    { src: icon3, handle: '@mont.pantoja' },
    { src: icon4, handle: '@richboywest' },
    { src: icon5, handle: '@richboywest' },
    { src: icon6, handle: '@_ninety.a' },
    { src: icon7, handle: '@richboywest' },
    { src: icon8, handle: '@richboywest + @mont.pantoja' },
    { src: icon9, handle: '@zellwow' },
    { src: icon10, handle: '@richboywest' },
    { src: icon11, handle: '@randynotagram' },
    { src: icon12, handle: '@richboywest' },
    { src: icon13, handle: '@richboywest' },
    { src: icongif, handle: '@pailita.k7k + @randynotagram' },
    { src: icon14, handle: '@duko' },
  ]
  const [current, setCurrent] = useState(0)

  const next = () => setCurrent((c) => (c + 1) % icons.length)

  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((c) => (c + 1) % icons.length)
    }, 3000)
    return () => clearInterval(id)
  }, [icons.length])

  const location = useLocation()
  useEffect(() => {
    const wantScroll =
      (location.state as { scrollTo?: string } | null)?.scrollTo === 'categorias' ||
      window.location.hash === '#categorias'
    if (wantScroll) {
      const el = document.getElementById('categorias')
      if (el) setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }), 0)
    }
  }, [location.state])

  const posClass = (i: number) => {
    if (i === current) return styles.iconsCenter
    if (i === (current + 1) % icons.length) return styles.iconsRight
    if (i === (current - 1 + icons.length) % icons.length) return styles.iconsLeft
    return styles.iconsBack
  }

  // Body HOME
  return (
    <>
      {/* Seccion Banner principal */}
      <section className={styles.banner}>
        <div className={styles.content}>
          <h1 className={styles.title}>BEARYSAD WORLD</h1>
        </div>
      </section>

      {/* Seccion Categorias */}
      <section className={styles.merchSection} id="categorias">
        <div className={styles.merchHeader}>
          <h2 className={styles.merchTitle}>CATEGORÍAS</h2>
        </div>
        <div className={styles.cardsGrid}>
          <article className={styles.card}>
            <img src={img1} alt="T-SHIRTS" className={styles.cardImage} />
            <div className={styles.cardBody}>
              <Link to="/categoria/t-shirts" className={styles.cardTitle} aria-label="Ver categoría T-SHIRTS">
                T-SHIRTS
              </Link>
            </div>
          </article>
          <article className={styles.card}>
            <img src={img2} alt="PANTS" className={styles.cardImage} />
            <div className={styles.cardBody}>
              <Link to="/categoria/pants" className={styles.cardTitle} aria-label="Ver categoría PANTS">
                PANTS
              </Link>
            </div>
          </article>
          <article className={styles.card}>
            <img src={img3} alt="CAPS" className={styles.cardImage} />
            <div className={styles.cardBody}>
              <Link to="/categoria/caps" className={styles.cardTitle} aria-label="Ver categoría CAPS">
                CAPS
              </Link>
            </div>
          </article>
          <article className={styles.card}>
            <img src={img4} alt="ACCESORIES" className={styles.cardImage} />
            <div className={styles.cardBody}>
              <Link to="/categoria/accesories" className={styles.cardTitle} aria-label="Ver categoría ACCESORIES">
                ACCESORIES
              </Link>
            </div>
          </article>
        </div>
      </section>

      {/* Seccion BEARY ICONS */}
      <section className={styles.CreatorsSection}>
        <div className={styles.CreatorsInner}>
          <div className={styles.iconsTitle}>
            <h2 className={styles.iconsTitleMain}>BEARY ICONS</h2>
          </div>
          <div className={styles.iconsStage} onClick={next}>
            {icons.map((icon, i) => (
              <div key={i} className={`${styles.iconsSlide} ${posClass(i)}`}>
                <img src={icon.src} alt="BEARY ICON" />
              </div>
            ))}
            <div className={styles.iconsCaption}>{icons[current].handle}</div>
          </div>
        </div>
      </section>

      
    </>
  )
}
