import styled from 'styled-components';

const NavStyles = styled.ul`
  grid-area: navbar;
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: max-content;
  gap: 0.5rem;
  place-self: center end;
  a {
    padding: 1rem;
    text-transform: uppercase;
    /* border-right: 1px solid black; */
  }
  &:after {
    content: '';
    width: 1px;
    background: black;
  }
`;

export default NavStyles;
