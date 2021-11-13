import styled from 'styled-components';

const DropdownStyles = styled.div`
  align-self: center;
  display: inline-block;

  .dropdown-btns-group {
    @media (max-width: 850px) {
      display: flex;
      padding-top: 0.2rem;
      padding-bottom: 0.2rem;
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
    right: 2rem;
  }
  svg {
    color: grey;
    transform: scale(2);
  }
`;

const DropdownMenuStyles = styled.ul`
  margin: 0;
  opacity: 0;
  z-index: 2;
  padding: 1rem;
  display: none;
  visibility: hidden;

  ${props =>
    props.dropdownOpen && `opacity: 1; visibility: visible;display: block;`}
  @media (min-width: 850px) {
    background: #c1e2ec;
    min-height: 15rem;
    position: absolute;
    width: 50rem;
    left: 3rem;
    margin: 0;
    padding: 2rem;
    opacity: 0;
    visibility: hidden;
    display: none;
    grid-template-columns: 1fr 1fr;
    transition: all 0.5s;
    ${props =>
      props.dropdownOpen && `opacity: 1; visibility: visible; display: grid;`}
  }
`;

const DropdownItemStyles = styled.li`
  list-style: none;
  text-transform: capitalize;
  cursor: pointer;
  line-height: 0.7rem;
  padding: 1rem;
  a {
    text-decoration: none;
    color: white;
    font-size: 1.5rem;
    transition: all 250ms;
    &:hover {
      text-decoration: none;
      color: var(--black);
    }
  }
`;

export {
  DropdownStyles,
  DropdownBtnStyles,
  DropdownMenuStyles,
  DropdownItemStyles,
};
