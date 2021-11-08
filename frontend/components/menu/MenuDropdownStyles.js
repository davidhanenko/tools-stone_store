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
  background: #c1e2ec;
  opacity: 0;
  display: none;
  z-index: 2;
  padding: 2rem;
  ${props => props.dropdownOpen && `opacity: 1; display: block;`}
  @media (min-width: 850px) {
    background: #c1e2ec;
    min-height: 15rem;
    position: fixed;
    width: 40rem;
    left: 3rem;
    margin: 0;
    padding: 2rem;
    opacity: 0;
    visibility: hidden;
    display: grid;
    grid-template-columns: 1fr 1fr;
    transition: all 0.5s;
    ${props => props.dropdownOpen && `opacity: 1; visibility: visible;`}
  }
`;

const DropdownItemStyles = styled.li`
  list-style: none;
  text-transform: capitalize;
  cursor: pointer;
  line-height: 0.5rem;
  padding: 1rem;
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
