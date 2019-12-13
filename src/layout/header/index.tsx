import React from "react";
import logo1 from "../../assets/logo1.svg";
import logo2 from "../../assets/logo2.svg";
import { Layout, Menu,Avatar } from 'antd';
const { Header} = Layout;

const AppHeader: React.FC<{}> = function AppHeader() {
  return (
    <Header className="app-header">
      <div className="logo" >
        <img src={logo1} alt=""/>
        <img src={logo2} alt=""/>
      </div>
      <Menu
        className='menu'
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={["1"]}
        style={{ lineHeight: "64px" }}
      >
        <Menu.Item key="1">
              <Avatar style={{ backgroundColor: '#87d068' }} icon="user" />
              <span className='user'>用户姓名</span>
        </Menu.Item>
        <Menu.Item key="2">退出</Menu.Item>
      </Menu>
    </Header>
  )
};

export default AppHeader;
