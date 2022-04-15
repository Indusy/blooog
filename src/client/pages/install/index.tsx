import { useEffect, useState } from 'react';
import { NextPage, NextPageContext } from 'next';
import { Button, Card, Col, Divider, Form, Input, Radio, Row } from 'antd';
import { UserOutlined, MailOutlined, PhoneOutlined, LockOutlined, LinkedinOutlined, BookOutlined } from '@ant-design/icons'

enum installType {
  NEW,
  IMPORT,
}

type PageProps = {
  theme: string;
};

type PageContext = NextPageContext & {
  query: PageProps;
};

const InstallPage: NextPage<PageProps> = ({ theme }) => {
  useEffect(()=>{
    alert(theme)
  })

  return (
    <>
      <Row justify='center' align='middle' style={{height: "100vh"}}>
        <Col flex="600px">
        <Card>
        <Form>
          <Form.Item>
            <Radio.Group name="installType" defaultValue={installType.NEW}>
              <Radio.Button value={installType.NEW} defaultChecked={true}>
                全新安装
              </Radio.Button>
              <Radio.Button value={installType.IMPORT}>导入数据</Radio.Button>
            </Radio.Group>
          </Form.Item>
          <Divider orientation='left'>
            管理员信息
          </Divider>
          <Form.Item>
            <Input type="text" placeholder='用户名' prefix={<UserOutlined style={{color: "rgba(0, 0, 0, 0.25)"}} />} />
          </Form.Item>
          <Form.Item>
            <Input type="text" placeholder='用户昵称' prefix={<UserOutlined style={{color: "rgba(0, 0, 0, 0.25)"}} />} />
          </Form.Item>
          <Form.Item>
            <Input type="email" placeholder='用户邮箱' prefix={< MailOutlined style={{color: "rgba(0, 0, 0, 0.25)"}} />} />
          </Form.Item>
          <Form.Item>
            <Input type="tel" placeholder='用户手机' prefix={<PhoneOutlined style={{color: "rgba(0, 0, 0, 0.25)"}} />} />
          </Form.Item>
          <Form.Item>
            <Input type="password" placeholder='登录密码' prefix={<LockOutlined style={{color: "rgba(0, 0, 0, 0.25)"}} />} />
          </Form.Item>
          <Form.Item>
            <Input type="password" placeholder='确认登录密码' prefix={<LockOutlined style={{color: "rgba(0, 0, 0, 0.25)"}} />} />
          </Form.Item>
          <Divider orientation='left'>
            站点信息
          </Divider>
          <Form.Item>
            <Input type="text" placeholder='博客地址' prefix={<LinkedinOutlined style={{color: "rgba(0, 0, 0, 0.25)"}} />} />
          </Form.Item>
          <Form.Item>
            <Input type="text" placeholder='博客标题' prefix={<BookOutlined style={{color: "rgba(0, 0, 0, 0.25)"}} />} />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType='submit' block onClick={console.log.bind(this)}>安装</Button>
          </Form.Item>
        </Form>
      </Card>
        </Col>
      </Row>
    </>
  );
};

InstallPage.getInitialProps = (ctx) => {
  return {
    theme: ctx.query.theme,
  } as PageProps;
}

export default InstallPage;
