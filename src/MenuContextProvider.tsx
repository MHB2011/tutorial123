import { PropsWithChildren, useReducer } from "react";
import { menuConfigType } from "./menuConfigType";
import { menuReducer } from "./menuReducer";
import { MenuActionType } from "./MenuActionType";
import { getInitialState } from "./getInitialState";
import { MenuContext } from "./MenuContext";

interface MenuContextProviderProps {
  menuConfig: menuConfigType;
}
export const MenuContextProvider = ({
  children,
  menuConfig,
}: PropsWithChildren<MenuContextProviderProps>) => {
  const initialState = getInitialState(menuConfig);
  const [menuState, dispatch] = useReducer(menuReducer, initialState);

  const toggleSubmenu = (menuItem: string) => {
    dispatch({
      type: MenuActionType.TOGGLE,
      payload: menuItem,
    });
  };

  return (
    <MenuContext.Provider value={{ menuState, toggleSubmenu }}>
      {children}
    </MenuContext.Provider>
  );
};
