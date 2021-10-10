import { InputNumber, Button, Card } from "antd";
import { useState } from "react";
import { useHistory, useLocation, useParams } from "react-router";
import data from "./../../data.json";
import TechRow from "../../components/TechRow";

export default function Phone(props) {
  let { id } = useParams();

  let { pathname } = useLocation();

  const itemCatagory = pathname.split("/")[1];

  // eslint-disable-next-line
  const [item, setItem] = useState(data?.[itemCatagory][id]);

  // console.log(item);
  const [count, setCount] = useState(1);
  return (
    <Card className="Detail">
      <div className="Item">
        <Card className="item-img">
          <img
            src={item.img}
            style={{ width: "300px", height: "300px" }}
            alt="item"
          ></img>
        </Card>

        <div className="item-controller">
          <div className="item-info">
            <p className="item-name">{item?.name}</p>
            <p className="item-code">Mã: {item?.product_code}</p>
            <p className="item-price">{item?.price}</p>
          </div>
          <div className="item-buy-form">
            <form
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <div className="form-number">
                <label>Số lượng: </label>
                <InputNumber
                  onChange={(e) => {
                    setCount(e);
                  }}
                  min={1}
                  max={99}
                  defaultValue={1}
                  value={count}
                />
              </div>

              <div className="form-button">
                <Button
                  type="primary"
                  onClick={() => {
                    props.handleAddCart(item, count);
                  }}
                >
                  Mua ngay
                </Button>
                <Button
                  type="primary"
                  onClick={() => props.handleAddCart(item, count)}
                >
                  Thêm vào giỏ hàng
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="Description">
        <div className="des">
          {" "}
          <div className="review-text">
            {item.review_text
              ? item.review_text
              : "Sản phẩm không có thông tin review."}
          </div>
          <div className="review-video">
            <iframe
              src={
                item.review_vid
                  ? item.review_vid
                  : "https://www.youtube.com/embed/X1b3C2081-Q"
              }
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        <Card className="tech-des">
          <h3>Thông số kỹ thuật</h3>
          <table>
            <tbody>
              {/* Cứ mỗi hạng mục thông số thì lại có 1 row và 2 td */}
              <TechRow label="Hãng" value={item.brand} />
              <TechRow label="Model" value={item.name} />
              <TechRow label="PN" value={item.product_code} />
              <TechRow label="Cân nặng" value={item.weight} />
              <TechRow label="Pin" value={item.battery} />
              <TechRow label="Dung lượng pin" value={item.battery_cap} />
              <TechRow label="Ngày ra mắt" value={item.released_date} />
            </tbody>
          </table>
        </Card>
      </div>
    </Card>
  );
}
