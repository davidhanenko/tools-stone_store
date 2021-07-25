import { useState, useEffect } from 'react';
import styled, { keyframes, css } from 'styled-components';
import Image from 'next/image';
import image1 from '../../public/img/pngegg.png'


const fadeInR = keyframes`
    0% {
      transform: translate(150%);
      opacity: 0;
    }
    100% {
        transform: translate(0%);
        opacity: 1;
    }
  `;
  const fadeInL = keyframes`
    0% {
      transform: translate(-150%);
      opacity: 0;
    }
    100% {
        transform: translate(0%);
        opacity: 1;
    }
  `;

const animationL = (props) => css`
  ${props.a && fadeInL}
`;
const animationR = (props) => css`
  ${props.a && fadeInR}
`;

const SlideStyles = styled.div`
  position: relative;
  z-index: 1;
  height: 100%;
  img {
    position: absolute;
    width: 20rem;
  }
  .image-1 {
    left: 30%;
    top: 8em;
    animation: ${animationL} 1s;
  }
  .image-2 {
    right: 30%;
    top: 5em;
    animation: ${animationR} 1s;
  }
`;


export default function Silde({mediaByIndex, index}) { 

const [animation, setAnimation] = useState(true);
 
  useEffect(()=> {
        setAnimation(true);
  }, []);

  return (
    <SlideStyles a={animation}>
      <Image
        className='embla__slide__img'
        src={mediaByIndex(index)}
        objectFit='cover'
        layout='fill'
        alt=''
      />
      <img className='image-1' src={image1} />
      <img className='image-2' src={image1} />
    </SlideStyles>
  );
}
