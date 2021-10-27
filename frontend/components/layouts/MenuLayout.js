import { MenuStateProvider } from '../../lib/menuState';
import ItemsMenu from '../menu/ItemsMenu';

export default function MenuLayout({ children }) {
  return (
    <MenuStateProvider>
      <ItemsMenu>{children}</ItemsMenu>
    </MenuStateProvider>
  );
}
