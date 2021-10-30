import gql from 'graphql-tag';
import { useQuery } from '@apollo/client';

import Items from '../../../components/items/items-page/Items';
import MenuLayout from '../../../components/layouts/MenuLayout';
import MainLayout from '../../../components/layouts/MainLayout';

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

  // const products = data.products;

  return <Items itemsCategory={query.products} />;
};

