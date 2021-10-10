import { useHistory } from "react-router";
import { Card } from "antd";

function InfoBadge({ text }) {
  return <div className="info-badge">{text}</div>;
}

function Rating({ rating }) {
  return (
    <span className="rating">
      {rating}/5 <i className="bi bi-star"></i>
    </span>
  );
}

function Review({ count }) {
  return <span className="review">{count} đánh giá</span>;
}

export default function ItemCard(item) {
  const history = useHistory();

  return (
    <Card
      key={item.index}
      className="item-card"
      onClick={() => {
        history.push(`/${item.catagory}/${item.index}`);
      }}
      cover={<img className="item-card-cover" src={item.img} alt="item"></img>}
    >
      <div className="item-info">
        <div className="eye-catcher">
          {item?.weight ? <InfoBadge text={item.weight} /> : <></>}
          {item?.["battery_cap"] ? (
            <InfoBadge text={item?.["battery_cap"]} />
          ) : (
            <></>
          )}
          {item?.["brand"] ? <InfoBadge text={item?.["brand"]} /> : <></>}
        </div>
        <div className="item-rating">
          <Rating rating={item.rate} />
          <Review count={item.review} />
        </div>
        <span className="item-name">{item.name}</span>
        <span className="item-price">{item.price}</span>
      </div>
    </Card>
  );
}
