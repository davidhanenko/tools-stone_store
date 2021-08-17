import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import img from '../../public/img/img_2.png';
import styled from 'styled-components';
const ProductStyles = styled.div`
  margin-top: 35rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  .img {
    height: 100%;
  }
  .desc {
  }
`;

export default function ProductsCategory({}) {
  return (
    <ProductStyles>
      <Image className='img' src={img} width={400} height={400} alt='' />
      <h3>Category</h3>
    </ProductStyles>
  );
}


