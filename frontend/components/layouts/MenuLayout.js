import PropTypes from 'prop-types';
import { MenuStateProvider } from '../../context/menuState';

import { GlobalStyles } from './GlobalStyles';
import Header from './partials/Header';
import ItemsMenu from '../menu/ItemsMenu';

export default function MenuLayout({ children }) {

  return (
    <>
      <GlobalStyles />
      <Header />
      <MenuStateProvider>
        <ItemsMenu />
      </MenuStateProvider>
      {children}
    </>
  );
}

MenuLayout.propTypes = {
  children: PropTypes.any,
};
