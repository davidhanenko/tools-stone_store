import styled from 'styled-components';

const ItemsCategoryStyles = styled.div`
  background: var(--offWhite);

  .category-container {
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
    justify-content: start;
    @media (max-width: 850px) {
    }
  }
`;

const CategoryTitleStyles = styled.h3`
  font-size: 3.5rem;
  text-transform: uppercase;
  font-weight: 300;
  color: blue;
  padding-left: 5rem;
  @media (max-width: 850px) {
    font-size: 2.5rem;
  }
`;

export { ItemsCategoryStyles, CategoryTitleStyles };
