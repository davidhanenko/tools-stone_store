import styled from 'styled-components';

const MenuTreeStyles = styled.ul`
  li {
    display: inline;
    font-size: 1.7rem;
    font-weight: 300;
    text-transform: capitalize;
    &:last-of-type {
      a {
        color: lightblue;
      }
    }

    &:before {
      content: ' > ';
    }
    &:first-of-type {
      &:before {
        content: none;
      }
    }
  }
`;

export { MenuTreeStyles };
