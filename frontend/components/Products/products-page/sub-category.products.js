import Image from 'next/image';
import { ProductsSubCategoryStyles } from './sub-category.products.styles';

export default function ProductsSubCategoty({ subCategory }) {
  return (
    <ProductsSubCategoryStyles>
      <h1>{subCategory.product_category}</h1>
      <Image
        className='sub-image'
        src={subCategory.single[0].image.url}
        width={300}
        height={300}
      />
    </ProductsSubCategoryStyles>
  );
}
