

type ApiProduct = {
  name: string;
  description: string;
  id: string;
  image: string;
};

export type ApiProductResponse = {
  products: Array<ApiProduct>
};
