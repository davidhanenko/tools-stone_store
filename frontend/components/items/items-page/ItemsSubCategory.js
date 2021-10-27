import Image from 'next/image';
import Link from 'next/link';
import { formatUrlToRoute } from '../../../lib/formatUrl';

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
          products: `${formatUrlToRoute(title)}`,
          product: `${formatUrlToRoute(subCategory.category_title)}`,
        },
      }}
    >
      <a>
        <Image
          className='sub-image'
          src={subCategory.single_item[0].image.url}
          width={200}
          height={200}
        />
      </a>
    </Link>
  );
}
