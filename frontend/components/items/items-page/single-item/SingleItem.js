import Image from 'next/image';

import { ItemDescriptionStyles, ItemImageStyles, SingleItemStyles } from './SingleItemStyles';

export default function SingleItem({ singleItem }) {
  return (
    <SingleItemStyles>
      <ItemImageStyles>
        <Image src={singleItem.image[0].url} width={400} height={400} />
      </ItemImageStyles>
      <ItemDescriptionStyles>
        <h5>{singleItem.item_title}</h5>
        <h6>${singleItem.price}</h6>
      </ItemDescriptionStyles>
    </SingleItemStyles>
  );
}
