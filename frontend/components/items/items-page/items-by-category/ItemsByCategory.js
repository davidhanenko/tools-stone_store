import ItemsCategory from '../items-category/ItemsCategory';
import { ItemsByCategoryStyles } from './ItemsByCategoryStyles';

export default function Items({ items }) {
  return (
    <ItemsByCategoryStyles>
      <ItemsCategory items={items} />
    </ItemsByCategoryStyles>
  );
}
