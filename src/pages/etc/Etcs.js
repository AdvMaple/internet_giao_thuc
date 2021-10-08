import data from "./../../data.json";
import ItemCard from "../../components/ItemCard";

export default function Etcs() {
  const renderList = () => {
    return data.etc.map((item, index) => {
      return <ItemCard key={index} {...item} index={index} catagory="etc" />;
    });
  };

  return (
    <div className="Store">
      <div className="chart">
        <h6>Bảng số liệu</h6>
      </div>
      <div class="item-list">{renderList()}</div>
    </div>
  );
}
