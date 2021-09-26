import Image from 'next/image';
import { SlideStyles, ImageOverlay } from './SlideStyles';

export default function Slide({ mediaByIndex, index }) {
  return (
    <SlideStyles>
      <div className='item'>
        <h3 className='item-title'>{mediaByIndex(index).title}</h3>

        <ImageOverlay />
        <Image
          className='embla__slide__img item-image'
          src={mediaByIndex(index).category[0].single[0].image.url}
          width={300}
          height={300}
          layout='responsive'
        />
      </div>
    </SlideStyles>
  );
}
