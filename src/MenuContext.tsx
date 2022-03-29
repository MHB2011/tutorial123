import { createContext } from "react";
import { MenuStateType } from "./menuConfigType";

interface MenuContextType {
  menuState: MenuStateType;
  toggleSubmenu: (menuItem: string) => void;
}
export const MenuContext = createContext({} as MenuContextType);
