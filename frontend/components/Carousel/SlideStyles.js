import styled, { keyframes } from 'styled-components';

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
    }
  `;

const btnAnimation = keyframes`
    0% {
      transform: scaleY(0);
      opacity: 0; 
    }
    100% {
      transform: scaleY(1);
      opacity: 1;
    }
  `;

const SlideStyles = styled.div`
  position: relative;
  height: 100%;

  .image-1 {
    display: inline-block;
    position: absolute;
    left: 30%;
    top: 18em;

    animation: ${fadeInL} 1.3s;
    max-width: 200px;
    max-height: 200px;
    @media (max-width: 601px) {
      max-width: 40%;
      max-height: 40%;
    }
  }
  .image-2 {
    display: inline-block;
    position: absolute;
    right: 30%;
    top: 8em;
    animation: ${fadeInR} 1.3s;

    max-width: 200px;
    max-height: 200px;
    @media (max-width: 601px) {
      max-width: 40%;
      max-height: 40%;
    }
  }

  .slide-btn {
    position: absolute;
    bottom: 20%;
    right: 15%;
    background: orange;
    color: white;
    border-radius: 2rem;
    border: none;
    text-transform: uppercase;
    padding: 1rem 1.5rem;
    transform-origin: bottom;

    -webkit-animation: ${btnAnimation} 1s;
    -moz-animation: ${btnAnimation} 1s;
    -ms-animation: ${btnAnimation} 1s;
    -o-animation: ${btnAnimation} 1s;
    animation: ${btnAnimation} 1s;
  }

  .slide-header {
    position: absolute;
    top: 8rem;
    background: #00000050;
    padding: 3rem;
    padding-left: 5rem;

    h2 {
      margin: 0;
      font-size: 3.5rem;
      color: white;
      text-transform: uppercase;
    }
    h4 {
      font-size: 2rem;
      color: white;
      margin: 0;
      text-transform: uppercase;
    }
  }
`;

export { SlideStyles };
