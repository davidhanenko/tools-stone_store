import Image from 'next/image';
import Link from 'next/link';

import { ItemsSubCategoryStyles } from './ItemsSubCategoryStyles';

function Item({ subCategory }) {


  return (
    <Link
      href={{
        pathname: '/products/[products]/[product]',
        query: {
          products: `${subCategory.category_title
            .toLowerCase()
            .split(' ')
            .join('-')}`,
          product: `${subCategory.single_item.item_title}`,
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

export default function ItemsSubCategoty({ subCategory }) {
  return (
    <ItemsSubCategoryStyles>
      <h1>{subCategory.category_title}</h1>
      {subCategory && <Item subCategory={subCategory} />}
    </ItemsSubCategoryStyles>
  );
}
