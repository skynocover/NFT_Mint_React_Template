import "./App.css";
import { useState } from "react";
import { MainMint } from "./MainMint.js";
import { NavBar } from "./NavBar.js";

function App() {
  const [accounts, setAccounts] = useState([]);
  return (
    <div className="overlay">
      <div className="App">
        <NavBar accounts={accounts} setAccounts={setAccounts} />
        <MainMint accounts={accounts} setAccounts={setAccounts} />
      </div>
      <div className="moving-background"></div>
    </div>
  );
}

export default App;
