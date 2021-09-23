import gql from 'graphql-tag';

import { useQuery } from '@apollo/client';
import { useRef } from 'react';

import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';

import Image from 'next/image';

import {
  ProductMainPageStyles,
  ProductsMainPageStyles,
} from './ProductsMainPageStyles';

const PRODUCTS = gql`
  query PRODUCTS {
    products {
      id
      product_title
      product_categories {
        single_products {
          title
          description
          price
          image {
            url
          }
        }
      }
    }
  }
`;

function ProductMainPage({ product }) {
  return (
    <ProductMainPageStyles>
      <h3>{product.product_title}</h3>
      <div className='flex-item'>
        <img
          src={product.product_categories[0]?.single_products[0]?.image?.url}
          alt=''
        />
      </div>
    </ProductMainPageStyles>
  );
}

export default function ProductsMainPage({}) {
  const { data, error, loading } = useQuery(PRODUCTS);

  // console.log(data);

  // horizontal scroll for products
  const scrollRef = useRef();


  const handleHorizontalScroll = direction => {
    if (direction === 'left') {
      scrollRef ? (scrollRef.current.scrollLeft -= 300) : null;
    } else {
      scrollRef ? (scrollRef.current.scrollLeft += 300) : null;
    }
  };

  return (
    <ProductsMainPageStyles>
      <h2>Products</h2>
      <button
        className='icon-arrow-left'
        onClick={() => handleHorizontalScroll('left')}
      >
        <MdKeyboardArrowLeft />
      </button>

      <div className='products_main-page' ref={scrollRef}>
        {data?.products.map(product => (
          <ProductMainPage key={product.id} product={product} />
        ))}
      </div>

      <button
        className='icon-arrow-right'
        onClick={() => handleHorizontalScroll('right')}
      >
        <MdKeyboardArrowRight />
      </button>
    </ProductsMainPageStyles>
  );
}
