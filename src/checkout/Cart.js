import { useState } from "react";

export default function Cart(props) {
  const [totalPrice, setTotalPrice] = useState(0);
  const { cart } = props;
  console.log("here", props);

  const getPrice = (priceString) => {
    const numberPattern = /\d+/g;
    return priceString.match(numberPattern).join("");
  };

  const getPriceString = (priceString) => {
    return priceString.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const renderPrice = (count, price) => {
    price = getPrice(price);
    let finalPrice = price * count;

    let priceString = getPriceString(finalPrice);

    return priceString + "đ";
  };

  const renderCart = () => {
    let totalPrice = 0;
    const cartItem = cart.map((item, index) => {
      totalPrice =
        totalPrice + parseInt(getPrice(renderPrice(item.count, item.price)));

      return (
        <div className="item-container" key={index}>
          <h4 className="item-name">{item.name}</h4>{" "}
          <span className="item-count">{item.count}</span>{" "}
          <span className="item-price">
            {renderPrice(item.count, item.price)}
          </span>{" "}
          <span
            className="delete-button"
            onClick={() => props.removeItem({ index: index, item: item })}
          >
            Xóa
          </span>
        </div>
      );
    });

    return (
      <>
        {cartItem}
        <div className="total">
          Tổng: <span className="number">{getPriceString(totalPrice)}đ</span>
        </div>
      </>
    );
  };

  return (
    <>
      <div className="Cart">
        <legend>Giỏ hàng</legend>
        {props.cart.length === 0 ? <h3>Giỏ hàng rỗng</h3> : renderCart()}
      </div>
    </>
  );
}
