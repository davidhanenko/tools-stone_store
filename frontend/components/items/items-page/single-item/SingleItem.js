import Image from 'next/image';
import Head from 'next/head';

import capitalizeStr from '../../../../helpers/capitalizeStr';

import { SingleItemStyles } from './SingleItemStyles';

export default function SingleItem({ singleItem }) {
  return (
    <SingleItemStyles>
      <Head>
        <title>{capitalizeStr(singleItem.item_title)} - A2Z</title>
      </Head>
      <div className='item-image-container'>
        <Image
          src={singleItem.image[0].url}
          width={400}
          height={400}
          layout='responsive'
        />
      </div>
      <div className='item-description-container'>
        <h5 className='single-item-title'>{singleItem.item_title}</h5>
        <h6 className='single-item-price'>${singleItem.price}</h6>
        <h6>Sizes</h6>
        <p className='single-item-description'>{singleItem.description}</p>
      </div>
    </SingleItemStyles>
  );
}
