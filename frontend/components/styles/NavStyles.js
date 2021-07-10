import styled from 'styled-components';

const NavStyles = styled.div`
  grid-area: navbar;
  overflow: hidden;
  place-self: center end;
  .nav-links {
    margin: 0;
    padding: 0;
    position: relative;
    padding-right: 3rem;
    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: max-content;
    gap: 0.5rem;
    place-self: center end;
    @media (max-width: 700px) {
      padding-top: 24rem;
      min-width: 300px;
      background: var(--offWhite);
      transform: translatex(100%);
      ${(props) =>
        props.open &&
        `grid-auto-flow: row; transform: translateX(0);transition:all 0.3s;`};
      ${(props) =>
        !props.open &&
        `grid-auto-flow: row; transform: translateX(100%);transition:all 0.3s;`};
    }
  }
  a {
    padding: 0.2rem 1rem;
    text-transform: uppercase;
    color: grey;
    position: relative;
    &:after {
      content: '';
      height: 80%;
      width: 1px;
      background: var(--lightGrey);
      position: absolute;
      right: -0.25rem;
      @media (max-width: 701px) {
        content: none;
      }
    }
    &:hover,
    &:focus {
      text-decoration: none;
      color: var(--black);
      transition: 250ms;
    }
  }
`;

export default NavStyles;
