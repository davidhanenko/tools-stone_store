import Image from 'next/image';
import Link from 'next/link';

import { ItemsSubCategoryStyles } from './ItemsSubCategoryStyles';


export default function ItemsSubCategory({ subCategory, title }) {
  return (
    <ItemsSubCategoryStyles>
      <h3>{subCategory.category_title}</h3>
      <SubCategoryItemsList subCategory={subCategory} title={title} />
    </ItemsSubCategoryStyles>
  );
}


function SubCategoryItemsList({ subCategory, title }) {
  return (
    <Link
      href={{
        pathname: '/products/[products]/[product]',
        query: {
          products: `${title}`,
          product: `${subCategory.category_title
            .toLowerCase()
            .split(' ')
            .join('-')}`,
        },
      }}
    >
      <a>
        <Image
          className='sub-image'
          src={subCategory.single_item[0].image.url}
          width={300}
          height={300}
        />
      </a>
    </Link>
  );
}


