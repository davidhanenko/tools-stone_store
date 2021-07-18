import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';

import EmblaCarousel from './Carousel/Carousel';

const SLIDE_COUNT = 2;

export const MAIN_PAGE_QUERY = gql`
  query MAIN_PAGE_QUERY {
    mainPageSlides {
      bg_image {
        url
      }
      image_1 {
        url
      }
      image_2 {
        url
      } 
    }
  }
`;

const slides = Array.from(Array(SLIDE_COUNT).keys());

export default function Main() {
  const { data, loading, error } = useQuery(MAIN_PAGE_QUERY);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;


  // BG images for main page carousel
  const media = data?.mainPageSlides.map((el)=> el.bg_image.url);


  // func from Embla Carousel docs
  const mediaByIndex = (index) => media[index % media.length];

  return (
    <div>
      <EmblaCarousel slides={slides} mediaByIndex={mediaByIndex} />
    </div>
  );
}
