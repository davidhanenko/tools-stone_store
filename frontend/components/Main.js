import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';

import EmblaCarousel from './Carousel/Carousel';

const SLIDE_COUNT = 2;

const MAIN_PAGE = gql`
  query MAIN_PAGE {
    mPage {
      image_1 {
        id
        url
      }
      image_2 {
        id
        url
      }
    }
  }
`;

const slides = Array.from(Array(SLIDE_COUNT).keys());

export default function Main() {
  const { data, loading, error } = useQuery(MAIN_PAGE);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;
  // BG images for main page carousel
  const media = [data?.mPage?.image_1[0]?.url, data?.mPage?.image_2[0]?.url];
  // func from Embla Carousel docs
  const mediaByIndex = (index) => media[index % media.length];

  return (
    <div>
      <EmblaCarousel slides={slides} mediaByIndex={mediaByIndex} />
    </div>
  );
}
