import styled from 'styled-components';

const ItemsStyles = styled.div`
  margin-top: calc(var(--navHeight) + var(--searchHeight));
  margin-bottom: 10rem;
  position: relative;
  .menu-container {
    background: lightblue;
    padding-top: 2rem;
    padding-left: 2rem;
  }
`;

export { ItemsStyles };
