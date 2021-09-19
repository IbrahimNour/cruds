import { useState } from "react";
import { Modal, Button } from "antd";
import { Form, Input } from "antd";
import "./crud-form.css";
import { CRUD } from "../../../models/crud.model";
import { EditOutlined } from "@ant-design/icons";

const CrudForm = (props: {
  onSubmit: (formValues: CRUD) => void;
  initialCrudValue?: CRUD;
}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = async () => {
    await form.validateFields();
    const values = form.getFieldsValue();
    props.onSubmit(values);
    form.resetFields();
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    form.resetFields();
  };

  const [form] = Form.useForm();

  return (
    <>
      <Button type="primary" onClick={showModal} className="add-crud">
        {props.initialCrudValue ? <EditOutlined /> : "Add Crud"}
      </Button>
      <Modal
        title="Basic Modal"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form
          form={form}
          name="add-crud"
          layout="vertical"
          initialValues={props.initialCrudValue}
        >
          <Form.Item
            label="First Name"
            name="firstName"
            rules={[
              { required: true, message: "Please input your first name!" },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Last Name"
            name="lastName"
            rules={[
              { required: true, message: "Please input your last name!" },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Last Name"
            name="email"
            rules={[
              {
                required: true,
                type: "email",
                message: "Please input your e-mail!",
              },
            ]}
          >
            <Input placeholder="Email" />
          </Form.Item>

          <Form.Item
            label="Phone"
            name="phone"
            rules={[
              {
                required: true,
                message: "Please input your valid phone and not more than 12!",
                pattern: /^[\d]{0,12}$/,
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Description"
            name="descritpion"
            rules={[
              { required: true, message: "Please input your description!" },
            ]}
          >
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default CrudForm;
