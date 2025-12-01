import { reviews } from "@/db";
import { ICategory } from "@/model/category.types";
import { IContext } from "@/model/interface";
import { IAddCategory } from "@/model/mutation.types";
import { IProduct } from "@/model/product.types";
import { IReview } from "@/model/review.types";
import { v4 as uuidv4 } from "uuid";

export const Mutation = {
  addCategory: (
    _parent: unknown,
    { input }: { input: IAddCategory },
    context: unknown
  ) => {
    const { categories } = context as IContext;

    const { name } = input;

    const categoryToCreate = {
      id: uuidv4(),
      name,
    };

    categories.push(categoryToCreate);

    return categoryToCreate;
  },

  addProduct: (
    _parent: unknown,
    { input }: { input: Omit<IProduct, "id"> },
    context: unknown
  ) => {
    const { products } = context as IContext;

    const { categoryId, description, image, name, onSale, price, quantity } =
      input;

    const productToCreate = {
      id: uuidv4(),
      name,
      categoryId,
      description,
      image,
      onSale,
      price,
      quantity,
    };

    products.push(productToCreate);

    return productToCreate;
  },

  addReview: (
    _parent: unknown,
    { input }: { input: Omit<IReview, "id"> },
    context: unknown
  ) => {
    const { reviews } = context as IContext;

    const { comment, date, productId, rating, title } = input;

    const reviewToCreate = {
      id: uuidv4(),
      comment,
      date,
      productId,
      rating,
      title,
    };

    reviews.push(reviewToCreate);

    return reviewToCreate;
  },

  deleteProduct: (_: unknown, { id }: { id: string }, context: unknown) => {
    let { products, reviews } = context as IContext;
    products = products.filter((product) => product.id !== id);
    reviews = reviews.filter((review) => review.productId !== id);
    return true;
  },

  deleteCategory: (_: unknown, { id }: { id: string }, context: unknown) => {
    let { products, categories } = context as IContext;
    categories = categories.filter((category) => category.id !== id);
    products = products.map((product) => {
      if (product.categoryId === id) {
        return { ...product, categoryId: null };
      } else {
        return product;
      }
    });
    return true;
  },

  deleteReview: (_: unknown, { id }: { id: string }, context: unknown) => {
    let { reviews } = context as IContext;
    reviews = reviews.filter((review) => review.id !== id);
    return true;
  },

  updateCategory: (
    _: unknown,
    { id, input }: { id: string; input: ICategory },
    context: unknown
  ) => {
    let { categories } = context as IContext;
    const foundIndex = categories.findIndex(category => category.id === id)

    categories = categories.map((category) => {
      if (category.id === id) {
        return {...input, id: category.id};
      } else {
        return category;
      }
    });
    
    return categories[foundIndex]
  },

  updateProduct: (
    _: unknown,
    { id, input }: { id: string; input: IProduct },
    context: unknown
  ) => {
    let { products } = context as IContext;
    const foundIndex = products.findIndex(product => product.id === id)

    products = products.map((product) => {
      if (product.id === id) {
        return {...input, id: product.id};
      } else {
        return product;
      }
    });
    
    return products[foundIndex]
  },

  updateReview: (
    _: unknown,
    { id, input }: { id: string; input: IReview },
    context: unknown
  ) => {
    let { reviews } = context as IContext;
    const foundIndex = reviews.findIndex(review => review.id === id)

    reviews = reviews.map((review) => {
      if (review.id === id) {
        return {...input, id: review.id};
      } else {
        return review;
      }
    });
    
    return reviews[foundIndex]
  },
};
