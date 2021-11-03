import {
  ItemHeaderStyles,
  ItemsSubCategoryStyles,
} from './ItemsSubCategoryStyles';
import SubCategoryItem from './SubCategoryItem';

export default function ItemsSubCategory({ subCategory, productTitle }) {
  return (
    <ItemsSubCategoryStyles>
      <ItemHeaderStyles>{subCategory.category_title}</ItemHeaderStyles>
      <SubCategoryItem
        subCategory={subCategory}
        productTitle={productTitle}
      />
    </ItemsSubCategoryStyles>
  );
}
