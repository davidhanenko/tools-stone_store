import styled, { keyframes, css } from 'styled-components';
import Image from 'next/image';

const fadeInR = keyframes`
    0% {
      transform: translate(50%);
      opacity: 0;
    }
    100% {
        transform: translate(0%);
        opacity: 1;
    }
  `;
const fadeInL = keyframes`
    0% {
      opacity: 0;
      transform: translate(-50%);
    }
    100% {
        transform: translate(0%);
        opacity: 1;
        left: 20%;
    }
  `;

const animationL = props => css`
  ${props.a && fadeInL}
`;
const animationR = props => css`
  ${props.a && fadeInR}
`;

const SlideStyles = styled.div`
  position: relative;
  height: 100%;

  .image-1 {
    display: inline-block;
    position: absolute;
    left: 20%;
    top: 10rem;

    animation: ${fadeInL} 1.3s;
    max-width: 300px;
    max-height: 300px;
    @media (max-width: 601px) {
      max-width: 40%;
      max-height: 40%;
    }
  }
  .image-2 {
    display: inline-block;
    position: absolute;
    right: 20%;
    top: 5em;
    animation: ${fadeInR} 1.3s;

    max-width: 300px;
    max-height: 300px;
    @media (max-width: 601px) {
      max-width: 40%;
      max-height: 40%;
    }
  }
`;

export default function Silde({ mediaByIndex, index, a }) {
  console.log('render');

  return (
    <SlideStyles a>
      <Image
        className='embla__slide__img'
        src={mediaByIndex(index)[0]}
        objectFit='cover'
        layout='fill'
        alt=''
      />
      <div key={Math.random()} className='image-1'>
        <Image width={300} height={300} src={mediaByIndex(index)[1]} />
      </div>
      <div key={Math.random()} className='image-2'>
        <Image width={300} height={300} src={mediaByIndex(index)[2]} />
      </div>
    </SlideStyles>
  );
}
