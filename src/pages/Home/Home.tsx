import { useEffect, useRef, useState } from 'react'
import { FaInstagram, FaTiktok } from "react-icons/fa";
import { useLocation } from 'react-router-dom'
import styles from './Home.module.css'
import logoMark from '../../assets/images/nuevologo360.gif'
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
  const brandRef = useRef<HTMLDivElement>(null)
  const [distort, setDistort] = useState(false)
  const turbRef = useRef<SVGFETurbulenceElement | null>(null)
  const dispRef = useRef<SVGFEDisplacementMapElement | null>(null)
  const lastRef = useRef({ x: 0, y: 0, t: 0 })
  const energyRef = useRef(0)
  const animRef = useRef<number | null>(null)
  const tick = (t: number) => {
    energyRef.current *= 0.988
    const wobble = Math.sin(t * 0.015) + 0.7 * Math.sin(t * 0.033) + 0.4 * Math.sin(t * 0.067)
    const scale = 3 + 2 * wobble + 6 * energyRef.current
    const baseF = 0.006 + 0.0018 * (1 + Math.sin(t * 0.02)) + 0.0012 * energyRef.current
    if (dispRef.current) dispRef.current.setAttribute('scale', scale.toFixed(1))
    if (turbRef.current) turbRef.current.setAttribute('baseFrequency', baseF.toFixed(4))
    animRef.current = requestAnimationFrame(tick)
  }

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

  return (
    <>
      <section className={styles.banner}>
        <div className={styles.content}>
          <h1 className={styles.title}>BEARYSAD WORLD</h1>
        </div>
      </section>

      <section className={styles.merchSection} id="categorias">
        <div className={styles.merchHeader}>
          <h2 className={styles.merchTitle}>CATEGORÍAS</h2>
        </div>
        <div className={styles.cardsGrid}>
          <article className={styles.card}>
            <img src={img1} alt="T-SHIRTS" className={styles.cardImage} />
            <div className={styles.cardBody}>
              <button className={styles.cardTitle}>T-SHIRTS</button>
            </div>
          </article>
          <article className={styles.card}>
            <img src={img2} alt="PANTS" className={styles.cardImage} />
            <div className={styles.cardBody}>
              <button className={styles.cardTitle}>PANTS</button>
            </div>
          </article>
          <article className={styles.card}>
            <img src={img3} alt="CAPS" className={styles.cardImage} />
            <div className={styles.cardBody}>
              <button className={styles.cardTitle}>CAPS</button>
            </div>
          </article>
          <article className={styles.card}>
            <img src={img4} alt="ACCESORIES" className={styles.cardImage} />
            <div className={styles.cardBody}>
              <button className={styles.cardTitle}>ACCESORIES</button>
            </div>
          </article>
        </div>
      </section>

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


      <section
        className={styles.FooterSeccion}
        onMouseEnter={() => {
          setDistort(true)
          if (!animRef.current) animRef.current = requestAnimationFrame(tick)
        }}
        onMouseMove={(e) => {
          const r = e.currentTarget.getBoundingClientRect()
          const nx = (e.clientX - r.left) / r.width
          const ny = (e.clientY - r.top) / r.height
          const x = nx * 100
          const y = ny * 100
          e.currentTarget.style.setProperty('--mx', `${x}%`)
          e.currentTarget.style.setProperty('--my', `${y}%`)
          const now = performance.now()
          const dx = e.clientX - lastRef.current.x
          const dy = e.clientY - lastRef.current.y
          const dt = Math.max(12, now - lastRef.current.t)
          const speed = Math.hypot(dx, dy) / dt
          const boost = Math.min(1, speed * 0.07)
          energyRef.current = Math.min(1, energyRef.current + boost)
          if (!animRef.current) animRef.current = requestAnimationFrame(tick)
          lastRef.current = { x: e.clientX, y: e.clientY, t: now }
          setDistort(true)
        }}
        onMouseLeave={() => {
          setDistort(false)
          energyRef.current = 0
          if (dispRef.current) dispRef.current.setAttribute('scale', '0')
          if (turbRef.current) turbRef.current.setAttribute('baseFrequency', '0.006')
          if (animRef.current) {
            cancelAnimationFrame(animRef.current)
            animRef.current = null
          }
        }}
      >
        <svg width="0" height="0" style={{ position: 'absolute' }}>
          <filter id="footerDistort">
            <feTurbulence ref={turbRef} type="fractalNoise" baseFrequency="0.006" numOctaves="4" seed="2" />
            <feDisplacementMap ref={dispRef} in="SourceGraphic" scale="0" xChannelSelector="R" yChannelSelector="G" />
          </filter>
        </svg>
        <div
          ref={brandRef}
          className={`${styles.FooterBrandBig} ${distort ? styles.FooterBrandDistort : ''}`}
          data-text="BEARYSAD"
        >
          BEARYSAD
        </div>
        <div className={styles.FooterInner}>
          <div className={styles.FooterCol}>
            <img src={logoMark} alt="Bearysad" className={styles.FooterImage} />
          </div>
          <div className={styles.FooterCol}>
            <div className={styles.FooterHead}>Contacto</div>
            <div className={styles.FooterList}>
              <a href="mailto:bearysadcontacto@bearysad.com">bearysadcontacto@bearysad.com</a>
            </div>
          </div>
          <div className={styles.FooterCol}>
            <div className={styles.FooterHead}>Redes Sociales</div>
            <nav className={styles.FooterList}>
              <a href="https://instagram.com/beaarysad" target="_blank" rel="noopener noreferrer">
                <FaInstagram className={styles.FooterIcon} />
              </a>
              <a href="*" target="_blank" rel="noopener noreferrer">
                <FaTiktok className={styles.FooterIcon} />
              </a>
            </nav>
          </div>
          <div className={styles.FooterCopy}>© {new Date().getFullYear()} BEARYSAD. Todos los derechos reservados.</div>
        </div>
      </section>
    </>
  )
}
