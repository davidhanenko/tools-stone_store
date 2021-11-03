import styled from 'styled-components';

const SingleItemStyles = styled.div`
  margin-top: 8rem;
  display: flex;
  flex-wrap: wrap;
  position: relative;
  left: 5rem;

   @media (max-width: 720px) {
    flex-direction: column;
  }

`;

const ItemImageStyles = styled.div`
  text-transform: uppercase;
  flex: 1 1 0;
`;

const ItemDescriptionStyles = styled.div`
  text-transform: uppercase;
  flex: 1 1 0;
`;

export { SingleItemStyles, ItemImageStyles, ItemDescriptionStyles };
