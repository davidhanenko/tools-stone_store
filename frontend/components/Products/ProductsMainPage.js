import gql from 'graphql-tag';

import { useQuery } from '@apollo/client';
import Image from 'next/image';

import ServicesSlider from '../sliders/services-slider/ServicesSlider';

import { ProductsMainPageStyles } from './ProductsMainPageStyles';

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

// function ProductMainPage({ product, r }) {

//   return (
//     <ProductMainPageStyles ref={r}>
//       <h3>{product.product_title}</h3>

//       {/* <div className='product-item'>
//         <Image
//           className='product-image'
//           src={product.product_categories[0]?.single_products[0]?.image?.url}
//           width={300}
//           height={300}
//           layout='responsive'
//           // objectFit='cover'
//         />
//       </div> */}
//     </ProductMainPageStyles>
//   );
// }

export default function ProductsMainPage({}) {
  const { data, error, loading } = useQuery(PRODUCTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const SLIDE_COUNT = data?.products?.length;

  const slides = Array.from(Array(SLIDE_COUNT).keys());

  // func from Embla Carousel docs
  const mediaByIndex = index => data?.products[index % data?.products.length];


  return (
    <ProductsMainPageStyles>
      <h2>Products</h2>

      <ServicesSlider slides={slides} mediaByIndex={mediaByIndex} />

      {/* <div className='products_main-page'>
        {data?.products.map(product => (
          <ProductMainPage r={scrollRef} key={product.id} product={product} />
        ))}
      </div> */}
    </ProductsMainPageStyles>
  );
}
