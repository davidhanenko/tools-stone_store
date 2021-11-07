import styled from 'styled-components';

const DropdownStyles = styled.div`
  position: relative;
  align-self: center;
  display: inline-block;
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
  display: none;
  @media (max-width: 850px) {
    display: block;
    position: fixed;
    right: 1rem;
  }
  svg {
    color: grey;
    transform: scale(2);
  }
`;

const DropdownMenuStyles = styled.ul`
  background: var(--lightGrey);
  opacity: 0;
  display: none;
  z-index: 2;
  @media (min-width: 850px) {
    opacity: 0;
    background: var(--offWhite);
    min-height: 15rem;
    position: fixed;
    width: 40rem;
    left: 5rem;
    margin: 0;
    padding: 1rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    transition: all 300ms;
    ${props => props.dropdownOpen && `opacity: 1;`}
  }
  ${props => props.dropdownOpen && `opacity: 1; display: block;`}
`;

const DropdownItemStyles = styled.li`
  list-style: none;
  text-transform: capitalize;
  cursor: pointer;
  line-height: 1.5rem;
  padding: 2rem;
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
  DropdownStyles,
  DropdownBtnStyles,
  DropdownMenuStyles,
  DropdownItemStyles,
};
