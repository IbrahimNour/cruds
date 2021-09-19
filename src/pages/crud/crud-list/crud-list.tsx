import { CRUD } from "../../../models/crud.model";
import CrudForm from "../crud-form/crud-form";
import CrudItem from "./crud-item/crud-item";
import "./crud-list.css";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import {
  addCrud,
  filtter,
  getListCruds,
  selectCruds,
} from "../../../features/crud/crudSlice";
import { Input } from "antd";
import CustomDropDown from "../dropDown-list/dropDown-list";

const { Search } = Input;

const CrudList = () => {
  const dispatch = useAppDispatch();
  let cruds = useAppSelector(selectCruds);

  const handelCreateSubmitted = (values: CRUD) => {
    dispatch(addCrud({ crud: values }));
  };

  const onSearch = (value: string) => {
    value ? dispatch(filtter({ searchText: value })) : dispatch(getListCruds());
  };

  return (
    <>
      <CrudForm onSubmit={handelCreateSubmitted} />
      <Search
        placeholder="input search text"
        allowClear
        enterButton="Search"
        className="search"
        size="large"
        onSearch={onSearch}
      />

      <CustomDropDown />
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Descritpion</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {cruds.map((curdItem) => (
            <CrudItem key={curdItem.id} crud={curdItem} />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default CrudList;
