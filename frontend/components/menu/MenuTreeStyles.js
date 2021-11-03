import styled from 'styled-components';

const MenuTreeStyles = styled.ul`
  background: lightgray;
  margin: 0;
  padding: 0.7rem 2rem;
`;

const TreeNodeStyles = styled.li`
  display: inline;
  font-size: 1.6rem;
  font-weight: 300;
  text-transform: capitalize;
  a {
    text-decoration: none;
    transition: all 0.25s;
    &:hover {
      color: purple;
    }
  }
  &:last-of-type {
    a {
      color: white;
      pointer-events: none;
    }
  }
  &:before {
    content: ' > ';
    padding: 0 .2rem;
  }
  &:first-of-type {
    &:before {
      content: none;
    }
  }
`;

export { MenuTreeStyles, TreeNodeStyles };
