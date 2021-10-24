import styled from 'styled-components';

const ItemsMenuStyles = styled.nav`
  background: lightblue;
  padding-top: 2rem;
  padding-left: 2rem;

  .main-title {
    font-size: 3.5rem;
    text-transform: uppercase;
    font-weight: 400;
    color: darkblue;
    margin: 0;
    transition: all 0.35s;
    transform: translateX(6rem);
    @media (max-width: 850px) {
      transform: translateX(0);
    }
  }
  .menu-links {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    @media (max-width: 850px) {
      width: 300px;
      flex-direction: column;
      align-items: flex-start;
      transform: translateX(-100%);
      transition: all 0.35s;
      ${props => props.menuOpen && `transform: translateX(0%);`};
    }
  }
`;

const MenuButtonStyles = styled.div`
  display: none;
  transition: all 0.35s;
  @media (max-width: 850px) {
    display: block;
    position: absolute;
    top: 2rem;
    left: 2rem;
  }
`;

export { ItemsMenuStyles, MenuButtonStyles };
