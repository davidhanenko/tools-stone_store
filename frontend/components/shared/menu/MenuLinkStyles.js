import styled from 'styled-components';

const MenuLinkStyles = styled.div`
  padding: 0 2rem 0 2rem;

  a {
    text-decoration: none;
  }
  .link-title {
    color: white;
    text-transform: uppercase;
    transition: all 0.3s;
  }
  &:hover .link-title {
    color: blue;
  }
`;

export { MenuLinkStyles };
