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
    max-width: 450px;
    max-height: 450px;
    width: 100%;
    height: 100%;
    margin: 0 auto;
    padding: 3rem;
    text-transform: uppercase;
    flex: 1 1 0;
  }

  .item-description-container {
    max-width: 50%;
    padding-right: 15rem;
    flex: 1 1 0;

    .single-item-title {
      font-size: 3rem;
      font-weight: 400;
      text-align: start;
      text-transform: uppercase;
      color: var(--dark);
    }
    .single-item-price {
      font-size: 2rem;
      font-weight: 400;
      text-align: end;
      padding-right: 10rem;
      color: var(--blue);
    }
    .single-item-description {
      font-size: 1.5rem;
      font-weight: 300;
    }
    @media (max-width: 720px) {
      max-width: 100%;
      padding: 0 5rem 5rem 5rem;
    }
  }
`;

export { SingleItemStyles };
