import styled from 'styled-components';

const MenuLinkStyles = styled.div`
  padding-right: 2rem;
  a {
    text-decoration: none;
  }
  .link-title {
    margin-top: 0;
    color: white;
    text-transform: uppercase;
    transition: all 0.3s;
  }
  &:hover .link-title {
    color: blue;
  }
`;

export { MenuLinkStyles };
