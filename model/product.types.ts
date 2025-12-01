export type IProduct  ={
    id: string
    name: string
    description: string
    quantity: number
    price: number
    image: string
    onSale: boolean
    categoryId: string | null
  }