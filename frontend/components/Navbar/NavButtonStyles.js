import styled from 'styled-components';

const NavButtonStyles = styled.div`
  display: none;
  @media (max-width: 850px) {
    display: block;
    position: absolute;
    top: 2rem;
    right: 2rem;
  }
`;

export default NavButtonStyles;
