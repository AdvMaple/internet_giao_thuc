import { Form, Button, Radio, Input, notification } from "antd";

export default function BuyForm() {
  const openNotifycation = () => {
    notification.success({
      message: "Đã đặt hàng!",
    });
  };

  return (
    <div className="BuyForm">
      <Form
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 12 }}
        onFinish={(e) => {
          console.log("Gửi");
          openNotifycation();
        }}
      >
        <legend>Thông tin mua hàng</legend>

        <Form.Item
          label="Họ và tên"
          name="name"
          rules={[{ required: true, message: "Hãy nhập tên của bạn!" }]}
        >
          <Input></Input>
        </Form.Item>

        <Form.Item
          label="Số điện thoại"
          name="phone"
          rules={[{ required: true, message: "Hãy nhập số điện thoại!" }]}
        >
          <Input></Input>
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: "Hãy nhập địa chỉ email!" }]}
        >
          <Input></Input>
        </Form.Item>

        <Form.Item label="Ghi chú" name="note">
          <Input></Input>
        </Form.Item>

        <Form.Item
          label="Địa điểm nhận"
          name="location"
          rules={[{ required: true, message: "Hãy chọn địa điểm nhận!" }]}
        >
          <Radio.Group>
            <Radio value="home">Nhận tại nhà</Radio>
            <Radio value="store">Nhận tại cửa hàng</Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Đặt hàng thanh toán sau
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
