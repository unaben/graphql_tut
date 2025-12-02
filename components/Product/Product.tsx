import React from "react";
import Image from "next/image";
import { PRODUCT_QUERY } from "./utils";
import { useQuery } from "@apollo/client";
import type { ApiProductData } from "./Product.types";
import { useRouter } from "next/navigation";
import styles from "./Product.module.css";

const Product = ({ id }: { id: string | string[] }) => {
  const router = useRouter();
  const { data, loading, error } = useQuery<ApiProductData>(PRODUCT_QUERY, {
    variables: { id },
  });

  if (error) {
    return <p>{error.message}</p>;
  }

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className={styles.card}>
      <h2>Product</h2>
      <h3>Name: {data?.product.name}</h3>
      <h4>Description: {data?.product.description}</h4>
      <div className={styles.imageWrapper}>
        <div className={styles.imageContent}>
          <Image
            src={data?.product.image ?? ""}
            alt={data?.product.name ?? ""}
            fill
            sizes="400px"
            className={styles.image}
          />
        </div>
      </div>
      <h4>On sales: {data?.product.onSale}</h4>
      <h4>Price: {data?.product.price}</h4>
      <h4 className={styles.qty}>Quantity: {data?.product.quantity}</h4>

      <section className={styles.section}>
        <h2>Reviews</h2>
        <ul className={styles.items}>
          {Array.isArray(data?.product.reviews) ? (
            data?.product.reviews.map((review) => {
              return (
                <li className={styles.list} key={review.date}>
                  <h5>Title: {review.title}</h5>
                  <h5>Comment: {review.comment}</h5>
                  <h5>Rating: {review.rating}</h5>
                  <h5>Date: {review.date}</h5>
                </li>
              );
            })
          ) : (
            <li>
              <h5>Title: {data?.product.reviews.title}</h5>
              <h5>Comment: {data?.product.reviews.comment}</h5>
              <h5>Rating: {data?.product.reviews.rating}</h5>
              <h5>Date: {data?.product.reviews.date}</h5>
            </li>
          )}
        </ul>
      </section>

      <button onClick={() => router.push("/products")}>Back to products</button>
    </div>
  );
};

export default Product;
