import gql from 'graphql-tag';
import { useQuery } from '@apollo/client';

import { formatUrlToDbName } from '../../../../helpers/formatUrl';
import SingleItem from '../../../../components/items/items-page/SingleItem';

const ITEMS_COLLECTION = gql`
  query ITEMS_COLLECTION($item: String!) {
    single_item: singleItems(where: { item_title: $item }) {
      id
      item_title
      price
      description
      image {
        url
      }
    }
  }
`;

export default function ProductsPage({ query }) {
  const { data, error, loading } = useQuery(ITEMS_COLLECTION, {
    variables: {
      item: formatUrlToDbName(query.item),
    },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const singleItem =  data.single_item[0];
  
  return (
      <SingleItem singleItem={singleItem} />
  );
}
