import { createContext, useContext, useState } from 'react';

const LocalStateContext = createContext();
const LocalStateProvider = LocalStateContext.Provider;

function MenuStateProvider({ children }) {
  const [isOpen, setOpen] = useState(false);
  const [btnClicked, setBtnClicked] = useState(false);
  const [isActive, setIsActive] = useState('');

  function closeMenu() {
    setOpen(false);
  }

  return (
    <LocalStateProvider
      value={{
        isOpen,
        setOpen,
        btnClicked,
        setBtnClicked,
        closeMenu,
        isActive,
        setIsActive,
      }}
    >
      {children}
    </LocalStateProvider>
  );
}

function useMenu() {
  const all = useContext(LocalStateContext);
  return all;
}

export { MenuStateProvider, useMenu };