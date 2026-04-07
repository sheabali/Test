export interface Category {
  id: string
  name: string
  icon: string
}

export interface IconSliderItem {
  id: string
  icon: string
  label: string
  href: string
}

export interface OfferBadge {
  id: string
  image: string
  title: string
  href: string
}

export interface Brochure {
  id: string
  image: string
  storeName: string
  title: string
  startDate: string
  endDate: string
  href: string
}

export interface Store {
  id: string
  logo: string
  name: string
  href: string
}
