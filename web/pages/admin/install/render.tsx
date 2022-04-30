import React, { useContext, useEffect } from "react";
import { SProps, IContext } from "ssr-types-react";
import { IData } from "~/typings/data";
import { STORE_CONTEXT } from "_build/create-context";
import { Button, Card, Col, Divider, Form, Image, Input, Radio, Row } from "antd";
import { UserOutlined, MailOutlined, LockOutlined, LinkOutlined, BookOutlined } from "@ant-design/icons";

enum installType {
  NEW,
  IMPORT,
}

type PageProps = {
  theme: string;
};


export default (props: SProps) => {
  useEffect(() => {});

  const [form] = Form.useForm();
  const onFinished = (values: any) => {
    console.log(values);
  };

  return (
    <>
      <Row justify="center" align="middle" style={{ height: '100vh' }}>
        <Col flex="600px">
          <Card>
            <Form form={form} onFinish={onFinished}>
              <Form.Item>
                <Radio.Group name="installType" defaultValue={installType.NEW}>
                  <Radio.Button value={installType.NEW} defaultChecked={true}>
                    全新安装
                  </Radio.Button>
                  <Radio.Button value={installType.IMPORT}>
                    导入数据
                  </Radio.Button>
                </Radio.Group>
              </Form.Item>
              <Divider orientation="left">管理员信息</Divider>
              <Form.Item rules={[{ required: true }]} name="name">
                <Input
                  type="text"
                  placeholder="用户名"
                  prefix={
                    <UserOutlined style={{ color: 'rgba(0, 0, 0, 0.25)' }} />
                  }
                />
              </Form.Item>
              <Form.Item rules={[{ required: true }]} name="nickname">
                <Input
                  type="text"
                  placeholder="用户昵称"
                  prefix={
                    <UserOutlined style={{ color: 'rgba(0, 0, 0, 0.25)' }} />
                  }
                />
              </Form.Item>
              <Form.Item rules={[{ required: true }]} name="email">
                <Input
                  type="email"
                  placeholder="用户邮箱"
                  prefix={
                    <MailOutlined style={{ color: 'rgba(0, 0, 0, 0.25)' }} />
                  }
                />
              </Form.Item>
              <Form.Item rules={[{ required: true }]} name="password">
                <Input
                  type="password"
                  placeholder="登录密码"
                  prefix={
                    <LockOutlined style={{ color: 'rgba(0, 0, 0, 0.25)' }} />
                  }
                />
              </Form.Item>
              <Form.Item rules={[{ required: true }]} name="vpassword">
                <Input
                  type="password"
                  placeholder="确认登录密码"
                  prefix={
                    <LockOutlined style={{ color: 'rgba(0, 0, 0, 0.25)' }} />
                  }
                />
              </Form.Item>
              <Divider orientation="left">站点信息</Divider>
              <Form.Item rules={[{ required: true }]} name="mongolink">
                <Input
                  type="text"
                  placeholder="MongoDB 地址"
                  prefix={
                    <LinkOutlined
                      style={{ color: 'rgba(0, 0, 0, 0.25)' }}
                    />
                  }
                />
              </Form.Item>
              <Form.Item rules={[{ required: true }]} name="blogurl">
                <Input
                  type="text"
                  placeholder="博客地址"
                  prefix={
                    <LinkOutlined
                      style={{ color: 'rgba(0, 0, 0, 0.25)' }}
                    />
                  }
                />
              </Form.Item>
              <Form.Item rules={[{ required: true }]} name="title">
                <Input
                  type="text"
                  placeholder="博客标题"
                  prefix={
                    <BookOutlined style={{ color: 'rgba(0, 0, 0, 0.25)' }} />
                  }
                />
              </Form.Item>
              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  block
                >
                  安装
                </Button>
              </Form.Item>
            </Form>
          </Card>
        </Col>
      </Row>
    </>
  );
};
