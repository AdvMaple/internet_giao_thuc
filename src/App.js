import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Sale from "./pages/Sale";
import { Phones, Phone } from "./pages/phone";
import { Tablet, Tablets } from "./pages/tablet";
import { Laptop, Laptops } from "./pages/laptop";
import { Etc, Etcs } from "./pages/etc";
import Checkout from "./checkout";
import Navbar from "./components/Navbar";
import { useState } from "react";

function App() {
  const [cart, setCart] = useState([]);

  function addItem(item) {
    let newCart = cart;
    newCart.push(item);
    setCart(newCart);
  }

  function removeItem(item) {
    console.log("Xóa: ", item.index);
    const delIndex = item.index;

    const newCart = cart.filter((item, index) => {
      console.log();
      if (delIndex != index) return true;
    });
    setCart(newCart);
  }

  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/phone/:id">
          <Phone handleAddCart={addItem} />
        </Route>

        <Route path="/tablet/:id">
          <Tablet handleAddCart={addItem} />
        </Route>

        <Route path="/laptop/:id">
          <Laptop handleAddCart={addItem} />
        </Route>

        <Route path="/etc/:id">
          <Etc handleAddCart={addItem} />
        </Route>

        <Route path="/phone">
          <Phones />
        </Route>

        <Route path="/tablet">
          <Tablets />
        </Route>

        <Route path="/laptop">
          <Laptops />
        </Route>

        <Route path="/etc">
          <Etcs />
        </Route>

        <Route path="/sale">
          <Sale />
        </Route>

        <Route path="/checkout">
          <Checkout cart={cart} removeItem={removeItem} />
        </Route>
      </Switch>
    </>
  );
}

export default App;
