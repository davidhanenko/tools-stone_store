import styled from 'styled-components';

import { ImageOverlay } from '../../../../shared/sliders/items-slider/ItemsSlideStyles';

const ItemStyles = styled.div`
  position: relative;
  background: white;
  padding: 1rem;
  min-height: 220px;
  text-align: center;

  .item-image {
    display: inline-block;
    padding: 1.3rem;
    -webkit-transition: all 0.25s;
    transition: all 0.25s;
  }
  &:hover {
    ${ImageOverlay} {
      opacity: 0.3;
    }
    .item-image {
      -webkit-transform: scale(1.1);
      transform: scale(1.1);
    }
  }
`;

export { ItemStyles, ImageOverlay };
