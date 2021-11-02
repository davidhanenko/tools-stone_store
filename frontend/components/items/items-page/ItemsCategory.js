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
            productTitle={productTitle}
          />
        ))}
      </div>
    </ItemsCategoryStyles>
  );
}
