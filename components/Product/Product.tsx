import React from "react";
import { PRODUCT_QUERY } from "./utils";
import { useQuery } from "@apollo/client";
import { ApiProductData } from "./Product.types";
import styles from "./Product.module.css";
import { useRouter } from "next/navigation";

const Product = ({ id }: { id: string | string[] }) => {
  const router = useRouter()
  const { data, loading, error } = useQuery<ApiProductData>(PRODUCT_QUERY, {
    variables: {id },
  });

  return (
    <div className={styles.card}>
      <h2>Product</h2>
      <h3>Name: {data?.product.name}</h3>
      <p>Description: {data?.product.description}</p>
      <p>Image : {data?.product.image}</p>
      <p>On sales: {data?.product.onSale}</p>
      <p>Price: {data?.product.price}</p>
      <p>Quantity: {data?.product.quantity}</p>
      <h2>Reviews</h2>
      {Array.isArray(data?.product.reviews) ? (
    data?.product.reviews.map((review) => {
          return (
            <div key={review.date}>
              <h3>Title: {review.title}</h3>
              <p>Comment: {review.comment}</p>
              <p>Rating: {review.rating}</p>
              <small>Date: {review.date}</small>
            </div>
          );
        })
      ) : (
        <>
          <h3>Title: {data?.product.reviews.title}</h3>
          <p>Comment: {data?.product.reviews.comment}</p>
          <p>Rating: {data?.product.reviews.rating}</p>
          <small>Date: {data?.product.reviews.date}</small>
        </>
      )}
      <button onClick={() => router.push('/products')}>Back to products</button>
    </div>
  );
};

export default Product;
