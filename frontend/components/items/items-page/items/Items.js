import Item from './item/Item';
import { ItemsStyles } from './ItemsStyles';

export default function Items({ allServiceItems }) {

  return (
    <ItemsStyles>
      {allServiceItems.map(serviceItems => (
        <Item serviceItems={serviceItems} key={serviceItems.id} />
      ))}
    </ItemsStyles>
  );
}
