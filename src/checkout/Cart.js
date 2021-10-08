export default function Cart(props) {
  const { cart } = props;
  console.log("here", props);

  const renderCart = () => {
    return cart.map((item, index) => {
      return (
        <div className="item-container" key={index}>
          <h4 className="item-name">{item.name}</h4>{" "}
          <span className="item-price">{item.price}</span>{" "}
          <span
            className="delete-button"
            onClick={() => props.removeItem({ index: index, item: item })}
          >
            Xóa
          </span>
        </div>
      );
    });
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
