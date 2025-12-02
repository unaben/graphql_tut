"use client";

import Link from "next/link";
import { useQuery } from "@apollo/client";
import { ApiProductResponse } from "./ProductList.types";
import { PRODUCTS_QUERY } from "./utils";
import styles from "./ProductList.module.css";
import Image from "next/image";

const ProductList = () => {
  const { data, loading, error } = useQuery<ApiProductResponse>(PRODUCTS_QUERY);

  if (error) {
    return <p>{error.message}</p>
  }

  return (
    <>
      {loading && <p>Loading...</p>}
      {!loading && (
        <ul className={styles.cards}>
          {data?.products.map((product) => (
            <li key={product.id} className={styles.card}>
              <Link href={`/products/${product.id}`}>
                <h2>Product</h2>
                <h3>Name: {product.name}</h3>
                <p>Description: {product.description}</p>
                <Image
                  width={60}
                  height={60}
                  src={product.image}
                  alt={product.name}
                />
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default ProductList;
