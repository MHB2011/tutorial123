import { MenuItem } from "./MenuItem";
import { MenuProps } from "./menuConfigType";
import { isSubmenuOpen } from "./isSubmenuOpen";
import { useMenu } from "./useMenu";

export const Menu = ({ menuConfig }: MenuProps) => {
  const { menuState, toggleSubmenu } = useMenu();

  return (
    <div>
      {menuConfig.map((item) => {
        const menuItemTitle = item.title.toLowerCase();
        const isOpen = isSubmenuOpen({ menuState, menuItemTitle });

        return (
          <MenuItem
            key={menuItemTitle}
            item={item}
            isOpen={isOpen}
            toggleState={() => toggleSubmenu(menuItemTitle)}
          />
        );
      })}
    </div>
  );
};
