import gql from 'graphql-tag';
import { useQuery } from '@apollo/client';
import Items from '../../../components/items/items-page/Items';

const ITEM = gql`
  query ITEM($item: String!) {
    category: product_categories(where: { product_category: $item }) {
      category_title: product_category
      id
      single_item: single_products {
        item_title
        price
        description
        image {
          url
        }
      }
    }
  }
`;

export default function ProductsPage({ query }) {
  const { data, error, loading } = useQuery(ITEM, {
    variables: {
      item: query,
    },
  });

  return (
    <>
      <h1>Product</h1>
      <h1>Product</h1>
      <h1>Product</h1>
      <h1>Product</h1>
      <h1>Product</h1>
      <h1>Product</h1>
      <h1>Product</h1>
      <h1>Product</h1>
      <h1>Product</h1>
      <h1>Product</h1>
    </>
  );
}
