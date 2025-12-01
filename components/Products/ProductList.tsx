"use client";

import { useQuery } from "@apollo/client";
import { ApiProductResponse } from "./ProductList.types";
import { PRODUCTS_QUERY } from "./utils";
import styles from './ProductList.module.css'
import Link from "next/link";

const ProductList = () => {
  const { data, loading, error,  } = useQuery<ApiProductResponse>(PRODUCTS_QUERY);
  console.log({ data });

  return (
    <ul className={styles.cards}>
      {data?.products.map((product) => (
        <li key={product.id} className={styles.card}>
          <Link href={`/products/${product.id}`}>
          <h2>Product</h2>
          <h3>Name: {product.name}</h3>
          <p>Description: {product.description}</p>
          <p>Image : {product.image}</p>          
          </Link>         
        </li>
      ))}
    </ul>
  );
};

export default ProductList;
