import "./App.css";
import { Menu } from "./Menu";
import { menuConfigType } from "./menuConfigType";
import { MenuContextProvider } from "./MenuContextProvider";

function App() {
  const menuConfig: menuConfigType = [
    { title: "Home" },
    { title: "Services", subItems: ["Cooking", "Cleaning"] },
    { title: "Contact", subItems: ["Phone", "Mail"] },
  ];

  console.log("test");
  console.log("test");
  console.log("test");

  console.log("test123");

  return (
    <MenuContextProvider menuConfig={menuConfig}>
      <Menu menuConfig={menuConfig} />
    </MenuContextProvider>
  );
}

export default App;
