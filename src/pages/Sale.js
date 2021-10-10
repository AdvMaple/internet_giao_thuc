import { Card, Table, Tag } from "antd";
import { useState } from "react";
import data from "./../data.json";

function PersonalInfo() {
  function getTagColor(tagName) {
    switch (tagName) {
      case "DEV":
        return "geekblue";

      case "STUDENT":
        return "#108ee9";

      case "VÔ TUYẾN":
        return "volcano";

      case "QUẢN TRỊ MẠNG":
        return "cyan";

      case "TRUYỀN DẪN QUANG":
        return "green";

      default:
        return "";
    }
  }

  const columns = [
    { title: "Tên", dataIndex: "name", key: "name" },
    { title: "Tuổi", dataIndex: "age", key: "age" },
    { title: "Mã sinh viên", dataIndex: "studentCode", key: "studentCode" },
    {
      title: "Kỹ năng",
      dataIndex: "skill",
      key: "skill",
      render: (skill) => {
        if (Array.isArray(skill)) {
          return (
            <>
              {skill.map((s) => {
                let color = getTagColor(s);
                return (
                  <Tag color={color} key={s}>
                    {s.toUpperCase()}
                  </Tag>
                );
              })}
            </>
          );
        } else {
          return <></>;
        }
      },
    },
    {
      title: "Thích",
      dataIndex: "likes",
      key: "likes",
    },
    {
      title: "Ghét",
      dataIndex: "hates",
      key: "hates",
    },
  ];
  const data = [
    {
      key: 1,
      name: "Kiều Mạnh Dũng",
      age: "21",
      studentCode: "B18DCVT062",
      skill: ["DEV", "STUDENT"],
      likes: "Lập trình",
      hates: "Giải tích",
    },
    {
      key: 2,
      name: "Nguyễn Minh Cường",
      age: "21",
      studentCode: "B18DCVT042",
      skill: ["QUẢN TRỊ MẠNG", "VÔ TUYẾN", "STUDENT"],
      likes: "Lập trình",
      hates: "Giải tích",
    },
    {
      key: 3,
      name: "Đặng Việt Dũng",
      age: "21",
      studentCode: "B18DCVT058",
      skill: ["TRUYỀN DẪN QUANG", "STUDENT"],
      likes: "Lập trình",
      hates: "Giải tích",
    },
  ];

  return (
    <Table
      pagination={{ hideOnSinglePage: true }}
      showHeader={true}
      columns={columns}
      dataSource={data}
    ></Table>
  );
}

export default function Sale() {
  const posts = data.posts;

  const [key, setKey] = useState("tab1");

  const render = () => {
    return posts.map((post, index) => {
      if (index === 0) {
        return (
          <Card key={index} title={post.title} hoverable className="sale-card">
            <PersonalInfo />
          </Card>
        );
      } else {
        return (
          <Card key={index} title={post.title} hoverable className="sale-card">
            {post?.main ? post.main : ""}
          </Card>
        );
      }
    });
  };

  return <div className="Sale">{render()}</div>;
}
