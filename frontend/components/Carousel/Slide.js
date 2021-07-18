import styled, { keyframes } from 'styled-components';
import Image from 'next/image';
import { MAIN_PAGE_QUERY } from '../Main';
import { gql, useQuery } from '@apollo/client';

export const MAIN_PAGE_SLIDE_QUERY = gql`
  query MAIN_PAGE_SLIDE_QUERY($id: ID!) {
    mainPageSlide(id: $id) {
      image_1 {
        url
      }
      image_2 {
        url
      }
    }
  }
`;

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

const SlideStyles = styled.div`
  position: relative;

  img {
    position: absolute;
    width: 20rem;
  }
  .image-1 {
    left: 30%;
    top: 8em;
    animation: ${fadeInL} 1s ease-in-out;
  }
  .image-2 {
    right: 30%;
    top: 5em;
    animation: ${fadeInR} 1s ease-in-out;
  }
`;
 

export default function Silde({ index }) {
  const { data, loading, error } = useQuery(MAIN_PAGE_SLIDE_QUERY, {
    variables: {
      id: index+1
    }
  });
  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;

  const {mainPageSlide} = data


  return (
    <SlideStyles>
      <img className='image-1' src={mainPageSlide?.image_1?.url} />
      <img className='image-2' src={mainPageSlide?.image_2?.url} />
    </SlideStyles>
  );
}
