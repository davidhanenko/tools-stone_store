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

export default function Products({}) {
  return (
    <ProductStyles>
      <Image
        className='img'
        src={img}
        width={400}
        height={400}
        
        alt=''
      />
      <div className='desc'>
        <h2>Name</h2>
        <h3>$888888888</h3>
        <ul>
          <li value='23'>23</li>
          <li value='26'>26</li>
          <li value='29'>29</li>
        </ul>
        <h4>Description</h4>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam
          quaerat harum soluta quibusdam, vel illum est.
        </p>
      </div>
    </ProductStyles>
  );
}
