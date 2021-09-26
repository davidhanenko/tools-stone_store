import styled from 'styled-components';

const ProductsStyles = styled.section`
  position: relative;
  margin-top: calc(var(--navHeight) + var(--searchHeight));
  background: lightgray;
  margin-bottom: 10rem;

  .main-tile {
    font-size: 4.5rem;
    text-transform: uppercase;
    font-weight: 400;
    color: darkblue;
    padding-left: 5rem;
  }

  .embla__slide {
    position: relative;
    min-width: 25%;
    @media (max-width: 828px) {
      min-width: 50%;
    }
  }

  .item-title {
    bottom: 0%;
    left: 50%;
    transform: translate(-50%, 0%);
    font-size: 2.2rem;
    text-transform: uppercase;
    font-weight: 400;
    color: rgb(10, 10, 192);

    @media (max-width: 828px) {
      font-size: 1.9rem;
    }
    @media (max-width: 500px) {
      font-size: 1.5rem;
    }
  }
`;

export { ProductsStyles };