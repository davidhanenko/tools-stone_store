import Head from 'next/head';

import capitalizeStr from '../../../../helpers/capitalizeStr';

import ItemsSubCategory from '../items-sub-category/ItemsSubCategory';
import {
  ItemsCategoryStyles,
} from './ItemsCategoryStyles';

export default function ItemsCategory({ items }) {
  const productTitle = items?.product_title;

  return (
    <ItemsCategoryStyles>
      <Head>
        <title>{capitalizeStr(productTitle)} - A2Z</title>
      </Head>
      <h3>{productTitle}</h3>
      <div className='category-container'>
        {items.category.map(subCategory => (
          <ItemsSubCategory
            key={subCategory.id}
            subCategory={subCategory}
            productTitle={productTitle}
          />
        ))}
      </div>
    </ItemsCategoryStyles>
  );
}
