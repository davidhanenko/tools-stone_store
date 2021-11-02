import gql from 'graphql-tag';
import { useQuery } from '@apollo/client';

import Items from '../../../components/items/items-page/Items';
import { formatUrlToDbName } from '../../../helpers/formatUrl';


const ALL_PRODUCTS = gql`
  query ALL_PRODUCTS($itemsCategory: String!) {
    products(where: { product_title: $itemsCategory }) {
      product_title
      category: items_categories {
        category_title
        id
        single_item: single_items(limit: 1) {
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

  return <Items items={products[0]} />;
};


