import './App.css';

import Topbar from "./component/Topbar";
import Cart from "./component/Cart";
import Products from "./component/Products";
import { useState } from "react";

export default function App() {
  const [shake, setShake] = useState(false);

  const handleProductAdd = () => {
    setShake(true);
    setTimeout(() => {
      setShake(false);
    }, 500);
  };
  return (
    <div className="App">
      <Topbar />
      <Cart shake={shake} />
      <Products onProductAdd={handleProductAdd} />
    </div>
  );
}
