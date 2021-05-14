import React from "react";
import "./App.css";
import Product from "./components/Product";
import { useSelector } from "react-redux";
import { selectItemsCount } from "./features/basketSlice";

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
      <Product id="1" title="iPad Pro M1" />
      <Product id="2" title="Can't Hurt Me by David Goggins" />
      <Product id="3" title="HackerRank Practice | Competitions" />
      <Product id="4" title="Soft Skills by John Somez" />
    </div>
  );
}

export default App;
