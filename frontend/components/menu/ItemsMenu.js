import gql from 'graphql-tag';
import { useQuery } from '@apollo/client';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { Slant as Hamburger } from 'hamburger-react';

import { useMenu } from '../../context/menuState';
import useWindowDimensions from '../../lib/windowDimensions';

import MenuLink from './MenuLink';
import MenuTree from './MenuTree';
import { ItemsMenuStyles, MenuButtonStyles } from './ItemsMenuStyles';

const SERVICE_MENU_QUERY = gql`
  query SERVICE_MENU_QUERY($service: String!) {
    services(where: { service: $service }) {
      items {
        id
        title
        items_categories {
          id
          category: category_title
        }
      }
    }
  }
`;

export default function ItemsMenu({}) {
  const router = useRouter();
  const service = router.asPath.split('/')[1];

  const { data, error, loading } = useQuery(SERVICE_MENU_QUERY, {
    variables: {
      service: service,
    },
  });

  const { isOpen, setOpen, btnClicked, setBtnClicked, closeMenu } = useMenu();

  const { width } = useWindowDimensions();

  useEffect(() => {
    if (width >= 850) {
      closeMenu();
    }
  }, [width]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const menuItems = data?.services[0].items;

  return (
    <>
      <ItemsMenuStyles menuOpen={isOpen} btnClicked={btnClicked}>
        <div className='menu-header'>
          <MenuButtonStyles onClick={() => setBtnClicked(true)}>
            <Hamburger
              hideOutline={false}
              label='Show menu'
              toggled={isOpen}
              toggle={setOpen}
            />
          </MenuButtonStyles>

          <h3 className='main-title'>{service}</h3>
        </div>
        <div className='menu-links'>
          {menuItems?.map(menuItem => (
            <MenuLink menuItem={menuItem} key={menuItem.id} />
          ))}
        </div>

        <div className='side-menu-links'>
          {menuItems?.map(menuItem => (
            <MenuLink
              menuItem={menuItem}
              key={menuItem.id}
              onClick={() => {
                setOpen(false);
              }}
            />
          ))}
        </div>
      </ItemsMenuStyles>

      <MenuTree />
    </>
  );
}
