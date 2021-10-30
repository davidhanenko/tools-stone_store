import gql from 'graphql-tag';
import { useQuery } from '@apollo/client';

import Items from '../../../components/items/items-page/Items';
import { formatUrlToDbName } from '../../../lib/formatUrl';


const ALL_PRODUCTS = gql`
  query ALL_PRODUCTS($itemsCategory: String!) {
    products(where: { product_title: $itemsCategory }) {
      product_title
      category: product_categories {
        category_title: product_category
        id
        single_item: single_products(limit: 1) {
          item_title
          image {
            url
          }
        }
      }
    }
  }
`;

export default function ProductsCategoryPage({ query }) {
  const { data, error, loading } = useQuery(ALL_PRODUCTS, {
    variables: {
      itemsCategory: formatUrlToDbName(query.products),
    },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const products = data.products;

  return <Items itemsCategory={query.products} items={products[0]} />;
};

