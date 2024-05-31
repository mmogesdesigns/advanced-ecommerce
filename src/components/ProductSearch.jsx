import React, { useState, useMemo, useCallback } from "react";
import { useQuery } from "react-query";
import axios from "axios";

const fetchProducts = async () => {
  const { data } = await axios.get("https://fakestoreapi.com/products");
  return data;
};

const ProductSearch = () => {
  const { data, error, isLoading } = useQuery("products", fetchProducts);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = useMemo(
    () =>
      data?.filter((product) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
      ),
    [data, searchTerm]
  );

  const handleSearch = useCallback((e) => {
    setSearchTerm(e.target.value);
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <input
        type="text"
        placeholder="Search products"
        value={searchTerm}
        onChange={handleSearch}
      />
      <ul>
        {filteredProducts?.map((product) => (
          <li key={product.id}>
            <img src={product.image} alt={product.title} width={50} />
            <p>{product.title}</p>
            <p>${product.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductSearch;
