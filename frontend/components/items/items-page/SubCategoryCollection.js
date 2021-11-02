import CollectionItem from './CollectionItem';
import { SubCategoryCollectionStyles } from './SubCategoryCollectionStyles';

export default function SubCategoryCollection({ itemsCollection, product, collection }) {
  
  return (
    <SubCategoryCollectionStyles>
      <h2 className="collection-title">{itemsCollection.category}</h2>
      <div className="collection">
        {itemsCollection.single_items.map(item => (
          <CollectionItem key={item.id} item={item} product={product} collection={collection}/>
        ))}
      </div>
    </SubCategoryCollectionStyles>
  );
}
