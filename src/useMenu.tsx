import { useContext } from "react";
import { MenuContext } from "./MenuContext";

export const useMenu = () => {
  const context = useContext(MenuContext);

  return context;
};
