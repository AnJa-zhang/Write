import React from 'react';
import ReactDOM from 'react-dom';
import { Menu, Layout } from 'antd';
const { Header, Content, Footer } = Layout;

class APP_Header extends React.Component {
    constructor(props) {
        super();
        this.props = props;
        this.getUrl = (key)=> {
            return 'http://' + window.location.host + '/#/' + key
        }
        this.state = {
            current : 'home'
        }
        this.handleClick = (e) => {
            this.setState({
                current : e.key
            })
        }
    }
    componentDidMount() {
        let url = window.location.href
        if(url.match(/explore/)) {
            this.setState({
                current : 'explore'
            }) 
        }else if (url.match(/worksplace/)) {
            this.setState({
                current : 'worksplace'
            }) 
        }else {
            this.setState({
                current : 'home'
            }) 
        }
    }
    render() {
        return (
            <Header>
                <div className="logo" />
                <Menu
                    onClick={this.handleClick}
                    selectedKeys={[this.state.current]}
                    theme="dark"
                    mode="horizontal"
                    style={{ lineHeight: '64px' }}
                >
                    <Menu.Item key="home"><a href={this.getUrl('')}>首页</a></Menu.Item>
                    <Menu.Item key="explore"><a href={this.getUrl('explore')}>发现</a></Menu.Item>
                    <Menu.Item key="workspace"><a href={this.getUrl('/workspace')}>工作间</a></Menu.Item>
                </Menu>
            </Header>
        )
    }
}

export default APP_Header;