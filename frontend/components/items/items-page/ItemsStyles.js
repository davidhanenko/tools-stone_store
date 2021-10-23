import styled from 'styled-components';

const ItemsStyles = styled.div`
  margin-top: calc(var(--navHeight) + var(--searchHeight));
  margin-bottom: 10rem;
  position: relative;
  background: lightblue;

  .manu-container {
    
  }
  .main-title {
    font-size: 4.5rem;
    text-transform: uppercase;
    font-weight: 400;
    color: darkblue;
    padding-top: 5rem;
    padding-left: 5rem;
  }
/* 
  .embla__slide {
    position: relative;
    min-width: 25%;
    @media (max-width: 828px) {
      min-width: 50%;
    }
  } */

  .item-title {
    bottom: 0%;
    left: 50%;
    transform: translate(-70%, -80%);
    font-size: 2.2rem;
    text-transform: uppercase;
    font-weight: 400;
    color: rgb(10, 10, 192);

    @media (max-width: 1100px) {
      font-size: 1.9rem;
    }
    @media (max-width: 828px) {
      font-size: 2.8rem;
    }
    @media (max-width: 500px) {
      font-size: 1.5rem;
    }
  }
`;

export { ItemsStyles };
