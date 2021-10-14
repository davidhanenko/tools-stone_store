import gql from 'graphql-tag';
import { useQuery } from '@apollo/client';

import ServicesSlider from '../../sliders/items-slider/ItemsSlider';

import { ProductsMainPageStyles } from './ProductsStyles';

const PRODUCTS = gql`
  query PRODUCTS {
    products {
      id
      title: product_title
      category: product_categories(limit: 1) {
        single: single_products(limit: 1) {
          image {
            url
          }
        }
      }
    }
  }
`;

export default function ProductsMainPage({}) {
  const { data, error, loading } = useQuery(PRODUCTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const SLIDE_COUNT = data?.products?.length;

  const slides = Array.from(Array(SLIDE_COUNT).keys());

  // func from Embla Carousel docs
  const mediaByIndex = index => data?.products[index % data?.products.length];

  return (
    <ProductsMainPageStyles>
      <h2>Products</h2>
      <ServicesSlider slides={slides} mediaByIndex={mediaByIndex} />
    </ProductsMainPageStyles>
  );
}
