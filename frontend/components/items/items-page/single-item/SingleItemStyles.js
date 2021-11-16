import styled from 'styled-components';

const SingleItemStyles = styled.div`
  margin-top: 8rem;
  display: flex;
  flex-wrap: wrap;
  left: 5rem;

  @media (max-width: 720px) {
    flex-direction: column;
  }
  .item-image-container {
    width: 100%;
    height: 100%;
    text-transform: uppercase;
    flex: 1 1 0;
  }

  .item-description-container {
    flex: 1;
    .single-item-title {
      font-size: 3rem;
      text-align: center;
      text-transform: uppercase;
      color: blue;
    }
    .single-item-price {
      font-size: 2rem;
      text-align: end;
      padding-right: 10rem;
    }
    .single-item-description {
      font-size: 1.5rem;
      font-weight: 100;
      padding-left: 5rem;
    }
  }
`;


export { SingleItemStyles };
