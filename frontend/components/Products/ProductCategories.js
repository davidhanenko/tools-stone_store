import React, { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';

import Image from 'next/image';
import img from '../../public/img/img_2.png';
import styled from 'styled-components';

const PRODUCT_CATEGORY = gql`
  query PRODUCT_CATEGORY {
    products {
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

export default function ProductsCategories({}) {
  const { data, error, loading } = useQuery(PRODUCT_CATEGORY);

  console.log(data);

  return (
    <>
      <h1>Products</h1>
      {data?.products.map(c => (
        <div key={c.id}>
          <h2>{c.product_title}</h2>

          <h3>{c?.product_categories[1]?.single_products[0]?.title}</h3>
          <h3>${c?.product_categories[1]?.single_products[0]?.price}</h3>
          <img
            src={c?.product_categories[1]?.single_products[0]?.image?.url}
            alt=''
          />
          <h4>{c?.product_categories[1]?.single_products[0]?.description}</h4>

          {/* <Image
            width={300}
            height={300}
            src={
              c?.products_sub_categories[1]?.single_products[1]?.image[0]?.url
            }
          /> */}
        </div>
      ))}
    </>
  );
}
