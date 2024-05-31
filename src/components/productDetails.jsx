import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import axios from "axios";

const fetchProduct = async (id) => {
  const { data } = await axios.get(`https://fakestoreapi.com/products/${id}`);
  return data;
};

const ProductDetails = () => {
  const { id } = useParams();
  const { data, error, isLoading } = useQuery(["product", id], () =>
    fetchProduct(id)
  );

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <img src={data.image} alt={data.title} width={200} />
      <h1>{data.title}</h1>
      <p>{data.description}</p>
      <p>${data.price}</p>
    </div>
  );
};

export default ProductDetails;
