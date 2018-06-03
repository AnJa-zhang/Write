import React from 'react';
import ReactDOM from 'react-dom';
import APP_Header from './header';
import APP_Footer from './footer';

import '../theme/global.less';

import { Layout, Menu, Breadcrumb ,Input, Tag} from 'antd';
const { Header, Content, Footer } = Layout;
const Search = Input.Search;


class Home extends React.Component {
    constructor(props) {
        super(props);
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
                    <div className='middle-box' style={{ width:500 }}>
                        <Tag color="magenta">magenta</Tag>
                        <Tag color="red">red</Tag>
                        <Tag color="volcano">volcano</Tag>
                        <Tag color="blue">orange</Tag>
                        <Tag color="gold">gold</Tag>
                        <Tag color="lime">lime</Tag>
                        <Search
                            placeholder="input search text"
                            onSearch={value => console.log(value)}
                            enterButton
                            style={{ width: '500', padding: '20px 0' }}
                            />
                        </div>
                    </div>
                </Content>
                <APP_Footer />
          </Layout>           
        )
    }
}

export default Home;