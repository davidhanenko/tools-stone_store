import Image from 'next/image';
import { SlideStyles } from './SlideStyles';

export default function Slide({mediaByIndex, index}) {
  
  return (
    <SlideStyles>
      <div className='product-item'>
        <Image
          className='embla__slide__img'
          src={mediaByIndex(index).product_categories[0].single_products[0].image.url}
          width={300}
          height={300}
          layout='responsive'
        />
      </div>
    </SlideStyles>
  );
}
