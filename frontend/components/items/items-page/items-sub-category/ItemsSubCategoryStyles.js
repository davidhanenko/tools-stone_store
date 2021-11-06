 import styled from 'styled-components';

const ItemsSubCategoryStyles = styled.div`
  background: #ced8ec;
  margin: 2rem;
  padding: 2rem;
  @media (max-width: 850px) {
    flex: 1 1;
  }
`;

const ItemHeaderStyles = styled.h4`
  color: black;
  font-weight: 100;
  font-size: 2rem;
  text-transform: uppercase;
`;

export { ItemsSubCategoryStyles, ItemHeaderStyles };
