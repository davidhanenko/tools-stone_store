import Image from 'next/image';
import Link from 'next/link';

import { formatUrlToRoute } from '../../../helpers/formatUrl';

import { CollectionItemStyles } from './CollectionItemStyles';

export default function CollectionItem({ item, product, collection }) {
  return (
    <CollectionItemStyles>
      <Link
        href={{
          pathname: '/products/[product]/[collection]/[single]',
          query: {
            product: `${product}`,
            collection: `${collection}`,
            single: `${formatUrlToRoute(item.item_title)}`,
          },
        }}
      >
        <a>
          <h3>{item.item_title}</h3>
          <Image src={item.image[0].url} width={200} height={200} />
        </a>
      </Link>
    </CollectionItemStyles>
  );
}
