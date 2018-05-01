import React from 'react';
import ReactDOM from 'react-dom';

import { Layout, Menu, Breadcrumb, Collapse, List, Card } from 'antd';
const { Header, Content, Footer } = Layout;
const Panel = Collapse.Panel;
const data = [
  {
    title: 'Title 1',
  },
  {
    title: 'Title 2',
  },
  {
    title: 'Title 3',
  },
  {
    title: 'Title 4',
  },
  {
    title: 'Title 5',
  },
  {
    title: 'Title 6',
  },
];

function callback(key) {
  console.log(key);
}

ReactDOM.render(
  <Layout className="layout">
    <Header>
      <div className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['home']}
        style={{ lineHeight: '64px' }}
      >
        <Menu.Item key="home">首页</Menu.Item>
        <Menu.Item key="explore">发现</Menu.Item>
        <Menu.Item key="workspace">工作间</Menu.Item>
      </Menu>
    </Header>
    <Content style={{ padding: '0 50px' }}>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item>
      </Breadcrumb>
      <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
        <Collapse activeKey={['1','2','3']} onChange={callback}>
          <Panel header="周度精选" key="1">
            <List
              grid={{ gutter: 16, xs: 1, sm: 2, md: 4, lg: 4, xl: 6, xxl: 3 }}
              dataSource={data}
              renderItem={item => (
                <List.Item>
                  <Card title={item.title}>Card content</Card>
                </List.Item>
              )}
            />
          </Panel>
          <Panel header="月度精选" key="2">
            <List
              grid={{ gutter: 16, xs: 1, sm: 2, md: 4, lg: 4, xl: 6, xxl: 3 }}
              dataSource={data}
              renderItem={item => (
                <List.Item>
                  <Card title={item.title}>Card content</Card>
                </List.Item>
              )}
            />
          </Panel>
          <Panel header="年度精选" key="3">
            <List
              grid={{ gutter: 16, xs: 1, sm: 2, md: 4, lg: 4, xl: 6, xxl: 3 }}
              dataSource={data}
              renderItem={item => (
                <List.Item>
                  <Card title={item.title}>Card content</Card>
                </List.Item>
              )}
            />
          </Panel>
        </Collapse>
      </div>
    </Content>
    <Footer style={{ textAlign: 'center' }}>
      Write ©2018 Created by Grey Rabbit
    </Footer>
  </Layout>
, document.getElementById('root'));