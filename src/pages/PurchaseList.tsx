import React from 'react';
import {
  Steps,
  Button,
  Menu,
  List,
  Tabs,
  Typography,
  Card,
  Col,
  Row,
  Descriptions,
  Tag,
  PageHeader,
  Icon,
  Divider,
} from 'antd';
import './Home.less';

const { TabPane } = Tabs;

function PurchaseList() {
  return (
    <div className="home-page">
      <div className="home-banner">Purchase List</div>
      <div className="container">
        <div>
          <Tabs type="card" animated={false} defaultActiveKey="2">
            <TabPane tab="Flights" key="flights">
              <List
                itemLayout="horizontal"
                dataSource={[
                  {
                    title: 'Ant Design Title 1',
                  },
                  {
                    title: 'Ant Design Title 2',
                  },
                  {
                    title: 'Ant Design Title 3',
                  },
                  {
                    title: 'Ant Design Title 4',
                  },
                ]}
                renderItem={item => (
                  <List.Item>
                    <Card
                      title={
                        <Row gutter={24} type="flex" justify="space-between" align="middle">
                          <Col span={12}>
                            <Descriptions size="small" column={1}>
                              <Descriptions.Item label="Trip ID">
                                <strong>#12312312312323</strong>
                              </Descriptions.Item>
                              <Descriptions.Item label="Purchase Date">
                                <strong>Sat, 15 Feb 2020</strong>
                              </Descriptions.Item>
                            </Descriptions>
                          </Col>
                          <Col span={12} style={{ textAlign: 'right' }}>
                            <Typography.Title level={4}>Rp. 1.000.000</Typography.Title>
                          </Col>
                        </Row>
                      }
                      style={{ width: '100%' }}
                    >
                      <Row
                        gutter={24}
                        type="flex"
                        justify="space-between"
                        style={{ width: '100%' }}
                      >
                        <Col span={11}>
                          <p>
                            <strong>Departure</strong>
                          </p>
                          <Row gutter={24} type="flex">
                            <Col span={10}>
                              <Row type="flex">
                                <div style={{ marginRight: 10 }}>
                                  <strong>LION JT-657</strong>
                                  <div>Economy</div>
                                </div>
                                <img
                                  height="40"
                                  alt="img-alt"
                                  src="https://tvlk.imgix.net/imageResource/2015/12/17/1450349861201-09ec8f298222a73d66e8e96aa3b918f0.png?auto=compress%2Cformat&cs=srgb&fm=png&ixlib=java-1.1.12&q=75"
                                />
                              </Row>
                            </Col>
                            <Col span={14}>
                              <Steps progressDot current={2}>
                                <Steps.Step title="19:45 Bali (DPS)" />
                                <Steps.Step title="19:45 Jakarta (CKG)" />
                              </Steps>
                            </Col>
                          </Row>
                        </Col>
                        <Col span={11}>
                          <p>
                            <strong>Return</strong>
                          </p>
                          <Row gutter={24} type="flex">
                            <Col span={10}>
                              <Row type="flex">
                                <div style={{ marginRight: 10 }}>
                                  <strong>LION JT-657</strong>
                                  <div>Economy</div>
                                </div>
                                <img
                                  height="40"
                                  alt="img-alt"
                                  src="https://tvlk.imgix.net/imageResource/2015/12/17/1450349861201-09ec8f298222a73d66e8e96aa3b918f0.png?auto=compress%2Cformat&cs=srgb&fm=png&ixlib=java-1.1.12&q=75"
                                />
                              </Row>
                            </Col>
                            <Col span={14}>
                              <Steps progressDot current={2}>
                                <Steps.Step title="19:45 Bali (DPS)" />
                                <Steps.Step title="19:45 Jakarta (CKG)" />
                              </Steps>
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                      <Divider />

                      <Row type="flex" justify="space-between">
                        <div>
                          <Tag color="green">Purchase Successfully</Tag>
                        </div>
                        <a href="#" type="link">
                          Details
                        </a>
                      </Row>
                    </Card>
                  </List.Item>
                )}
              />
            </TabPane>
            <TabPane tab="Hotels" key="hotels">
              <List
                itemLayout="horizontal"
                dataSource={[
                  {
                    title: 'Ant Design Title 1',
                  },
                ]}
                renderItem={item => (
                  <List.Item>
                    <Card
                      title={
                        <Row gutter={24} type="flex" justify="space-between" align="middle">
                          <Col span={12}>
                            <Descriptions size="small" column={1}>
                              <Descriptions.Item label="Trip ID">
                                <strong>#12312312312323</strong>
                              </Descriptions.Item>
                              <Descriptions.Item label="Purchase Date">
                                <strong>Sat, 15 Feb 2020</strong>
                              </Descriptions.Item>
                            </Descriptions>
                          </Col>
                          <Col span={12} style={{ textAlign: 'right' }}>
                            <Typography.Title level={4}>Rp. 1.000.000</Typography.Title>
                          </Col>
                        </Row>
                      }
                      style={{ width: '100%' }}
                    >
                      <Row
                        gutter={24}
                        type="flex"
                        justify="space-between"
                        style={{ width: '100%' }}
                      >
                        <Col span={11}>
                          <p>
                            <strong>Departure</strong>
                          </p>
                          <Row gutter={24} type="flex">
                            <Col span={10}>
                              <Row type="flex">
                                <div style={{ marginRight: 10 }}>
                                  <strong>LION JT-657</strong>
                                  <div>Economy</div>
                                </div>
                                <img
                                  height="40"
                                  alt="img-alt"
                                  src="https://tvlk.imgix.net/imageResource/2015/12/17/1450349861201-09ec8f298222a73d66e8e96aa3b918f0.png?auto=compress%2Cformat&cs=srgb&fm=png&ixlib=java-1.1.12&q=75"
                                />
                              </Row>
                            </Col>
                            <Col span={14}>
                              <Steps progressDot current={2}>
                                <Steps.Step title="19:45 Bali (DPS)" />
                                <Steps.Step title="19:45 Jakarta (CKG)" />
                              </Steps>
                            </Col>
                          </Row>
                        </Col>
                        <Col span={11}>
                          <p>
                            <strong>Return</strong>
                          </p>
                          <Row gutter={24} type="flex">
                            <Col span={10}>
                              <Row type="flex">
                                <div style={{ marginRight: 10 }}>
                                  <strong>LION JT-657</strong>
                                  <div>Economy</div>
                                </div>
                                <img
                                  height="40"
                                  alt="img-alt"
                                  src="https://tvlk.imgix.net/imageResource/2015/12/17/1450349861201-09ec8f298222a73d66e8e96aa3b918f0.png?auto=compress%2Cformat&cs=srgb&fm=png&ixlib=java-1.1.12&q=75"
                                />
                              </Row>
                            </Col>
                            <Col span={14}>
                              <Steps progressDot current={2}>
                                <Steps.Step title="19:45 Bali (DPS)" />
                                <Steps.Step title="19:45 Jakarta (CKG)" />
                              </Steps>
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                      <Divider />

                      <Row type="flex" justify="space-between">
                        <div>
                          <Tag color="green">Purchase Successfully</Tag>
                        </div>
                        <a href="#" type="link">
                          Details
                        </a>
                      </Row>
                    </Card>
                  </List.Item>
                )}
              />
            </TabPane>
          </Tabs>
        </div>
      </div>
    </div>
  );
}

export default PurchaseList;
