import { IContext } from "@/model/interface";

export const Query = {
  products: (
    _parent: unknown,
    args: { filter: { onSale: boolean } },
    context: unknown
  ) => {
    const { filter } = args;

    const { products } = context as IContext;    

    if (filter) {
      if (filter.onSale) {
        return products.filter((product) => product.onSale);
      }
      if (!filter.onSale) {
        return products.filter((product) => !product.onSale);
      }
    } else {
      return products;
    }
  },
  product: (_parent: unknown, args: { id: string }, context: unknown) => {
    const { id: productId } = args;
    const { products } = context as IContext;
    return products.find((product) => product.id === productId);
  },
  categories: (_parent: unknown, _args: unknown, context: unknown) => {
    const { categories } = context as IContext;
    return categories;
  },
  category: (_parent: unknown, args: { id: string }, context: unknown) => {
    const { id } = args;
    const { categories } = context as IContext;
    return categories.find((category) => category.id === id);
  },
  reviews: (_parent: unknown, _args: unknown, context: unknown) => {
    const { reviews } = context as IContext;
    return reviews;
  },
  review: (_parent: unknown, args: { id: string }, context: unknown) => {
    const { id } = args;
    const { reviews } = context as IContext;
    return reviews.find((review) => review.id === id);
  },
};
