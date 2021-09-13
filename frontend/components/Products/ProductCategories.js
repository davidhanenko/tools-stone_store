import React, { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';

import Image from 'next/image';
import img from '../../public/img/img_2.png';
import styled from 'styled-components';

const PRODUCT_CATEGORY = gql`
  query PRODUCT_CATEGORY {
    products {
      id
      category
      products_sub_categories {
        single_products {
          id
          name
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
          <h2>{c.category}</h2>

          <img
            src={
              c?.products_sub_categories[0]?.single_products[0]?.image[0]?.url
            }
            alt=''
          />

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
