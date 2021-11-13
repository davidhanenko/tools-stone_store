import styled from 'styled-components';

const NavDropdownStyles = styled.div`
  position: relative;
  align-self: center;
  .dropdown-btns-group {
    @media (max-width: 850px) {
      display: flex;
    }
  }
`;

const DropdownBtnStyles = styled.button`
  padding: 0;
  outline: none;
  border: none;
  background: transparent;
  cursor: pointer;
  @media (max-width: 850px) {
    position: relative;
    right: 2rem;
  }
  svg {
    color: grey;
    transform: scale(2);
  }
`;

const DropdownMenuStyles = styled.ul`
  background: var(--lightGrey);
  padding-left: 2rem;
  z-index: 2;
  @media (min-width: 850px) {
    background: var(--offWhite);
    border: 1px solid var(--lightGrey);
    position: fixed;
    top: 6rem;
    right: 2rem;
    width: 38rem;
    margin: 0 0 0 -5rem;
    padding: 2rem;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

const DropdownItemStyles = styled.li`
  list-style: none;
  text-transform: capitalize;
  cursor: pointer;
  padding: 0.5rem;
  line-height: 2rem;
  font-weight: 300;
  @media (max-width: 850px) {
    line-height: 1.7rem;
  }
  a {
    text-decoration: none;
    color: grey;
    font-size: 1.5rem;
    transition: 250ms;
    &:hover {
      text-decoration: none;
      color: var(--black);
    }
  }
`;

export {
  NavDropdownStyles,
  DropdownBtnStyles,
  DropdownMenuStyles,
  DropdownItemStyles,
};
