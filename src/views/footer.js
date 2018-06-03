import React from 'react';
import ReactDOM from 'react-dom';
import { Layout } from 'antd';
const { Header, Content, Footer } = Layout;

class APP_Footer extends React.Component {
    render() {
        return (
            <Footer style={{ textAlign: 'center' }}>
            Write ©2018 Created by Grey Rabbit
            </Footer>
        )
    }
}

export default APP_Footer;