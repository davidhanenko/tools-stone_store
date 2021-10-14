import gql from 'graphql-tag';
import { useQuery } from '@apollo/client';

import Items from '../../components/items/items-page/Items';

const ALL_PRODUCTS = gql`
  query ALL_PRODUCTS {
    products {
      id
      title: product_title
      category: product_categories(limit: 1) {
        single_item: single_products(limit: 1) {
          image {
            url
          }
        }
      }
    }
  }
`;

export default function ProductsCategoryPage({ query }) {
  
  const { data, error, loading } = useQuery(ALL_PRODUCTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const SLIDE_COUNT = data?.products?.length;
  const slides = Array.from(Array(SLIDE_COUNT).keys());
  // func from Embla Carousel docs
  const itemsByIndex = index => data?.products[index % data?.products.length];

  return (
    <Items
      itemsCategory={query.products}
      itemsByIndex={itemsByIndex}
      slides={slides}
    />
  );
}
