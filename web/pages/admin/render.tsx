import React, { } from "react";
import { SProps, IContext } from "ssr-types-react";
import { IData } from "~/typings/data";
import { STORE_CONTEXT } from "_build/create-context";
import { Layout, Menu } from "antd";
import { DashboardOutlined, EditOutlined, PictureOutlined, ReadOutlined } from "@ant-design/icons";

import { Content, Footer, Header } from "antd/lib/layout/layout";
import SubMenu from "antd/lib/menu/SubMenu";



export default (props: SProps) => {
  return (
    <>
      <Layout>
        <Header style={{ backgroundColor: '#ffffff' }}>
          <Menu
            theme="light"
            mode="horizontal"
            title="admin"
            defaultSelectedKeys={['1']}
          >
            <Menu.Item key="1" icon={<DashboardOutlined />}>
              仪表盘
            </Menu.Item>
            <SubMenu title="文章" key="2" icon={<EditOutlined />}>
              <Menu.Item key="2.1">写文章</Menu.Item>
              <Menu.Item key="2.2">所有文章</Menu.Item>
            </SubMenu>
            <SubMenu title="页面" key="3" icon={<ReadOutlined />}>
              <Menu.Item key="3.1">新建页面</Menu.Item>
              <Menu.Item key="3.2">所有页面</Menu.Item>
            </SubMenu>
            <Menu.Item key="4" icon={<PictureOutlined />}>
              附件
            </Menu.Item>
            <Menu.Item key="5" icon={<PictureOutlined />}>
              评论
            </Menu.Item>
            <SubMenu title="外观" key="6" icon={<ReadOutlined />}>
              <Menu.Item key="6.1">主题</Menu.Item>
              <Menu.Item key="6.2">菜单</Menu.Item>
              <Menu.Item key="6.2">编辑主题</Menu.Item>
            </SubMenu>
            <Menu.Item key="7" icon={<PictureOutlined />}>
              用户
            </Menu.Item>
            <SubMenu title="系统" key="8" icon={<ReadOutlined />}>
              <Menu.Item key="8.1">博客设置</Menu.Item>
              <Menu.Item key="8.2"></Menu.Item>
              <Menu.Item key="8.3">关于</Menu.Item>
            </SubMenu>
          </Menu>
        </Header>
        <Content></Content>
        <Footer></Footer>
      </Layout>
    </>
  );
};