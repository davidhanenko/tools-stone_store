import styled from 'styled-components';

const NavSubMenuStyles = styled.ul`
  list-style: none;
  position: fixed;
  top: 0;

`;

function SubMenuItem() {
  return <li>1</li>;
}

export default function NavSubMenu() {
  return (
    <NavSubMenuStyles>
      <SubMenuItem />
    </NavSubMenuStyles>
  );
}
