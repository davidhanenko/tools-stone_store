import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import styled, { keyframes, css } from 'styled-components';
import { gql, useQuery } from '@apollo/client';
import { MAIN_PAGE_QUERY } from '../Main';
import image1 from '../../public/img/pngegg.png'


// export const MAIN_PAGE_SLIDE_QUERY = gql`
//   query MAIN_PAGE_SLIDE_QUERY($id: ID!) {
//     mainPageSlide(id: $id) {
//       image_1 {
//         url
//       }
//       image_2 {
//         url
//       }
//     }
//   }
// `;

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
 

export default function Silde({ index }) {

const [animation, setAnimation] = useState(false);

  // const { data, loading, error } = useQuery(MAIN_PAGE_SLIDE_QUERY, {
  //   variables: {
  //     id: index+1
  //   }
  // });
  // if (loading) return <p>Loading...</p>;
  // if (error) return <p>{error.message}</p>;

  // const {mainPageSlide} = data
  const router = useRouter();

  useEffect(()=> {
    // router.reload(window.location.pathname);
      // router.reload();
      setAnimation(true);
  }, [index]);
  
  // console.log('render');

  

  return (
    <SlideStyles a={animation}>
      {/* <img className='image-1' src={mainPageSlide?.image_1?.url} />
      <img className='image-2' src={mainPageSlide?.image_2?.url} />  */}
      <img className='image-1' src={image1} />
      <img className='image-2' src={image1} /> 
    </SlideStyles>
  );
}
