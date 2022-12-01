import React from 'react';
import { Tabs, List, Card, Row, Col, Descriptions, Typography, Table } from 'antd';
import '../Home.less';

const { TabPane } = Tabs;

const columnsTravelDestination: Array<Object> = [
  {
    title: 'Trip Date',
    dataIndex: 'tripDate',
    key: 'tripDate',
  },
  {
    title: 'Trip Time',
    dataIndex: 'tripTime',
    key: 'tripTime',
  },
  {
    title: '*From Country',
    dataIndex: 'fromCountry',
    key: 'fromCountry',
  },
  {
    title: '*From City',
    dataIndex: 'fromCity',
    key: 'fromCity',
  },
  {
    title: 'Description',
    dataIndex: 'description1',
    key: 'description1',
  },
  {
    title: '*To Country',
    dataIndex: 'toCountry',
    key: 'toCountry',
  },
  {
    title: 'To City',
    dataIndex: 'toCity',
    key: 'toCity',
  },
  {
    title: 'Description',
    dataIndex: 'description2',
    key: 'description2',
  },
];

const columnsOfficialDate: Array<Object> = [
  {
    title: 'Date',
    dataIndex: 'date',
    key: 'date',
  },
];

const columsOffDate: Array<Object> = [
  {
    title: 'Date',
    dataIndex: 'date',
    key: 'date',
  },
  {
    title: 'Workday(s)',
    dataIndex: 'workdays',
    key: 'workdays',
  },
];

const getDataTravelDestination = () => {
  let data: Array<Object> = [];
  for (let i = 0; i < 10; i += 1) {
    data[i] = {
      key: i,
      tripDate: '16/12/2019',
      tripTime: '7:00AM',
      fromCountry: `BSD ${i}`,
      fromCity: `Tangerang ${i}`,
      description1: `Description ${i}`,
      toCountry: `Kuningan ${i}`,
      toCity: `Jakarta ${i}`,
      description2: `Description ${i}`,
    };
  }
  return data;
};

const dataOfficialsDate: Array<Object> = [
  {
    key: 1,
    date: '16/12/2019',
  },
  {
    key: 2,
    date: '17/12/2019',
  },
  {
    key: 3,
    date: '18/12/2019',
  },
  {
    key: 4,
    date: '19/12/2019',
  },
  {
    key: 5,
    date: '20/12/2019',
  },
];

const dataOffDate: Array<Object> = [
  {
    key: 1,
    date: '1',
  },
];

function DetailBusinessTrip() {
  return (
    <div className="home-page">
      <div className="home-banner">Detail Business Trip</div>
      <div className="container">
        <div>
          <Tabs type="card" animated={false} defaultActiveKey="1" className="mb-4">
            <TabPane tab="Business Trip Request" key="businessTripRequest">
              <Card style={{ width: '100%' }}>
                <Descriptions bordered size="middle" column={{ sm: 4 }}>
                  <Descriptions.Item label="*Employee ID" span={2}>
                    59277
                  </Descriptions.Item>
                  <Descriptions.Item label="*Employee Rcd" span={2}>
                    0
                  </Descriptions.Item>
                  <Descriptions.Item label="Name" span={2}>
                    Yeremia D
                  </Descriptions.Item>
                  <Descriptions.Item label="Status" span={2}>
                    Closed
                  </Descriptions.Item>
                  <Descriptions.Item label="Gender" span={2}>
                    M
                  </Descriptions.Item>
                  <Descriptions.Item label="Office ID" span={2}>
                    99781 KP
                  </Descriptions.Item>
                  <Descriptions.Item label="Application Date" span={2}>
                    16/12/2019
                  </Descriptions.Item>
                  <Descriptions.Item label="Cost Centre" span={2}>
                    00120 IT SOLUTIONS
                  </Descriptions.Item>
                  <Descriptions.Item label="*Business Trip Number" span={2}>
                    76773
                  </Descriptions.Item>
                  <Descriptions.Item label="*No. HP" span={2}>
                    088888888888
                  </Descriptions.Item>
                  <Descriptions.Item label="*Travel Type" span={4}>
                    Dinas Luar Kota (Non Training)
                  </Descriptions.Item>
                  <Descriptions.Item label="*Purpose" span={4}>
                    Penugasan
                  </Descriptions.Item>
                  <Descriptions.Item label="*Mode of Transport" span={4}>
                    Travel Car
                  </Descriptions.Item>
                  <Descriptions.Item label="*From Date" span={2}>
                    16/12/2019
                  </Descriptions.Item>
                  <Descriptions.Item label="*To Date" span={2}>
                    20/12/2019
                  </Descriptions.Item>
                </Descriptions>
                <Row style={{ marginTop: '40px' }}>
                  <Typography.Title level={3}>Travel Destination</Typography.Title>
                  <Table
                    columns={columnsTravelDestination}
                    dataSource={getDataTravelDestination()}
                    pagination={{ pageSize: 5 }}
                  />
                </Row>
                <Row gutter={48}>
                  <Col span={7}>
                    <Typography.Title level={3}>Officials Date</Typography.Title>
                  </Col>
                  <Col span={7}>
                    <Typography.Title level={3}>Off Date</Typography.Title>
                  </Col>
                </Row>
                <Row gutter={48}>
                  <Col span={7}>
                    <Table columns={columnsOfficialDate} dataSource={dataOfficialsDate} />
                  </Col>
                  <Col span={7}>
                    <Table columns={columsOffDate} dataSource={dataOffDate} />
                  </Col>
                  <Col span={7}>
                    <Descriptions>
                      <Descriptions.Item label="Duration">5 Working Day(s)</Descriptions.Item>
                    </Descriptions>
                  </Col>
                </Row>
              </Card>
            </TabPane>
          </Tabs>
        </div>
      </div>
    </div>
  );
}

export default DetailBusinessTrip;
