import { useEffect, useState } from 'react';
import getData from '@utils/getData';

const useGetProducts = (API) => {
  const [products, setProducts] = useState([]);

  useEffect(async () => {
    const data = await getData(API);
    setProducts(data);
  }, []);
}