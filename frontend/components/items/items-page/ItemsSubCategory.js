import Image from 'next/image';
import Link from 'next/link';

import { ItemsSubCategoryStyles } from './ItemsSubCategoryStyles';


export default function ItemsSubCategoty({ subCategory, title }) {
  return (
    <ItemsSubCategoryStyles>
      <h1>{subCategory.category_title}</h1>

      {subCategory && <Item subCategory={subCategory} title={title} />}
    </ItemsSubCategoryStyles>
  );
}

// 
function Item({ subCategory, title }) {
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


