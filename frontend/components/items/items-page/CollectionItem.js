import Image from 'next/image';
import Link from 'next/link';
import { formatUrlToRoute } from '../../../lib/formatUrl';

import { CollectionItemStyles } from './CollectionItemStyles';

export default function CollectionItem({ item }) {

  return (
    <CollectionItemStyles>
    <h3>{item.item_title}</h3>
      <Image src={item.image[0].url} width={200} height={200} />
    </CollectionItemStyles>
  );
}
