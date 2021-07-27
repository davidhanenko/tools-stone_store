import styled from 'styled-components';

const NavStyles = styled.div`
  grid-area: navbar;
  overflow-x: hidden;
  place-self: center end;
  text-transform: uppercase;

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
    @media (max-width: 850px) {
      position: fixed;
      gap: 0;
      top: var(--searchHeight);
      right: 0;
      width: 40%;
      min-width: 250px;
      background: var(--offWhite);
      transform: translateX(100%);
      z-index: 2;
      ${props =>
        props.open &&
        `grid-auto-flow: row; transform: translate(0, var(--navHeight)); transition: all 0.35s;`};
      ${props =>
        !props.open &&
        props.width <= 850 &&
        `grid-auto-flow: row; transform: translateX(100%); transition: 0.35s;`};
    }
  }
  a {
    padding: 0.2rem 1rem;

    color: grey;
    position: relative;
    &:hover,
    &:focus {
      text-decoration: none;
      color: var(--black);
      transition: 250ms;
    }
    @media (max-width: 850px) {
      padding-left: 3rem;
      width: 200px;
      border-bottom: 1px solid var(--lightGrey);
    }
  }
`;

const NavButtonStyles = styled.div`
  display: none;
  @media (max-width: 850px) {
    display: block;
    position: absolute;
    top: 2rem;
    right: 2rem;
  }
`;

export { NavStyles, NavButtonStyles };