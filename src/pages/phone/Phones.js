import data from "./../../data.json";
import { Doughnut } from "react-chartjs-2";
import ItemCard from "../../components/ItemCard";
import GraphContainer from "../../components/GraphContainer";

function DoughnutChart() {
  const data = {
    labels: ["Apple", "Samsung", "Oppo", "Xiaomi", "Huawei", "Khác"],
    datasets: [
      {
        label: "Doanh số",
        data: [39, 28, 11, 3, 9, 10],
        backgroundColor: [
          "hsla(0,0%,64%,0.8)", // Apple
          "hsla(211,86%,31%,0.8)", //Samsung
          "hsla(148,90%,20%,0.8)", //Oppo
          "hsla(24,90%,48%,0.8)", //Xiaomi
          "hsla(0,90%,48%,0.8)", //Huawei
          "hsla(59,94%,57%,0.8)", //Khác
        ],
        borderColor: [
          "hsla(0,0%,84%,1)", // Apple
          "hsla(211,96%,51%,1)", //Samsung
          "hsla(148,100%,40%,1)", //Oppo
          "hsla(24,100%,68%,1)", //Xiaomi
          "hsla(0,100%,68%,1)", //Huawei
          "hsla(59,94%,77%,0.8)", //Khác
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    plugins: {
      title: {
        display: true,
        position: "bottom",
        text: "Doanh số điện thoại 8 tháng đầu năm của các hãng Điện thoại",
      },
    },
  };

  const renderTableHead = () => {
    const td = data.labels.map((item) => {
      return <td>{item}</td>;
    });

    return (
      <>
        <th>Hãng</th>
        {td}
      </>
    );
  };

  const renderTableData = () => {
    return data.datasets.map((dataset) => {
      const td = dataset.data.map((d) => <td>{d}</td>);
      return (
        <tr>
          <th>{dataset.label}</th>
          {td}
        </tr>
      );
    });
  };

  return (
    <>
      <Doughnut data={data} options={options} />

      <div className="table-container">
        <table>
          <tr>{renderTableHead()}</tr>
          {renderTableData()}
        </table>
      </div>
    </>
  );
}

export default function Phones() {
  const renderList = () => {
    return data.phone.map((item, index) => {
      return <ItemCard key={index} {...item} index={index} catagory="phone" />;
    });
  };

  return (
    <>
      <div className="Store">
        <div className="item-list">{renderList()}</div>

        <GraphContainer name="điện thoại">
          <DoughnutChart />
        </GraphContainer>
      </div>
    </>
  );
}
