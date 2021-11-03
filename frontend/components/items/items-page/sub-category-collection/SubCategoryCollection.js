import CollectionItem from './collection-item/CollectionItem';
import { CollectionTitleStyled, SubCategoryCollectionStyles } from './SubCategoryCollectionStyles';

export default function SubCategoryCollection({ itemsCollection, product, collection }) {
  
  return (
    <SubCategoryCollectionStyles>
      <CollectionTitleStyled>{itemsCollection.category}</CollectionTitleStyled>
      <div className="collection-container">
        {itemsCollection.single_items.map(item => (
          <CollectionItem key={item.id} item={item} product={product} collection={collection}/>
        ))}
      </div>
    </SubCategoryCollectionStyles>
  );
}
