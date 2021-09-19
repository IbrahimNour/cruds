import { DeleteOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Divider, Input, Select } from "antd";
import { useState } from "react";
import "./dropDown-list.css";

const { Option } = Select;

const CustomDropDown = () => {
  const [items, setItems] = useState(["firstName", "lastName"]);
  const [text, setText] = useState("");
  const [value, setValue] = useState("");

  const handleTextChange = (event: any) => {
    setText(event.target.value);
    console.log(text);
  };

  const handelChangeValue = (value: string) => {
    setValue(value);
  };

  const addItem = () => {
    if (text) {
      setItems([...items, text]);
      setText("");
    }
  };

  const onHandelDelete = (index: number, e: any) => {
    e.stopPropagation();
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
  };

  return (
    <Select
      value={value}
      onChange={handelChangeValue}
      style={{ width: 240, float: "left", margin: "20px 0" }}
      placeholder="custom dropdown render"
      dropdownRender={(menu) => (
        <div>
          {menu}
          <Divider style={{ margin: "4px 0" }} />
          <div style={{ display: "flex", flexWrap: "nowrap", padding: 8 }}>
            <Input
              style={{ flex: "auto" }}
              value={text}
              onChange={handleTextChange}
            />
            <span
              style={{
                flex: "none",
                padding: "8px",
                display: "block",
                cursor: "pointer",
              }}
              onClick={addItem}
            >
              <PlusOutlined /> Add item
            </span>
          </div>
        </div>
      )}
    >
      {items.map((item, index) => (
        <Option key={item} value={item}>
          {value !== item && (
            <Button
              className="button"
              onClick={(event) => onHandelDelete(index, event)}
            >
              <DeleteOutlined />
            </Button>
          )}{" "}
          {item}
        </Option>
      ))}
    </Select>
  );
};

export default CustomDropDown;
