import BuyForm from "./BuyForm";
import Cart from "./Cart";

export default function Checkout(props) {
  return (
    <>
      <div className="Checkout">
        <Cart {...props} />
        <BuyForm className="mx-3" />
      </div>
    </>
  );
}
