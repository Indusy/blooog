import React, { useContext, useEffect, useState } from "react";
import { SProps, IContext } from "ssr-types-react";
import { IData } from "~/typings/data";
import { STORE_CONTEXT } from "_build/create-context";

import {
  Button,
  Card,
  Col,
  Divider,
  Form,
  Image,
  Input,
  message,
  Radio,
  Row,
} from "antd";
import {
  UserOutlined,
  MailOutlined,
  LockOutlined,
  LinkOutlined,
  BookOutlined,
} from "@ant-design/icons";
import Title from "antd/lib/typography/Title";
import { useHistory } from "react-router-dom";

interface formItems {
  name: string;
  password: string;
}

export interface IResponse {
  code: number
  msg: string
  data?: any,
  userid: string,
  access_token?: string,
  role: Roles
}

export enum Roles {
  ADMIN = 1,
  GUEST
}

const login = async (data: formItems): Promise<IResponse> => {

  const response = await fetch("/auth/login", {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(data),
  });
  return await response.json();
}

export default (props: SProps) => {
  useEffect(() => {});
  const history = useHistory()
  const [form] = Form.useForm();
  const onFinished = async (data: formItems) => {
    const response = await login(data)
    switch (response.code) {
      case 0:
        localStorage.setItem("access_token", response.access_token!)
        localStorage.setItem("user", JSON.stringify(response.userid))
        message.success(response.msg, 1)
        setTimeout(() => {
          history.push("/admin")
        }, 1000);
        break;
    
      default:
        break;
    }
  }
  const onFinishFailed = () => {
    console.log("请输入正确的用户名和密码");
  };

  return (
    <>
      <Row justify="center" align="middle" style={{ height: "100vh" }}>
        <Col flex="600px">
          <Title>登录 Blooog</Title>
          <Card>
            <Form
              form={form}
              onFinish={onFinished}
              onFinishFailed={onFinishFailed}
            >
              <Form.Item rules={[{ required: true }]} name="name">
                <Input placeholder="用户名" />
              </Form.Item>
              <Form.Item rules={[{ required: true }]} name="password">
                <Input type="password" placeholder="用户密码" />
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit" block>
                  登录
                </Button>
              </Form.Item>
            </Form>
          </Card>
        </Col>
      </Row>
    </>
  );
}
