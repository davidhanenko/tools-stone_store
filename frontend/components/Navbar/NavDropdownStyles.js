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

const DropdownMenuStyles = styled.div`
  background: var(--lightGrey);
  padding-left: 2rem;
  transition: opacity 2s;
  opacity: 1;
  z-index: 2;
  @media (min-width: 850px) {
    background: var(--offWhite);
    border: 1px solid var(--lightGrey);
    position: fixed;
    top: 6rem;
    width: 33rem;
    margin-left: -5rem;
    padding: 1rem;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

const DropdownItemStyles = styled.li`
  list-style: none;
  text-transform: capitalize;
  cursor: pointer;
  line-height: 1.5rem;
  padding: 0.5rem;
  a {
    text-decoration: none;
    color: grey;
    font-size: 1.5rem;
    &:hover {
      text-decoration: none;
      color: var(--black);
      transition: 250ms;
    }
  }
`;

export {
  NavDropdownStyles,
  DropdownBtnStyles,
  DropdownMenuStyles,
  DropdownItemStyles,
};
