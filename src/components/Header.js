import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import { selectItemsCount } from "../features/basketSlice";

function Header() {
  const history = useHistory();
  // Get all the Items
  const numberItemsInBasket = useSelector(selectItemsCount);
  console.log("The number of Items in your basket is: ", numberItemsInBasket);

  return (
    <div>
      <header className="p-4 flex justify-between items-center">
        {/** LEFT */}
        <div>
          <h1
            onClick={() => history.push("/")}
            className="text-5xl cursor-pointer"
          >
            E-Commerce App Store
          </h1>
        </div>

        {/** RIGHT */}
        <div>
          <h3
            className=" cursor-pointer"
            onClick={() => history.push("/checkout")}
          >
            Items in your Basket: {numberItemsInBasket}
          </h3>
        </div>
      </header>
    </div>
  );
}

export default Header;
