import { useState, useEffect } from 'react';
import agent from '../../app/api/agent';
import { Product } from '../../app/models/interfaces/product';
import ProductList from './ProductList';

const Catalog = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    agent.Catalog.list().then((products) => setProducts(products));
  }, []);

  return (
    <>
      <ProductList products={products} />
    </>
  );
};

export default Catalog;
