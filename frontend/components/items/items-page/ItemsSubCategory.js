import Image from 'next/image';
import { ItemsSubCategoryStyles } from './ItemsSubCategoryStyles';

export default function ItemsSubCategoty({ subCategory }) {
  return (
    <ItemsSubCategoryStyles>
      <h1>{subCategory.category_title}</h1>
      <Image
        className='sub-image'
        src={subCategory.single_item[0].image.url}
        width={300}
        height={300}
      />
    </ItemsSubCategoryStyles>
  );
}
