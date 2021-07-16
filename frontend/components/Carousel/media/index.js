import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';

const MAIN_BACKGROUNDS_QUERY = gql`
    query MAIN_BACKGROUNDS_QUERY {
      
    }
`;

import media1 from './media-1.jpg';
import media2 from './media-2.jpg';

export const media = [media1, media2];
export const mediaByIndex = (index) => media[index % media.length];
