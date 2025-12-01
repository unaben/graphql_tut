import { ICategory } from "./category.types";
import { IProduct } from "./product.types";
import { IReview } from "./review.types";

export type IContext = {
  products: Array<IProduct>;
  reviews: Array<IReview>;
  categories: Array<ICategory>;
};
