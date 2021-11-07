import { ItemsSubCategoryStyles } from './ItemsSubCategoryStyles';
import SubCategoryItem from './SubCategoryItem';

export default function ItemsSubCategory({ subCategory, productTitle }) {
  return (
    <ItemsSubCategoryStyles>
      <h4>{subCategory.category_title}</h4>
      <SubCategoryItem subCategory={subCategory} productTitle={productTitle} />
    </ItemsSubCategoryStyles>
  );
}
