import React from 'react';
import { Menu, Icon, Col, Row, PageHeader } from 'antd';
const { SubMenu } = Menu;

interface IDashboardLayout {
  children: React.ReactNode;
}

function DashboardLayout(props: IDashboardLayout) {
  return (
    <div className="dashboard-page">
      <div className="container">
        <PageHeader title="My Company" />
        <Row gutter={24}>
          <Col span={6}>
            <Menu
              mode="inline"
              // openKeys={this.state.openKeys}
              // onOpenChange={this.onOpenChange}
              style={{ width: 256 }}
            >
              <Menu.Item key="1">
                <Icon type="bank" />
                Company Structure
              </Menu.Item>
              <Menu.Item key="2">
                <Icon type="team" />
                Employee List
              </Menu.Item>
              <Menu.Item key="3">
                <Icon type="dollar" />
                Purchase List
              </Menu.Item>
              <Menu.Item key="4">
                <Icon type="shopping-cart" />
                My Booking
              </Menu.Item>
            </Menu>
          </Col>
          <Col span={18}>{props.children}</Col>
        </Row>
      </div>
    </div>
  );
}

export default DashboardLayout;
