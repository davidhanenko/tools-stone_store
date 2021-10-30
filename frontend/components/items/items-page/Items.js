import ItemsCategory from './ItemsCategory';
import { ItemsStyles } from './ItemsStyles';

export default function Items({ items }) {
  return (
    <ItemsStyles>
      <ItemsCategory items={items} />
    </ItemsStyles>
  );
}
