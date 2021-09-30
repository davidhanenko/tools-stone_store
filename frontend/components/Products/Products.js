import gql from 'graphql-tag';
import { useQuery } from '@apollo/client';
import { useState } from 'react';

import ServicesSlider from '../sliders/services-slider/ServicesSlider';

import { ProductsStyles, ProductItemStyles } from './ProductsStyles';

const ALL_PRODUCTS = gql`
  query ALL_PRODUCTS {
    products {
      id
      title: product_title
      category: product_categories(limit: 1) {
        single: single_products(limit: 1) {
          image {
            url
          }
        }
      }
    }
  }
`;

const PRODUCTS_CATEGORY = gql`
  query PRODUCTS_CATEGORY($productsCategory: String!) {
    products(where: { product_title: $productsCategory }) {
      product_title
      category: product_categories {
        product_category
        id
        single: single_products(limit: 1) {
          image {
            url
          }
        }
      }
    }
  }
`;

function ProductItem({ productsCategory }) {
  const { data, error, loading } = useQuery(PRODUCTS_CATEGORY, {
    variables: {
      productsCategory,
    },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;


  return (
    <ProductItemStyles>
      <h3>{productsCategory}</h3>
      {data.products[0].category.map(p => (
        <h2 key={p.id}>{p.product_category}</h2>
      ))}
    </ProductItemStyles>
  );
}

export default function Products({ productsCategory }) {
  const { data, error, loading } = useQuery(ALL_PRODUCTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const SLIDE_COUNT = data?.products?.length;
  const slides = Array.from(Array(SLIDE_COUNT).keys());
  // func from Embla Carousel docs
  const mediaByIndex = index => data?.products[index % data?.products.length];

  return (
    <ProductsStyles>
      <h2 className='main-title'>Products</h2>
      <ServicesSlider slides={slides} mediaByIndex={mediaByIndex} />
      {productsCategory && <ProductItem productsCategory={productsCategory} />}
    </ProductsStyles>
  );
}
