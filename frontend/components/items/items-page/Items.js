import ItemsMenu from '../../shared/menu/ItemsMenu';
import ItemsSlider from '../../shared/sliders/items-slider/ItemsSlider';
import ItemsCategory from './ItemsCategory';
import { ItemsStyles } from './ItemsStyles';

export default function Items({ itemsCategory, products }) {
  return (
    <ItemsStyles>
      <div className='menu-container'></div>
      <h2 className='main-title'>Products</h2>
      <ItemsMenu products={products} />
      {/* <ItemsSlider slides={slides} itemsByIndex={itemsByIndex} /> */}
      {itemsCategory && (
        <ItemsCategory itemsCategory={itemsCategory.split(' ').join('_')} />
      )}
    </ItemsStyles>
  );
}
