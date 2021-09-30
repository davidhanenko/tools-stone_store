import Products from '../../components/products/products-page/products';

export default function ProductsCategoryPage({ query }) {
  return <Products productsCategory={query.products}/>;
}
