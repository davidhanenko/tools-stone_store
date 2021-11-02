import gql from 'graphql-tag';
import { useQuery } from '@apollo/client';
import SubCategoryCollection from '../../../../components/items/items-page/SubCategoryCollection';
import { formatUrlToDbName } from '../../../../helpers/formatUrl';

const ITEMS_COLLECTION = gql`
  query ITEMS_COLLECTION($item: String!) {
    items_category: itemsCategories(where: { category_title: $item }) {
      category: category_title
      id
      single_items {
        id
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
      <SubCategoryCollection itemsCollection={data?.items_category[0]} product={query.products} collection={query.collection}/>
    </>
  );
}
