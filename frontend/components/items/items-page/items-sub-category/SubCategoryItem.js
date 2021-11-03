import Image from 'next/image';
import Link from 'next/link';
import { formatUrlToRoute } from '../../../../helpers/formatUrl';

export default function SubCategoryListItem({ subCategory, productTitle }) {
  return (
    <Link
      href={{
        pathname: '/products/[products]/[collection]',
        query: {
          products: `${formatUrlToRoute(productTitle)}`,
          collection: `${formatUrlToRoute(subCategory.category_title)}`,
        },
      }}
    >
      <a>
        <Image
          className='sub-image'
          src={subCategory.single_item[0].image[0].url}
          width={200}
          height={200}
        />
      </a>
    </Link>
  );
}
