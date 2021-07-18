import React, { useState, useEffect, useCallback } from 'react';
import { useEmblaCarousel } from 'embla-carousel/react';
import Image from 'next/image';
import { PrevButton, NextButton } from './CarouselButtons';
import { useRecursiveTimeout } from '../../lib/useRecursiveTimeout';
import CarouselStyles from './CarouselStyles';
// import { mediaByIndex } from './media';

const AUTOPLAY_INTERVAL = 3000;

const EmblaCarousel = ({ slides, mediaByIndex }) => {
  const [viewportRef, embla] = useEmblaCarousel({
    loop: true,
    skipSnaps: false,
  });
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

  const autoplay = useCallback(() => {
    if (!embla) return;
    if (embla.canScrollNext()) {
      embla.scrollNext();
    } else {
      embla.scrollTo(0);
    }
  }, [embla]);

  const { play, stop } = useRecursiveTimeout(autoplay, AUTOPLAY_INTERVAL);

  const scrollNext = useCallback(() => {
    if (!embla) return;
    embla.scrollNext();
    stop();
  }, [embla, stop]);

  const scrollPrev = useCallback(() => {
    if (!embla) return;
    embla.scrollPrev();
    stop();
  }, [embla, stop]);

  const onSelect = useCallback(() => {
    if (!embla) return;
    setPrevBtnEnabled(embla.canScrollPrev());
    setNextBtnEnabled(embla.canScrollNext());
  }, [embla]);

  useEffect(() => {
    if (!embla) return;
    onSelect();
    embla.on('select', onSelect);
    embla.on('pointerDown', stop);
  }, [embla, onSelect, stop]);

  useEffect(() => {
    play();
  }, [play]);

  return (
    <CarouselStyles>
      <div className='embla__viewport' ref={viewportRef}>
        <div className='embla__container'>
          {slides.map(index => (
            <div className='embla__slide' key={index}>
              <div className='embla__slide__inner'>
                <Image
                  className='embla__slide__img'
                  src={mediaByIndex(index)}
                  objectFit='cover'
                  layout='fill'
                  alt=''
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
      <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
    </CarouselStyles>
  );
};

export default EmblaCarousel;
