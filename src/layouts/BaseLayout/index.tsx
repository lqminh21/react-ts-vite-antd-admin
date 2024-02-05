import React, { useState } from 'react';
import 'antd/dist/antd.css';
import './index.css';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from '@ant-design/icons';
import { Layout, Breadcrumb } from 'antd';
import { Outlet, useLocation, Navigate } from 'react-router-dom';

import SiderMenu from '@/components/SiderMenu';

const { Header, Sider, Content } = Layout;
const BaseLayout = () => {
  console.log('BaseLayout');

  const [collapsed, setCollapsed] = useState(false);
  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed} style={{height: '100vh'}}>
        <div className="logo" />
        <SiderMenu />
      </Sider>
      <Layout className="site-layout">
        <Header
          className="site-layout-background"
          style={{
            padding: 0,
          }}
        >
          {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: 'trigger',
            onClick: () => setCollapsed(!collapsed),
          })}
        </Header>
        <Breadcrumb
          style={{
            margin: '24px 0 0 16px',
          }}
        >
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <Content
          className="site-layout-background"
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};
export default BaseLayout;