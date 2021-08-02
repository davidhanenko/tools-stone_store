import React, { useState, useEffect, useCallback } from 'react';
import { useEmblaCarousel } from 'embla-carousel/react';
import { DotButton, PrevButton, NextButton } from './CarouselButtons';
import { useRecursiveTimeout } from '../../lib/useRecursiveTimeout';
import CarouselStyles from './CarouselStyles';
import Slide from './Slide';

const AUTOPLAY_INTERVAL = 500000;

const EmblaCarousel = ({ slides, mediaByIndex }) => {
  const [animation, setAnimation] = useState(false);

  const [viewportRef, embla] = useEmblaCarousel({
    loop: true,
    skipSnaps: false,
    speed: 8,
  });
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  const autoplay = useCallback(() => {
    if (!embla) return;
    if (embla.canScrollNext()) {
      embla.scrollNext();
      setAnimation(true);
    } else {
      embla.scrollTo(0);
      setAnimation(true);
    }
  }, [embla]);

  const { play, stop } = useRecursiveTimeout(autoplay, AUTOPLAY_INTERVAL);

  const scrollNext = useCallback(() => {
    if (!embla) return;
    embla.scrollNext();
    // setAnimation(true);
    stop();
  }, [embla, stop]);

  const scrollPrev = useCallback(() => {
    if (!embla) return;
    embla.scrollPrev();
    // setAnimation(true);
    stop();
  }, [embla, stop]);

  const scrollTo = useCallback(
    index => embla && embla.scrollTo(index),
    [embla]
  );

  const onSelect = useCallback(() => {
    if (!embla) return;
    setSelectedIndex(embla.selectedScrollSnap());
    setPrevBtnEnabled(embla.canScrollPrev());
    setNextBtnEnabled(embla.canScrollNext());
  }, [embla, setSelectedIndex]);

  useEffect(() => {
    if (!embla) return;
    onSelect();
    setScrollSnaps(embla.scrollSnapList());
    embla.on('select', onSelect);
    embla.on('pointerDown', stop);
  }, [embla, onSelect, setScrollSnaps, stop]);

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
                <Slide
                  key={Math.random()}
                  mediaByIndex={mediaByIndex}
                  index={index}
                  setAnimation={setAnimation}
                  a={animation}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
      <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
      <div className='embla__dots'>
        {scrollSnaps.map((_, index) => (
          <DotButton
            key={index}
            selected={index === selectedIndex}
            onClick={() => scrollTo(index)}
          />
        ))}
      </div>
    </CarouselStyles>
  );
};

export default EmblaCarousel;
