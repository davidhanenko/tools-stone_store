import Products from '../../components/products/Products';

export default function ProductsCategoryPage({ query }) {
  return <Products productsCategory={query.products}/>;
}
