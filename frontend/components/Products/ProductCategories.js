import React, { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';

import Image from 'next/image';
import img from '../../public/img/img_2.png';
import styled from 'styled-components';

const PRODUCT_CATEGORY = gql`
  query PRODUCT_CATEGORY($start: Int = 0, $limit: Int = 1) {
    products {
      id
      category
      single_products(start: $start, limit: $limit) {
        id
        Name
        image {
          url
        }
      }
    }
  }
`;

console.log();

export default function ProductsCategories({}) {
  const { data, error, loading } = useQuery(PRODUCT_CATEGORY);

  console.log(data);
  return (
    <>
      <h1>Products</h1>
      {data?.products.map(c => (
        <div key={c.id}>
          <h2>{c.category}</h2>

          <Image
            width={300}
            height={300}
            src={c?.single_products[0].image[0].url}
          />
        </div>
      ))}
    </>
  );
}
