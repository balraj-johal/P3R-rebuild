import { useState } from "react";
import Menu from "./components/Menu";

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(!menuOpen);
  const toggleMenuOpen = () => setMenuOpen(!menuOpen);

  return (
    <main>
      <h1>Persona 3 Reload - Menu Rebuild</h1>
      <Menu isOpen={menuOpen} close={closeMenu} />
      <button onClick={toggleMenuOpen}>Toggle Menu Open</button>
    </main>
  );
};

export default App;
