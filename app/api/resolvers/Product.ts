import { IContext } from "@/model/interface";
import { IProduct } from "@/model/product.types";
import { IReview } from "@/model/review.types";

export const Product = {
  reviews: (parent: IReview, _: unknown, context: unknown) => {
    const { id } = parent;
    const { reviews } = context as IContext;
    return reviews.filter((review) => review.productId === id);
  },
  category: (parent: IProduct, _: unknown, context: unknown) => {
    const { categoryId } = parent;
    const { categories } = context as IContext;
    return categories.find((category) => category.id === categoryId);
  },
};
