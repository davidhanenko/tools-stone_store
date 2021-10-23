import styled from 'styled-components';

const ItemsCategoryStyles = styled.div`

  margin-top: 10rem;
  background: var(--offWhite);
  .category-title {
    font-size: 3.5rem;
    text-transform: uppercase;
    font-weight: 300;
    color: blue;
    padding-left: 5rem;
  }

  .category {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;

export {ItemsCategoryStyles};