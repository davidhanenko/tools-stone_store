import gql from 'graphql-tag';
import { useQuery } from '@apollo/client';

import ServicesSlider from '../../sliders/services-slider/ServicesSlider';

import ProductsCategory from './Category';
import { ProductsStyles} from './ProductsStyles';

const ALL_PRODUCTS = gql`
  query ALL_PRODUCTS {
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



export default function Products({ productsCategory }) {
  const { data, error, loading } = useQuery(ALL_PRODUCTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const SLIDE_COUNT = data?.products?.length;
  const slides = Array.from(Array(SLIDE_COUNT).keys());
  // func from Embla Carousel docs
  const mediaByIndex = index => data?.products[index % data?.products.length];

  return (
    <ProductsStyles>
      <h2 className='main-title'>Products</h2>
      <ServicesSlider slides={slides} mediaByIndex={mediaByIndex} />
      {productsCategory && <ProductsCategory productsCategory={productsCategory} />}
    </ProductsStyles>
  );
}
