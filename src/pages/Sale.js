import { Card, Table, Tag } from "antd";
import { useState } from "react";

function PersonalInfo({ name, age, skill, likes, hates, tags, studentCode }) {
  const columns = [
    { dataIndex: "name", key: "name" },
    {
      dataIndex: "age",
      key: "age",
    },
    {
      dataIndex: "studentCode",
      key: "studentCode",
    },
    {
      dataIndex: "age",
      key: "age",
    },
    {
      dataIndex: "skill",
      key: "skill",
      render: (skill) => {
        if (Array.isArray(skill)) {
          return (
            <>
              {skill.map((s) => {
                let color;
                switch (s) {
                  case "DEV":
                    color = "geekblue";
                    break;
                  case "STUDENT":
                    color = "#108ee9";
                    break;

                  default:
                    color = "";
                }
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
      name,
      age,
      studentCode,
      skill,
      likes,
      hates,
    },
  ];

  return <Table showHeader={true} columns={columns} dataSource={data}></Table>;
}

export default function Sale() {
  const posts = [
    {
      title: "Các thành viên nhóm 3",
      tabList: [
        { key: "tab1", tab: "Kiều Mạnh Dũng" },
        { key: "tab2", tab: "Người 2" },
        { key: "tab3", tab: "Người 3" },
      ],
      contentList: {
        tab1: (
          <PersonalInfo
            name="Kiều Mạnh Dũng"
            age="21"
            studentCode="B18DCVT062"
            skill={["DEV", "STUDENT"]}
            likes="Lập trình"
            hates="Giải tích"
          ></PersonalInfo>
        ),
        tab2: <p>Thành viên 2</p>,
        tab3: <p>Thành viên 3</p>,
      },
    },
    {
      title: "Chương trình khuyến mãi 2.",
      main: "Laboris pariatur irure anim ea esse dolore sit duis eiusmod. Irure enim consequat aliquip amet mollit ea ea magna. Tempor ipsum amet nulla ex est. Consequat id consequat et magna cillum quis ullamco cillum id non Lorem adipisicing quis non.",
    },
    {
      title: "Chương trình khuyến mãi 3.",
      main: "Laboris pariatur irure anim ea esse dolore sit duis eiusmod. Irure enim consequat aliquip amet mollit ea ea magna. Tempor ipsum amet nulla ex est. Consequat id consequat et magna cillum quis ullamco cillum id non Lorem adipisicing quis non.",
    },
    {
      title: "Chương trình khuyến mãi 4.",
      main: "Laboris pariatur irure anim ea esse dolore sit duis eiusmod. Irure enim consequat aliquip amet mollit ea ea magna. Tempor ipsum amet nulla ex est. Consequat id consequat et magna cillum quis ullamco cillum id non Lorem adipisicing quis non.",
    },
    {
      title: "Chương trình khuyến mãi 5.",
      main: "Laboris pariatur irure anim ea esse dolore sit duis eiusmod. Irure enim consequat aliquip amet mollit ea ea magna. Tempor ipsum amet nulla ex est. Consequat id consequat et magna cillum quis ullamco cillum id non Lorem adipisicing quis non.",
    },
  ];

  const [key, setKey] = useState("tab1");

  const render = () => {
    return posts.map((post, index) => {
      if (post.main)
        return (
          <Card key={index} title={post.title} hoverable className="sale-card">
            {post?.main ? post.main : ""}
          </Card>
        );
      else {
        return (
          <Card
            key={index}
            title={post.title}
            hoverable
            className="sale-card"
            tabList={post.tabList}
            activeTabKey={key}
            onTabChange={(key) => {
              setKey(key);
            }}
          >
            {post.contentList[key]}
          </Card>
        );
      }
    });
  };

  return <div className="Sale">{render()}</div>;
}
