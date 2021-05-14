import React from "react";
import { useDispatch } from "react-redux";
import { addItemToBasket, removeItemFromBasket } from "../features/basketSlice";

function Product({ id, title }) {
  const dispatch = useDispatch();

  const addItem = () => {
    const product = {
      id,
      title,
    };
    dispatch(addItemToBasket(product));
  };

  const removeItem = () => {
    dispatch(removeItemFromBasket({ id }));
  };

  return (
    <div className=" flex justify-between items-center p-10 border-purple-700 border m-5">
      <p>{title}</p>
      <div className="flex flex-col p-2">
        <button
          onClick={addItem}
          className="p-4 bg-blue-300 rounded-2xl focus-within:outline-none 
      focus:ring-2 ring-blue-900 hover:bg-blue-500"
        >
          Add to Basket
        </button>
        <button
          onClick={removeItem}
          className="p-4 mt-2 bg-red-300 rounded-2xl focus-within:outline-none 
    focus:ring-2 ring-red-900 hover:bg-red-500"
        >
          Remove from Basket
        </button>
      </div>
    </div>
  );
}

export default Product;
