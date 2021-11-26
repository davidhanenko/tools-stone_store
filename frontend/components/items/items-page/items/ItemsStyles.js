import styled from 'styled-components';

const ItemsStyles = styled.div`
  /* max-width: 1000px; */
  padding: 2rem;
  justify-content: center;
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(250px, 300px));
  @media (max-width: 500px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 300px));
  }
`;
  

export { ItemsStyles };
