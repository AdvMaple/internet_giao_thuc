import { Modal, Button } from "antd";
import { useState } from "react";

export default function GraphContainer(props) {
  const [toggle, setToggle] = useState(false);

  const handleClose = () => {
    setToggle(false);
  };

  if (props.name)
    return (
      <>
        <div
          className="chart-modal"
          onClick={() => {
            setToggle(true);
          }}
        >
          Thông tin thú vị về {props.name}
        </div>

        <Modal
          visible={toggle}
          onOk={handleClose}
          onCancel={handleClose}
          footer={[
            <Button key="ok" type="primary" onClick={handleClose}>
              OK
            </Button>,
          ]}
        >
          {props.children}
        </Modal>
      </>
    );
  else {
    return <></>;
  }
}
