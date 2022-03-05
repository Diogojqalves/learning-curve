import { useState, useEffect, useCallback } from 'react';

export const useFetch = (url) => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  const getProducts = useCallback(async () => { //useCallback prevent infinite loop on re-render, now it only calls this function when url changes
    const response = await fetch(url);
    const products = await response.json();
    setProducts(products);
    setLoading(false);
  }, [url]); //now it only calls this function when url changes, our array dependency

  useEffect(() => {
    getProducts();
  }, [url, getProducts]);
  return { loading, products };
};
