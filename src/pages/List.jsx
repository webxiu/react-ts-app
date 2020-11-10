import React, { Component } from "react";
import { Form, Input, Button, DatePicker, Select, Switch } from "antd";
import moment from "moment";
const { Option } = Select;

export default class List extends Component {
  onChange = (item, value) => {
    if (item.type === "date") {
      console.log("==", item.name, moment(value).format("YYYY-MM-DD"));
      return;
    }
    console.log("===", item.name, value);
  };
  onFinish = (value) => {
    console.log("value", value);
  };
  // 处理输入组件渲染
  getElement = (inputNode) => {
    const type = inputNode.type || "input";
    const inputType = {
      input: (
        <Input
          {...inputNode}
          onChange={(value) => this.onChange(inputNode, value)}
        />
      ),
      date: (
        <DatePicker
          {...inputNode}
          onChange={(value) => this.onChange(inputNode, value)}
          style={{ width: "100%" }}
        />
      ),
      select: (
        <Select
          {...inputNode}
          onChange={(value) => this.onChange(inputNode, value)}
        >
          {inputNode.options?.map((option) => {
            return (
              <Option key={option.value} value={option.value}>
                {option.label}
              </Option>
            );
          })}
        </Select>
      ),
      switch: (
        <Switch
          {...inputNode}
          onChange={(value) => this.onChange(inputNode, value)}
        />
      ),
    };
    return inputType[type];
  };
  render() {
    const { formObj, formItem, initState } = this.props;

    return (
      <div>
        <Form
          layout="vertical"
          onFinish={this.onFinish}
          initialValues={initState}
          {...formObj}
        >
          {formItem.map((item) => {
            return (
              <Form.Item key={item.itemNode.name} {...item.itemNode}>
                {this.getElement(item.inputNode)}
              </Form.Item>
            );
          })}
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}
