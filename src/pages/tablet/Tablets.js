import data from "./../../data.json";
import ItemCard from "../../components/ItemCard";
import GraphContainer from "../../components/GraphContainer";
import { Pie } from "react-chartjs-2";

function PieChart() {
  const data = {
    labels: ["Samsung", "Lenovo", "Amazon", "Apple", "Huawei", "Khác"],
    datasets: [
      {
        label: "Doanh thu tablet Q1-2021",
        data: [20, 9, 9, 37, 20, 5],
        backgroundColor: [
          "hsla(211,86%,31%,0.8)", //Samsung
          "hsla(2,79%,47%, 0.8)", //Lenovo
          "hsla(35,100%,48%,0.8)", //Amazon
          "hsla(0,0%,64%,0.8)", // Apple
          "hsla(0,90%,48%,0.8)", //Huawei
          "hsla(59,94%,57%,0.8)", //Khác
        ],
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
      <Pie data={data} options={options} />
      <div className="table-container">
        <table>
          <tr>{renderTableHead()}</tr>
          {renderTableData()}
        </table>
      </div>
    </>
  );
}

export default function Tablets() {
  const renderList = () => {
    return data.tablet.map((item, index) => {
      return <ItemCard key={index} {...item} index={index} catagory="tablet" />;
    });
  };

  return (
    <>
      <div className="Store">
        <div class="item-list">{renderList()}</div>

        <GraphContainer name="tablet">
          <PieChart />
        </GraphContainer>
      </div>
    </>
  );
}
