import React from "react";
import "./App.css";
import Product from "./components/Product";
import Basket from "./components/Basket";
import Header from "./components/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="p-4">
      <Router>
        <Header />
        <Switch>
          <Route path="/checkout">
            <Basket />
          </Route>
          <Route path="/">
            <Product id="1" title="iPad Pro M1" price={999} />
            <Product id="2" title="Can't Hurt Me by David Goggins" price={49} />
            <Product
              id="3"
              title="HackerRank Practice | Competitions"
              price={0}
            />
            <Product id="4" title="Soft Skills by John Somez" price={29} />

            <Basket />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
