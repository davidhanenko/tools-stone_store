import gql from 'graphql-tag';
import { useQuery } from '@apollo/client';
import { formatUrlToDbName } from '../../../lib/formatUrl';

import ItemsSubCategory from './ItemsSubCategory';
import { ItemsCategoryStyles } from './ItemsCategoryStyles';

export default function ItemsCategory({ items }) {

  const productTitle = items?.product_title;

  return (
    <ItemsCategoryStyles>
      <h3 className='category-title'>{productTitle}</h3>
      <div className='category'>
        {items.category.map(subCategory => (
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
