import { ICategory } from "@/model/category.types";
import { IContext } from "@/model/interface";

export const Category = {
  products: (
    parent: ICategory,
    args: { filter: { onSale: boolean } },
    context: unknown
  ) => {
    const { products } = context as IContext;

    const { id } = parent;
    const { filter } = args;

    if (filter) {
      if (filter.onSale) {
        return products.filter((product) => product.onSale);
      }
      if (!filter.onSale) {
        return products.filter((product) => !product.onSale);
      }
    } else {
      return products.filter((product) => product.categoryId === id);
    }
  },
};
