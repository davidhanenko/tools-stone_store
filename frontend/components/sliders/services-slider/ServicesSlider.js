import React, { useState, useEffect, useCallback } from 'react';
import { PrevButton, NextButton } from '../SliderButtons';
import { useEmblaCarousel } from 'embla-carousel/react';
import ServicesSliderStyles from './ServiceSliderStyles';
import Slide from './Slide';
import { start } from 'nprogress';


const ServicesSlider = ({ slides, mediaByIndex }) => {
  const [viewportRef, embla] = useEmblaCarousel({
    slidesToScroll: 1,
     containScroll: 'keepSnaps',
    skipSnaps: false,
    align: 0,
    loop: true,
  });
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);
  const onSelect = useCallback(() => {
    if (!embla) return;
    setPrevBtnEnabled(embla.canScrollPrev());
    setNextBtnEnabled(embla.canScrollNext());
  }, [embla]);

  useEffect(() => {
    if (!embla) return;
    embla.on('select', onSelect);
    onSelect();
  }, [embla, onSelect]);

  return (
    <ServicesSliderStyles>
      <div className='embla__viewport' ref={viewportRef}>
        <div className='embla__container'>
          {slides.map(index => (
            <div className='embla__slide' key={index}>
              <div className='embla__slide__inner'>
               <Slide mediaByIndex={mediaByIndex} index={index}/>
              </div>
            </div>
          ))}
        </div>
      </div>
      <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
      <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
    </ServicesSliderStyles>
  );
};

export default ServicesSlider;
