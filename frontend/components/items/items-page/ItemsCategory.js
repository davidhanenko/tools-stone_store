import gql from 'graphql-tag';
import { useQuery } from '@apollo/client';

import ItemsSubCategory from './ItemsSubCategory';
import { ItemsCategoryStyles } from './ItemsCategoryStyles';

const ITEMS_CATEGORY = gql`
  query ITEMS_CATEGORY($itemsCategory: String!) {
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

export default function ItemsCategory({ itemsCategory }) {
  const { data, error, loading } = useQuery(ITEMS_CATEGORY, {
    variables: {
      itemsCategory,
    },
  });

 

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

   const product = data?.products[0];
   const productTitle = product?.product_title;

  return (
    <ItemsCategoryStyles>
      <h3 className='category-title'>{itemsCategory}</h3>
      <div className='category'>
        {product.category.map(subCategory => (
          <ItemsSubCategory
            key={subCategory.id}
            subCategory={subCategory}
            title={productTitle}
          />
        ))}
      </div>
    </ItemsCategoryStyles>
  );
}
