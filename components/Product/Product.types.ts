export type ApiReviewData = {
    rating: number;
    title: string;
    date: string;
    comment: string;
  }

export type ProductData = {
    name: string;
    description: string;
    price: number;
    quantity: number;
    id: string;
    image: string;
    onSale: boolean;
    reviews: Array<ApiReviewData> | ApiReviewData;
  };

  export type ApiProductData = {
    product: ProductData
  }