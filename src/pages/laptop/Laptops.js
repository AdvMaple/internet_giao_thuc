import data from "./../../data.json";
import ItemCard from "../../components/ItemCard";
import GraphContainer from "../../components/GraphContainer";
import { Bar } from "react-chartjs-2";

function BarChart() {
  const brandColor = [
    "hsla(0,0%,64%,0.8)", // Apple
    "hsla(168,70%,23%,0.8)", //Aser
    "hsla(199,100%,34%,0.8)", //Dell
    "hsla(197,99%,40%,0.8)", //HP
    "hsla(2,79%,47%, 0.8)", //Lenovo
    "hsla(59,94%,57%,0.8)", //Khác
  ];

  const data = {
    labels: ["Apple", "Acer", "Dell", "HP", "Lenovo", "Khác"],
    datasets: [
      {
        label: "Q1-2020",
        data: [2.9, 2.5, 7.3, 8.1, 8.9, 8.1],
        backgroundColor: "#034c9d",
      },

      {
        label: "Q1-2021",
        data: [5.7, 4.9, 10, 15.4, 16.3, 15.8],
        backgroundColor: "#f76600",
      },
    ],
  };

  const options = {
    plugins: {
      legend: { display: true },
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
      <Bar data={data} options={options} />

      <div className="table-container">
        <table>
          <tr>{renderTableHead()}</tr>
          {renderTableData()}
        </table>
      </div>
    </>
  );
}

export default function Laptops() {
  const renderList = () => {
    return data.laptop.map((item, index) => {
      return <ItemCard key={index} {...item} index={index} catagory="laptop" />;
    });
  };

  return (
    <>
      <div className="Store">
        <div class="item-list">{renderList()}</div>

        <GraphContainer name="laptop">
          <BarChart />
        </GraphContainer>
      </div>
    </>
  );
}
