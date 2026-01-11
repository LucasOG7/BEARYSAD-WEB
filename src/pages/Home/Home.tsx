import styles from './Home.module.css'
import img1 from '../../assets/images/tshirt.jpg'
import img2 from '../../assets/images/pants.jpg'
import img3 from '../../assets/images/capss.jpg'
import img4 from '../../assets/images/accesorios.jpg'

export function Home() {
  return (
    <>
      <section className={styles.banner}>
        <div className={styles.content}>
          <h1 className={styles.title}>WELCOME TO BEARYSAD WORLD</h1>
        </div>
      </section>

      <section className={styles.merchSection}>
        <div className={styles.merchHeader}>
          <h2 className={styles.merchTitle}>☆ BEARY TYPES ☆</h2>
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
    </>
  )
}
