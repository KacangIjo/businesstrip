import React from 'react';
import { Layout, Menu, Icon } from 'antd';
import { Link, useHistory } from 'react-router-dom';
import './MainLayout.less';
const { Header, Content, Footer } = Layout;

interface IMainLayout {
  children: React.ReactNode;
}

function MainLayout(props: IMainLayout) {
  const history = useHistory();
  return (
    <Layout className="layout">
      <Header className="header">
        <div>
          <div className="logo" style={{ marginRight: 20 }}>
            <Link to="/" style={{ display: 'inline-flex', alignItems: 'center' }}>
              <img alt="logo" src="/img/logo.png" height="25" />
              <span>Business Trip</span>
            </Link>
          </div>
          <Menu mode="horizontal" className="menu">
            <Menu.Item onClick={() => history.push('/booking')} key="/booking">
              My Booking
            </Menu.Item>
            <Menu.Item onClick={() => history.push('/purchase-list')} key="/purchase-list">
              Purchase List
            </Menu.Item>
          </Menu>
        </div>
        <div>
          <Menu mode="horizontal" className="user-menu">
            <Menu.SubMenu
              title={
                <span className="submenu-title-wrapper">
                  <Icon type="user" />
                  Yeremia D
                </span>
              }
            >
              <Menu.Item key="setting:1">
                <Icon type="setting" />
                Setting
              </Menu.Item>
              <Menu.Item key="setting:2">
                <Icon type="logout" />
                Sign Out
              </Menu.Item>
            </Menu.SubMenu>
          </Menu>
        </div>
      </Header>
      <Content className="content">
        <div className="main">{props.children}</div>
      </Content>
      <Footer className="footer"></Footer>
    </Layout>
  );
}

MainLayout.defaultProps = {};

export default MainLayout;
