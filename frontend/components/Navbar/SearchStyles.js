import styled from 'styled-components';

const SearchStyles = styled.div`
  position: absolute;
  display: flex;
  width: 100%;
  top: var(--navHeight);
  transition: all 2s;
  .search-icon {
    position: fixed;
    font-size: 3rem;
    color: grey;
    padding-left: 0.5rem;
  }
  input {
    border: 1px solid var(--lightGray);
    height: var(--searchHeight);
    width: 100%;
    outline: 0;
    padding-left: 3rem;
    background: #f5f5f5;
    &::placeholder {
      color: #d8d8d8;
      font-weight: 100;
    }
  }
`;

export { SearchStyles };
