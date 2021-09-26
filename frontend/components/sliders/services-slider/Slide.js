import Image from 'next/image';
import { SlideStyles } from './SlideStyles';

export default function Slide({ mediaByIndex, index }) {
  return (
    <SlideStyles>
      <div className='product-item'>
        <h3>{mediaByIndex(index).title}</h3>

        <Image
          className='embla__slide__img'
          src={
            mediaByIndex(index).category[0].single[0].image
              .url
          }
          width={300}
          height={300}
          layout='responsive'
        />
      </div>
    </SlideStyles>
  );
}
