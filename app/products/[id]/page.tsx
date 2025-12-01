"use client";

import Product from "@/components/Product/Product";
import { useParams } from "next/navigation";
import React from "react";

const ProductPage = () => {
  const { id } = useParams();
  return <Product id={id} />;
};

export default ProductPage;
