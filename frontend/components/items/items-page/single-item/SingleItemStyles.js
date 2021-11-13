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
    text-transform: uppercase;
     flex: 1;
  }
`;


export { SingleItemStyles };
