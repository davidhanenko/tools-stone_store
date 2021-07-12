import { createContext, useContext, useState } from 'react';

const LocalStateContext = createContext();
const LocalStateProvider = LocalStateContext.Provider;

function NavStateProvider({ children }) {
  const [navOpen, setNavOpen] = useState(false);

  function toggleNav() {
    setNavOpen(!navOpen);
  }

  function closeSideNav() {
    setNavOpen(false);
  }

  function openSideNav() {
    setNavOpen(true);
  }

  return (
    <LocalStateProvider
      value={{ navOpen, setNavOpen, toggleNav, openSideNav, closeSideNav }}
    >
      {children}
    </LocalStateProvider>
  );
}

function useNav() {
  const all = useContext(LocalStateContext);
  return all;
}

export { NavStateProvider, useNav };
