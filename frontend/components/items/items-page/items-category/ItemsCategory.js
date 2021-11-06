import Head from 'next/head';

import capitalizeStr from '../../../../helpers/capitalizeStr';

import ItemsSubCategory from '../items-sub-category/ItemsSubCategory';
import {
  CategoryTitleStyles,
  ItemsCategoryStyles,
} from './ItemsCategoryStyles';

export default function ItemsCategory({ items }) {
  const productTitle = items?.product_title;

  return (
    <ItemsCategoryStyles>
      <Head>
        <title>{capitalizeStr(productTitle)} - A2Z</title>
      </Head>
      <CategoryTitleStyles>{productTitle}</CategoryTitleStyles>
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
