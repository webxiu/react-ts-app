import React, { Component } from "react";

import { Button } from "antd";
import List from "../pages/List";
import state from "../../../../../vue/Example/pc/app/src/store/state";

interface Iprops {
  title: string;
  age: number;
  work?: string;
  myClick: any;
}

interface Istate {
  count: number;
  formObj: any;
  formItem: any;
  initState: any;
}

class Hello extends Component<Iprops, Istate> {
  public constructor(props: Iprops) {
    super(props);
  }

  public state: Istate = {
    count: 1,
    formObj: {
      labelCol: { span: 0 },
      wrapperCol: { span: 24 },
    },
    formItem: [
      {
        itemNode: {
          label: "用户名",
          name: "username",
          rules: [{ required: true, message: " 请输入姓名!" }],
        },
        inputNode: {
          placeholder: "请输入姓名",
        },
      },
      {
        itemNode: {
          label: "名称",
          name: "name",
          rules: [{ required: true, message: "请输入名称!" }],
        },
        inputNode: {
          placeholder: "请输入名称",
        },
      },
      {
        itemNode: {
          label: "兴趣",
          name: "like",
          rules: [{ required: true, message: "请选择兴趣!" }],
        },

        inputNode: {
          type: "select",
          placeholder: "请选择兴趣",
          options: [
            { label: "听歌", value: 0 },
            { label: "上网", value: 2 },
          ],
        },
      },
      {
        itemNode: {
          label: "日期",
          name: "time",
          rules: [{ required: true, message: "请选择日期!" }],
        },
        inputNode: {
          type: "date",
          placeholder: "请选择日期",
        },
      },
      {
        itemNode: {
          label: "状态",
          name: "status",
        },
        inputNode: {
          type: "switch",
          initialvalue: 1,
        },
      },
    ],
    initState: {
      username: "99999",
      name: "33",
      like: 2,
      date: "2020-10-12",
      status: true,
    },
  };
  componentDidMount() {
    setTimeout(() => {
      console.log("889", 889);
      this.setState({
        initState: { ...this.state.initState, username: 8888 },
      });
    }, 5000);
  }

  addHandle = (e: any) => {
    console.log("e", e);
    this.setState({
      count: this.state.count + 1,
    });
    this.props.myClick(this.state.count);
  };
  render() {
    const { title, age, work } = this.props;
    const { formObj, formItem, initState } = this.state;

    return (
      <div>
        <div>
          Hello: {title}
          Hello: {age}
          Hello: {work}
        </div>
        <div>{this.state.count}</div>
        <Button onClick={this.addHandle}>点击</Button>
        <Button type="primary" onClick={this.addHandle}>
          点击
        </Button>
        <div style={{ margin: 90 }}>
          <List formObj={formObj} formItem={formItem} initState={initState} />
        </div>
      </div>
    );
  }
}

export default Hello;
