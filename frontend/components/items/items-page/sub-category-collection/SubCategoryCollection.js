import Head from 'next/head';

import capitalizeStr from '../../../../helpers/capitalizeStr';

import CollectionItem from './collection-item/CollectionItem';
import {
  CollectionTitleStyled,
  SubCategoryCollectionStyles,
} from './SubCategoryCollectionStyles';

export default function SubCategoryCollection({
  itemsCollection,
  product,
  collection,
}) {
  return (
    <SubCategoryCollectionStyles>
      <Head>
        <title>{capitalizeStr(itemsCollection.category)} - A2Z</title>
      </Head>
      <CollectionTitleStyled>{itemsCollection.category}</CollectionTitleStyled>
      <div className='collection-container'>
        {itemsCollection.single_items.map(item => (
          <CollectionItem
            key={item.id}
            item={item}
            product={product}
            collection={collection}
          />
        ))}
      </div>
    </SubCategoryCollectionStyles>
  );
}
