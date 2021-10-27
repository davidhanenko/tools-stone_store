import gql from 'graphql-tag';
import { useQuery } from '@apollo/client';
import SubCategoryCollection from '../../../components/items/items-page/SubCategoryCollection';
import { formatUrlToDbName } from '../../../lib/formatUrl';

const ITEM = gql`
  query ITEM($item: String!) {
    category: productCategories(where: { product_category: $item }) {
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
      item: formatUrlToDbName(query.collection),
    },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <>
      <SubCategoryCollection />
      <SubCategoryCollection />
      <SubCategoryCollection />
      <SubCategoryCollection />
    </>
  );
}
