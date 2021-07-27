import { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { Parallax } from 'react-scroll-parallax';
import gql from 'graphql-tag';
import bg_1 from '../public/img/bg_3.jpg';
import bg_2 from '../public/img/bg_2.jpg';
import img_1 from '../public/img/img_1.png';
import img_2 from '../public/img/img_2.png';
import img_3 from '../public/img/img_3.png';
import EmblaCarousel from './Carousel/Carousel';

const SLIDE_COUNT = 2;

const slides = Array.from(Array(SLIDE_COUNT).keys());

export default function Main() {
  
const media = [[bg_1, img_1, img_2 ],[bg_2, img_2, img_3]];


  // func from Embla Carousel docs
    const mediaByIndex = index => media[index % media.length];
  

  return (
    <div>
      <Parallax y={[-80, 50]}>
        <EmblaCarousel slides={slides} mediaByIndex={mediaByIndex} />
      </Parallax>
      {/* <Parallax y={[-20, 20]}>
       
      </Parallax> */}
      
      <Parallax y={[0, 0]}>
        <EmblaCarousel slides={slides} mediaByIndex={mediaByIndex} />
      </Parallax>
    </div>
  );
}
