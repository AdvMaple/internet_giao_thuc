import { Button } from "antd";
import { useHistory } from "react-router";

export default function Home() {
  const history = useHistory();
  return (
    <div className="Home">
      <div className="text">
        <h1>Mức giá kinh ngạc cho tất cả mặt hàng yêu thích của bạn</h1>
        <Button
          type="primary"
          color="primary"
          onClick={() => {
            history.push("/phone");
          }}
        >
          Mua Ngay
        </Button>
      </div>
    </div>
  );
}
