export interface ISoftware {
  id: string
  created_at: string
  productName: string
  lowDescription: string
  longDescription: string
  price: number
  updated_at: string
  seller: string
  directLink: string
  imageUrl: string
  rating: number
  founderName: string
  founderDescription: string
  founderImage: string
  linkdin: string
  category: {
    id: string
    categoryName: string
  }
}
