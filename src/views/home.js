import React from 'react';
import ReactDOM from 'react-dom';
import APP_Header from './header';
import APP_Footer from './footer';

import { Layout, Menu, Breadcrumb, Collapse, List, Card } from 'antd';
const { Header, Content, Footer } = Layout;
const Panel = Collapse.Panel;


class Home extends React.Component {
    constructor(props) {
        super(props);
        this.data = [
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
    }
    callback(key) {
        console.log(key)
    }
    render() {
        return (
            <Layout className="layout">
                <APP_Header />
                <Content style={{ padding: '0 50px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>List</Breadcrumb.Item>
                        <Breadcrumb.Item>App</Breadcrumb.Item>
                    </Breadcrumb>
                    <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
                        <Collapse activeKey={['1','2','3']} onChange={this.callback}>
                        <Panel header="周度精选" key="1">
                            <List
                            grid={{ gutter: 16, xs: 1, sm: 2, md: 4, lg: 4, xl: 6, xxl: 3 }}
                            dataSource={this.data}
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
                            dataSource={this.data}
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
                            dataSource={this.data}
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
                <APP_Footer />
          </Layout>           
        )
    }
}

export default Home;
