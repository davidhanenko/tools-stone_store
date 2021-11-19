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
    color: var(--darkBlue);
    transform: scale(2);
  }
`;

const DropdownMenuStyles = styled.ul`
  background: var(--gray);
  padding-left: 2rem;
  z-index: 2;

  @media (min-width: 850px) {
    background: var(--gray);
    border: 1px solid var(--navBorder);
    position: fixed;
    top: 6rem;
    right: 2rem;
    width: 42rem;
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
    a {
      display: block;
    }
  }
`;

export {
  NavDropdownStyles,
  DropdownBtnStyles,
  DropdownMenuStyles,
  DropdownItemStyles,
};
