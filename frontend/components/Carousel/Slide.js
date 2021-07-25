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
  height: 100%;

  .main-images {
    display: inline-block;
    max-width: 300px;
    max-height: 300px;
    @media (max-width: 601px) {
      max-width: 40%;
      max-height: 40%;
    }
  

  .image-1 {
    /* position: absolute; */
    width: 100%;
    height: 100%;
    left: 30%;
    top: 8em;
    animation: ${animationL} 1s;
  }
  .image-2 {
    position: absolute;
    right: 30%;
    top: 5em;
    animation: ${animationR} 1s;
  }
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
      <div className='main-images'>
        <Image
          width={300}
          height={300}
          className='image-1'
          src={image1}
        />
      </div>
      <div className='main-images'>
        <Image
          width={300}
          height={300}
          className='image-2'
          src={image1}
        />
      </div>
    </SlideStyles>
  );
}
