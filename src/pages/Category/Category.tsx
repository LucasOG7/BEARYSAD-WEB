import { Link, useParams } from 'react-router-dom'
import styles from './Category.module.css'

import tshirtImg from '../../assets/images/tshirt.jpg'
import pantsImg from '../../assets/images/pants.jpg'
import capsImg from '../../assets/images/capss.jpg'
import accessoriesImg from '../../assets/images/accesorios.jpg'

type CategorySlug = 't-shirts' | 'pants' | 'caps' | 'accesories'

type ProductMock = {
  id: string
  title: string
  price: string
  imageSrc: string
  tag?: string
}

type CategoryConfig = {
  title: string
  subtitle: string
  accent: 'gold' | 'silver' | 'platinum'
  products: ProductMock[]
}

const categoryConfig: Record<CategorySlug, CategoryConfig> = {
  't-shirts': {
    title: 'T-SHIRTS',
    subtitle: 'Drops, fits y piezas esenciales.',
    accent: 'platinum',
    products: [
      { id: 'ts-001', title: 'Bearysad Tee — Classic', price: '$19.990', imageSrc: tshirtImg, tag: 'NEW' },
      { id: 'ts-002', title: 'Bearysad Tee — Oversize', price: '$24.990', imageSrc: tshirtImg, tag: 'DROP' },
      { id: 'ts-003', title: 'Bearysad Tee — Vintage Wash', price: '$26.990', imageSrc: tshirtImg },
      { id: 'ts-004', title: 'Bearysad Tee — Graphic', price: '$22.990', imageSrc: tshirtImg },
      { id: 'ts-005', title: 'Bearysad Tee — Minimal', price: '$18.990', imageSrc: tshirtImg },
      { id: 'ts-006', title: 'Bearysad Tee — Limited', price: '$29.990', imageSrc: tshirtImg, tag: 'LIMITED' },
    ],
  },
  pants: {
    title: 'PANTS',
    subtitle: 'Cortes modernos, comodidad real.',
    accent: 'silver',
    products: [
      { id: 'pa-001', title: 'Bearysad Pants — Straight', price: '$34.990', imageSrc: pantsImg, tag: 'HOT' },
      { id: 'pa-002', title: 'Bearysad Pants — Baggy', price: '$39.990', imageSrc: pantsImg },
      { id: 'pa-003', title: 'Bearysad Pants — Cargo', price: '$44.990', imageSrc: pantsImg, tag: 'DROP' },
      { id: 'pa-004', title: 'Bearysad Pants — Utility', price: '$42.990', imageSrc: pantsImg },
      { id: 'pa-005', title: 'Bearysad Pants — Workwear', price: '$46.990', imageSrc: pantsImg },
      { id: 'pa-006', title: 'Bearysad Pants — Night', price: '$49.990', imageSrc: pantsImg, tag: 'LIMITED' },
    ],
  },
  caps: {
    title: 'CAPS',
    subtitle: 'Detalles arriba. Actitud siempre.',
    accent: 'gold',
    products: [
      { id: 'ca-001', title: 'Bearysad Cap — Black', price: '$14.990', imageSrc: capsImg, tag: 'NEW' },
      { id: 'ca-002', title: 'Bearysad Cap — Washed', price: '$16.990', imageSrc: capsImg },
      { id: 'ca-003', title: 'Bearysad Cap — Trucker', price: '$17.990', imageSrc: capsImg, tag: 'DROP' },
      { id: 'ca-004', title: 'Bearysad Cap — Logo', price: '$15.990', imageSrc: capsImg },
      { id: 'ca-005', title: 'Bearysad Cap — Two Tone', price: '$16.990', imageSrc: capsImg },
      { id: 'ca-006', title: 'Bearysad Cap — Limited', price: '$19.990', imageSrc: capsImg, tag: 'LIMITED' },
    ],
  },
  accesories: {
    title: 'ACCESORIES',
    subtitle: 'El upgrade final del outfit.',
    accent: 'gold',
    products: [
      { id: 'ac-001', title: 'Bearysad Chain — Steel', price: '$12.990', imageSrc: accessoriesImg, tag: 'NEW' },
      { id: 'ac-002', title: 'Bearysad Keychain — Logo', price: '$6.990', imageSrc: accessoriesImg },
      { id: 'ac-003', title: 'Bearysad Bag — Mini', price: '$18.990', imageSrc: accessoriesImg, tag: 'DROP' },
      { id: 'ac-004', title: 'Bearysad Bracelet — Black', price: '$9.990', imageSrc: accessoriesImg },
      { id: 'ac-005', title: 'Bearysad Ring — Silver', price: '$11.990', imageSrc: accessoriesImg },
      { id: 'ac-006', title: 'Bearysad Pack — Limited', price: '$24.990', imageSrc: accessoriesImg, tag: 'LIMITED' },
    ],
  },
}

export function Category() {
  const { slug } = useParams<{ slug: string }>()
  const category = (slug ? categoryConfig[slug as CategorySlug] : undefined) ?? null

  if (!category) {
    return (
      <section className={styles.page}>
        <div className={styles.container}>
          <header className={styles.header}>
            <h1 className={styles.title}>CATEGORÍA NO ENCONTRADA</h1>
            <p className={styles.subtitle}>Vuelve a la tienda y elige una categoría válida.</p>
            <div className={styles.headerActions}>
              <Link className={styles.backButton} to="/">
                Volver al inicio
              </Link>
            </div>
          </header>
        </div>
      </section>
    )
  }

  return (
    <section className={`${styles.page} ${styles[`accent_${category.accent}`]}`}>
      <div className={styles.container}>
        <header className={styles.header}>
          <div className={styles.kicker}>BEARYSAD WORLD</div>
          <h1 className={styles.title}>{category.title}</h1>

        </header>

        <section className={styles.grid} aria-label={`Productos de ${category.title}`}>
          {category.products.map((p) => (
            <article key={p.id} className={styles.card}>
              <Link to={`/product/${p.id}`} className={styles.cardLink} aria-label={`Ver ${p.title}`}>
                <div className={styles.cardMedia}>
                  {p.tag ? <div className={styles.cardTag}>{p.tag}</div> : null}
                  <img className={styles.cardImage} src={p.imageSrc} alt={p.title} loading="lazy" />
                </div>
                <div className={styles.cardBody}>
                  <div className={styles.cardTitle}>{p.title}</div>
                  <div className={styles.cardMeta}>
                    <span className={styles.cardPrice}>{p.price}</span>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </section>
      </div>
    </section>
  )
}

