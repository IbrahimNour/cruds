import { useState } from "react";
import { Modal, Button } from "antd";
import { CRUD } from "../../../models/crud.model";
import { FolderViewOutlined } from "@ant-design/icons";

const CrudView = (props: { crudItem: CRUD }) => {
  const [isViewVisible, setViewVisible] = useState(false);

  const showModal = () => {
    setViewVisible(true);
  };

  const handleOk = () => {
    setViewVisible(false);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        <FolderViewOutlined />
      </Button>
      <Modal
        title="View Crud"
        cancelButtonProps={{ style: { display: "none" } }}
        visible={isViewVisible}
        onOk={handleOk}
      >
        <p>First Name : {props.crudItem.firstName}</p>
        <p>Last Name : {props.crudItem.lastName}</p>
        <p>Descritpion : {props.crudItem.descritpion}</p>
        <p>email : {props.crudItem.email}</p>
        <p>id: {props.crudItem.id}</p>
      </Modal>
    </>
  );
};

export default CrudView;
