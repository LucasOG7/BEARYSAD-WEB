import tshirtImg from '../assets/images/tshirt.jpg'
import pantsImg from '../assets/images/pants.jpg'
import capsImg from '../assets/images/capss.jpg'
import accessoriesImg from '../assets/images/accesorios.jpg'

export type CategorySlug = 't-shirts' | 'pants' | 'caps' | 'accesories'

export type ProductMock = {
  id: string
  title: string
  price: string
  imageSrc: string
  tag?: string
}

export type CategoryConfig = {
  title: string
  accent: 'gold' | 'silver' | 'platinum'
  products: ProductMock[]
}

export const categoryConfig: Record<CategorySlug, CategoryConfig> = {
  't-shirts': {
    title: 'T-SHIRTS',
    accent: 'platinum',
    products: [
      { id: 'ts-001', title: 'Bearysad Classic', price: '$19.990', imageSrc: tshirtImg, tag: 'NEW' },
      { id: 'ts-002', title: 'Bearysad Oversize', price: '$24.990', imageSrc: tshirtImg, tag: 'DROP' },
      { id: 'ts-003', title: 'Bearysad Vintage Wash', price: '$26.990', imageSrc: tshirtImg },
      { id: 'ts-004', title: 'Bearysad Graphic', price: '$22.990', imageSrc: tshirtImg },
      { id: 'ts-005', title: 'Bearysad Minimal', price: '$18.990', imageSrc: tshirtImg },
      { id: 'ts-006', title: 'Bearysad Limited', price: '$29.990', imageSrc: tshirtImg, tag: 'LIMITED' },
    ],
  },
  pants: {
    title: 'R4W PANTS',
    accent: 'silver',
    products: [
      { id: 'pa-001', title: 'Bearysad Straight', price: '$34.990', imageSrc: pantsImg, tag: 'HOT' },
      { id: 'pa-002', title: 'Bearysad Baggy', price: '$39.990', imageSrc: pantsImg },
      { id: 'pa-003', title: 'Bearysad Cargo', price: '$44.990', imageSrc: pantsImg, tag: 'DROP' },
      { id: 'pa-004', title: 'Bearysad Utility', price: '$42.990', imageSrc: pantsImg },
      { id: 'pa-005', title: 'Bearysad Workwear', price: '$46.990', imageSrc: pantsImg },
      { id: 'pa-006', title: 'Bearysad Night', price: '$49.990', imageSrc: pantsImg, tag: 'LIMITED' },
    ],
  },
  caps: {
    title: 'CAPS',
    accent: 'gold',
    products: [
      { id: 'ca-001', title: 'Bearysad Black', price: '$14.990', imageSrc: capsImg, tag: 'NEW' },
      { id: 'ca-002', title: 'Bearysad Washed', price: '$16.990', imageSrc: capsImg },
      { id: 'ca-003', title: 'Bearysad Trucker', price: '$17.990', imageSrc: capsImg, tag: 'DROP' },
      { id: 'ca-004', title: 'Bearysad Logo', price: '$15.990', imageSrc: capsImg },
      { id: 'ca-005', title: 'Bearysad Two Tone', price: '$16.990', imageSrc: capsImg },
      { id: 'ca-006', title: 'Bearysad Limited', price: '$19.990', imageSrc: capsImg, tag: 'LIMITED' },
    ],
  },
  accesories: {
    title: 'ACCESORIES',
    accent: 'gold',
    products: [
      { id: 'ac-001', title: 'Bearysad Steel', price: '$12.990', imageSrc: accessoriesImg, tag: 'NEW' },
      { id: 'ac-002', title: 'Bearysad Keychain Logo', price: '$6.990', imageSrc: accessoriesImg },
      { id: 'ac-003', title: 'Bearysad Bag Mini', price: '$18.990', imageSrc: accessoriesImg, tag: 'DROP' },
      { id: 'ac-004', title: 'Bearysad Bracelet Black', price: '$9.990', imageSrc: accessoriesImg },
      { id: 'ac-005', title: 'Bearysad Ring Silver', price: '$11.990', imageSrc: accessoriesImg },
      { id: 'ac-006', title: 'Bearysad Limited', price: '$24.990', imageSrc: accessoriesImg, tag: 'LIMITED' },
    ],
  },
}

