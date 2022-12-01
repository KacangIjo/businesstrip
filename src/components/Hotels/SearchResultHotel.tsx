import React, { useState } from 'react';
import {
  Card,
  Row,
  Col,
  List,
  Button,
  Rate,
  Icon,
  Select,
  Form,
  PageHeader,
  Descriptions,
  Typography,
} from 'antd';
import { AppContext } from 'src/contexts/AppContext';
import ModalRoom from './ModalRoom';
import './ModalRoom.less';
const { Option } = Select;

export default function SearchResultHotel() {
  const [roomShow, setRoomShow] = useState('');
  const { state, action } = React.useContext(AppContext);
  const extra = [];
  if (!state.search.hotels.show) {
    extra.push(
      <Button
        key="1"
        type="dashed"
        onClick={() => {
          action.toggleShowSearch('hotels');
        }}
      >
        Change Search
      </Button>,
    );
  }
  return (
    <div>
      <PageHeader
        onBack={!state.search.hotels.show ? () => action.toggleShowSearch('hotels') : undefined}
        title="Your search results in Jakarta, Indonesia"
        extra={extra}
        style={{ padding: '20px 0px' }}
      >
        <Descriptions size="small" column={3}>
          <Descriptions.Item label="Date">Feb 14, 2020 - Feb 15, 2020</Descriptions.Item>
        </Descriptions>
      </PageHeader>
      <Form layout="inline" onSubmit={() => {}}>
        <Row type="flex" style={{ marginBottom: 15 }} align="middle" justify="space-between">
          <div>
            <Form.Item label="Star Rating">
              <Select style={{ width: 200 }} placeholder="Star Rating">
                <Option value="1">
                  <div>
                    <Rate character={<Icon type="star" />} disabled defaultValue={1} />
                  </div>
                </Option>
                <Option value="2">
                  <div>
                    <Rate character={<Icon type="star" />} disabled defaultValue={2} />
                  </div>
                </Option>
                <Option value="3">
                  <div>
                    <Rate character={<Icon type="star" />} disabled defaultValue={3} />
                  </div>
                </Option>
                <Option value="4">
                  <div>
                    <Rate character={<Icon type="star" />} disabled defaultValue={4} />
                  </div>
                </Option>
                <Option value="5">
                  <div>
                    <Rate character={<Icon type="star" />} disabled defaultValue={5} />
                  </div>
                </Option>
              </Select>
            </Form.Item>
          </div>
          <div>
            <Select
              showSearch
              style={{ width: 180 }}
              placeholder="Sort"
              optionFilterProp="children"
            >
              <Option value="Lowest Price">Lowest Price</Option>
              <Option value="Earliest departure">Earliest departure</Option>
              <Option value="Latest departure">Latest departure</Option>
              <Option value="Earliest arrival">Earliest arrival</Option>
              <Option value="Latest arrival">Latest arrival</Option>
              <Option value="Shortest duration">Shortest duration</Option>
            </Select>
          </div>
        </Row>
      </Form>
      <List
        itemLayout="horizontal"
        dataSource={[{}, {}, {}]}
        renderItem={item => (
          <Card bordered={false} className="room-list" style={{ marginBottom: 15 }}>
            <List.Item>
              <List.Item.Meta
                avatar={
                  <img
                    width="150"
                    alt="img-alt"
                    src="https://d1nabgopwop1kh.cloudfront.net/v2/accom-room-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG/TxlcLxHnITM+hVA8HUDaQ1zJqBHXduD60doEvZYi7n2KfJc6BWR7MEBxSQOwaEgr//2tncLjZrh48h9ORTZnPfp7eBRoVVlw2pOKdCUEK7kabfWOmw==?_src=cntpimg"
                  />
                }
                title={
                  <Row type="flex">
                    <Typography.Title style={{ marginRight: 10, marginBottom: 0 }} level={4}>
                      Shakti Hotel Jakarta{' '}
                    </Typography.Title>
                    <Rate character={<Icon type="star" />} disabled count={3} defaultValue={3} />
                  </Row>
                }
                description={
                  <Row gutter={24}>
                    <Col span={12}>
                      <div>
                        <Icon type="compass" style={{ marginRight: 10 }} />
                        Gajah Mada, Jakarta
                      </div>
                    </Col>
                    <Col span={12}>
                      <small>&bull; Without Breakfast</small>
                    </Col>
                    <Col span={12}>
                      <small>&bull; Without Breakfast</small>
                    </Col>
                    <Col span={12}>
                      <small>&bull; Free WiFi</small>
                    </Col>
                    <Col span={12}>
                      <small>&bull; Non-refundable</small>
                    </Col>
                    <Col span={12}>
                      <small>&bull; Non-reschedulable</small>
                    </Col>
                    <Col span={12}>
                      <small>&bull; Read Cancellation Policy</small>
                    </Col>
                  </Row>
                }
              />
              <div>
                <Row type="flex" align="middle" justify="center">
                  <Typography.Title style={{ marginBottom: 0 }} level={4}>
                    Rp. 732.000
                  </Typography.Title>
                  <small>/room/night</small>
                </Row>
                <div>
                  <Button
                    onClick={() => setRoomShow('true')}
                    style={{ width: '100%', marginTop: 10 }}
                    type="primary"
                  >
                    Select Room
                  </Button>
                </div>
              </div>
            </List.Item>
          </Card>
        )}
      />
      <ModalRoom hotelId={roomShow} onClose={() => setRoomShow('')} />
    </div>
  );
}
