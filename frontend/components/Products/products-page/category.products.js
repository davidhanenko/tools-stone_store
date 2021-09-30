import gql from 'graphql-tag';
import { useQuery } from '@apollo/client';

import ProductsSubCategoty from './sub-category.products';
import { ProductsCategoryStyles } from './category.products.styles';

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

export default function ProductsCategory({ productsCategory }) {
  const { data, error, loading } = useQuery(PRODUCTS_CATEGORY, {
    variables: {
      productsCategory,
    },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <ProductsCategoryStyles>
      <h3 className='category-title'>{productsCategory}</h3>
      <div className='category'>
        {data.products[0].category.map(subCategory => (
          <ProductsSubCategoty key={subCategory.id} subCategory={subCategory} />
        ))}
      </div>
    </ProductsCategoryStyles>
  );
}
