import { MenuItemProps } from "./menuConfigType";

export const MenuItem = ({ item, isOpen, toggleState }: MenuItemProps) => {
  const titleLowerCase = item.title.toLowerCase();

  return (
    <div data-test-id={`first-level-${titleLowerCase}`}>
      <p>{item.title}</p>
      {item.subItems?.length && (
        <>
          <button
            data-test-id={`button-${titleLowerCase}`}
            onClick={toggleState}
          >
            {isOpen ? "Hide" : "Expand"}
          </button>
          {isOpen && (
            <ul data-test-id={`ul-${titleLowerCase}`}>
              {item.subItems.map((subitem) => {
                const subitemLowerCase = subitem.toLowerCase();
                const subitemTestString = `${titleLowerCase}-${subitemLowerCase}`;
                return (
                  <li
                    key={subitemTestString}
                    data-test-id={`li-${subitemTestString}`}
                  >
                    {subitem}
                  </li>
                );
              })}
            </ul>
          )}
        </>
      )}
    </div>
  );
};
