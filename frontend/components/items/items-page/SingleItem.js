import Image from 'next/image';

import { SingleItemStyles } from './SingleItemStyles';

export default function SingleItem({ singleItem }) {
  return (
    <SingleItemStyles>
      <Image src={singleItem.image[0].url} width={400} height={400} />
      <h4>{singleItem.item_title}</h4>
      <h4>${singleItem.price}</h4>
    </SingleItemStyles>
  );
}
