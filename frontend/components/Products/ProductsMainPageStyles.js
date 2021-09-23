import styled from 'styled-components';

const ProductsMainPageStyles = styled.section`
  position: relative;

  margin-top: 8rem;
  padding-left: 5rem;
  padding-right: 5rem;

  h2 {
    font-size: 4rem;
    text-transform: uppercase;
    font-weight: 400;
  }

  .products_main-page {
    display: flex;
    flex-wrap: scroll;
    overflow-x: scroll;
    overflow-y: none;
  }

  .icon-arrow-left {
    cursor: pointer;
    position: absolute;
    left: 0;
    top: 50%;
    border: none;
    background: none;
    font-size: 4rem;
    color: blue;
    &:hover {
      color: lightblue;
    }
  }

  .icon-arrow-right {
    cursor: pointer;
    position: absolute;
    right: 0;
    top: 50%;
    border: none;
    background: none;
    font-size: 4rem;
    color: blue;
    &:hover {
      color: lightblue;
    }
  }
`;

const ProductMainPageStyles = styled.div`
position: relative;

h3 {
  position: absolute;
  top: 40%;
  z-index: 2;
  font-size: 3rem;
  font-weight: 400;
  color: blue;
}

  .product-item {
    flex: 0 0 auto;
    overflow: auto;
    white-space: nowrap;
    padding: 2rem;
  }
  /* .product-image {
    max-width: 250px;
    max-height: 250px;
  } */
`;

export { ProductsMainPageStyles, ProductMainPageStyles };
