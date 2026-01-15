import { useRef, useState } from 'react'
import { FaInstagram, FaTiktok } from 'react-icons/fa'
import styles from './Footer.module.css'
import logoMark from '../../assets/images/nuevologo360.gif'

export const Footer = () => {
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

  return (
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
            <a href="mailto:bearysadcontacto@bearysad.com">bearysadcontacto@gmail.com</a>
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
  )
}

