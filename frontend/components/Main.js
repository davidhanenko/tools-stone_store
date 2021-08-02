import { useState, useEffect, useRef } from 'react';
import { useQuery } from '@apollo/client';
import { Parallax } from 'react-scroll-parallax';
import gql from 'graphql-tag';
import bg_1 from '../public/img/bg_3.jpg';
import bg_2 from '../public/img/bg_2.jpg';
import img_1 from '../public/img/img_1.png';
import img_2 from '../public/img/img_2.png';
import img_3 from '../public/img/img_3.png';
import EmblaCarousel from './Carousel/Carousel';
import styled from 'styled-components';

const MainStyles = styled.div``;

const SLIDE_COUNT = 2;

const slides = Array.from(Array(SLIDE_COUNT).keys());

export default function Main() {
  const media = [
    {
      bg: bg_1,
      img1: img_1,
      img2: img_2,
      btn: 'view more',
      text1: 'tools, blades & more',
      text2: 'to get it done',
      link: 'tools',
    },
    {
      bg: bg_2,
      img1: img_2,
      img2: img_3,
      btn: 'view more',
      text1: 'stone, tile & sinks',
      text2: 'for any situation',
      link: '/products',
    },
  ];

  // func from Embla Carousel docs
  const mediaByIndex = index => media[index % media.length];

  return (
    <MainStyles>
      <Parallax y={[-80, 50]}>
        <EmblaCarousel slides={slides} mediaByIndex={mediaByIndex} />
      </Parallax>
      {/* <Parallax y={[-20, 20]}>
       
      </Parallax> */}

      {/* <Parallax y={[0, 0]}>
        <EmblaCarousel slides={slides} mediaByIndex={mediaByIndex} />
      </Parallax> */}
    </MainStyles>
  );
}
