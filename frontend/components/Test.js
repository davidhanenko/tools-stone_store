import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import T from './T';


export const TEST = gql`
  query TEST {
    tests {
      id
      message
      image {
        id
        url
      }
      photo {
        id
        url
      }
    }
  }
`;

export default function Test() {
  const { data, error, loading } = useQuery(TEST);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  return (
    <div>
      {data?.tests.map((t) => (
        <T key={t.id} test={t} />
      ))}
    </div>
  );
}
