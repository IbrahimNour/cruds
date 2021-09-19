import { CRUD } from "../../../../models/crud.model";
import { Button, Modal } from "antd";
import "./crud-item.css";
import CrudForm from "../../crud-form/crud-form";
import { useAppDispatch } from "../../../../app/hooks";
import { deleteCrud, editCrud } from "../../../../features/crud/crudSlice";
import CrudView from "../../crud-view/crud-view";
import { DeleteOutlined } from "@ant-design/icons";

const CrudItem = (props: { crud: CRUD }) => {
  const dispatch = useAppDispatch();

  const handelEditCrud = (values: CRUD) => {
    dispatch(editCrud({ crud: { ...values, id: props.crud.id } }));
  };

  const onHandelDelete = (id: string) => {
    Modal.confirm({
      content: "Are You Sure ? ",
      onOk: () => {
        dispatch(deleteCrud({ id: id }));
      },
    });
  };

  return (
    <tr>
      <td>{props.crud.id}</td>
      <td>{props.crud.firstName}</td>
      <td>{props.crud.lastName}</td>
      <td>{props.crud.email}</td>
      <td>{props.crud.phone}</td>
      <td>{props.crud.descritpion}</td>
      <td>
        <CrudForm onSubmit={handelEditCrud} initialCrudValue={props.crud} />
        <Button
          type="primary"
          danger
          className="button"
          onClick={() => onHandelDelete(props.crud.id)}
        >
          <DeleteOutlined />
        </Button>
        <CrudView crudItem={props.crud} />
      </td>
    </tr>
  );
};

export default CrudItem;
