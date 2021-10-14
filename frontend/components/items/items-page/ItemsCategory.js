import gql from 'graphql-tag';
import { useQuery } from '@apollo/client';

import ItemsSubCategoty from './ItemsSubCategory';
import { ItemsCategoryStyles } from './ItemsCategoryStyles';

const ITEMS_CATEGORY = gql`
  query ITEMS_CATEGORY($itemsCategory: String!) {
    products(where: { product_title: $itemsCategory }) {
      product_title
      category: product_categories {
        product_category
        id
        single_item: single_products(limit: 1) {
          image {
            url
          }
        }
      }
    }
  }
`;

export default function ItemsCategory({ itemsCategory }) {
  const { data, error, loading } = useQuery(ITEMS_CATEGORY, {
    variables: {
      itemsCategory,
    },
  });
console.log(data);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <ItemsCategoryStyles>
      <h3 className='category-title'>{itemsCategory}</h3>
      <div className='category'>
        {data.products[0].category.map(subCategory => (
          <ItemsSubCategoty key={subCategory.id} subCategory={subCategory} />
        ))}
      </div>
    </ItemsCategoryStyles>
  );
}
