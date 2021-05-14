import React from "react";
import "./App.css";
import Product from "./components/Product";
import { useSelector } from "react-redux";
import { selectItemsCount } from "./features/basketSlice";
import Basket from "./components/Basket";

function App() {
  // Get all the Items
  const numberItemsInBasket = useSelector(selectItemsCount);
  console.log("The number of Items in your basket is: ", numberItemsInBasket);

  return (
    <div>
      <header className="p-4 flex justify-between items-center">
        {/** LEFT */}
        <div>
          <h1 className="text-5xl">E-Commerce App Store</h1>
        </div>

        {/** RIGHT */}
        <div>
          <h3>Items in your Basket: {numberItemsInBasket}</h3>
        </div>
      </header>
      <Product id="1" title="iPad Pro M1" price={999} />
      <Product id="2" title="Can't Hurt Me by David Goggins" price={49} />
      <Product id="3" title="HackerRank Practice | Competitions" price={0} />
      <Product id="4" title="Soft Skills by John Somez" price={29} />

      <Basket />
    </div>
  );
}

export default App;
