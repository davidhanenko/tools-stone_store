import gql from 'graphql-tag';
import { useQuery } from '@apollo/client';
import SubCategoryCollection from '../../../components/items/items-page/SubCategoryCollection';
import { formatUrlToDbName } from '../../../lib/formatUrl';

const ITEMS_COLLECTION = gql`
  query ITEMS_COLLECTION($item: String!) {
    category: productCategories(where: { items_category: $item }) {
      category_title: items_category
      id
      single_item: single_items {
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
  const { data, error, loading } = useQuery(ITEMS_COLLECTION, {
    variables: {
      item: formatUrlToDbName(query.collection),
    },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <>
      <SubCategoryCollection collection={query.collection} />
    </>
  );
}
