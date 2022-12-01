import React from 'react';
import { Card, Radio, Row, DatePicker, Col, Button, Icon, Select, Form, PageHeader } from 'antd';
import moment from 'moment';

const { Option } = Select;

const dateFormat = 'DD MMM YYYY';

export default function SearchTrains() {
  function disabledDate(current: any) {
    return current && current < moment();
  }
  return (
    <div>
      <PageHeader
        className="icon-page-title"
        title={
          <span>
            <img src="/img/train.png" alt="train" height="25" />
            Select Trains
          </span>
        }
      />
      <Card>
        <Row gutter={24}>
          <Col span={24}>
            <div>
              <Radio.Group options={['One way', 'Round trip']} defaultValue={['One way']} />
            </div>
          </Col>
          <Col span={7}>
            <Form.Item label="Adult">
              <Select
                showSearch
                style={{ width: '100%' }}
                placeholder="Select Seat Class"
                optionFilterProp="children"
              >
                <Option value="Economy">Economy</Option>
                <Option value="Premium Economy">Premium Economy</Option>
                <Option value="Business">Business</Option>
                <Option value="First Class">First Class</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label="Origins">
              <Select
                showSearch
                style={{ width: '100%' }}
                placeholder="Origins"
                optionFilterProp="children"
                optionLabelProp="label"
              >
                <Option label="Jakarta (JKTA)" value="JKTA">
                  <div>
                    <strong>Jakarta, Indonesia</strong>
                    <div>JKTA - All Airports in Jakarta</div>
                  </div>
                </Option>
                <Option label="Juanda (SUB)" value="SUB">
                  <div>
                    <strong>Surabaya, Indonesia</strong>
                    <div>SUB - Juanda</div>
                  </div>
                </Option>
                <Option label="Juanda (SUB)" value="SUB">
                  <div>
                    <strong>Bali / Denpasar, Indonesia</strong>
                    <div>SUB - Juanda</div>
                  </div>
                </Option>
                <Option label="Yogyakarta (YKIA)" value="YKIA">
                  <div>
                    <strong>Yogyakarta, Indonesia</strong>
                    <div>YKIA - All Airports in Yogyakarta</div>
                  </div>
                </Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={1}>
            <Form.Item colon={false} label="&nbsp;">
              <div style={{ marginLeft: '-10px' }}>
                <Button type="primary">
                  <Icon type="swap" />
                </Button>
              </div>
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label="Destination">
              <Select
                showSearch
                style={{ width: '100%' }}
                placeholder="Destination"
                optionFilterProp="children"
                optionLabelProp="label"
              >
                <Option label="Jakarta (JKTA)" value="JKTA">
                  <div>
                    <strong>Jakarta, Indonesia</strong>
                    <div>JKTA - All Airports in Jakarta</div>
                  </div>
                </Option>
                <Option label="Juanda (SUB)" value="SUB">
                  <div>
                    <strong>Surabaya, Indonesia</strong>
                    <div>SUB - Juanda</div>
                  </div>
                </Option>
                <Option label="Juanda (SUB)" value="SUB">
                  <div>
                    <strong>Bali / Denpasar, Indonesia</strong>
                    <div>SUB - Juanda</div>
                  </div>
                </Option>
                <Option label="Yogyakarta (YKIA)" value="YKIA">
                  <div>
                    <strong>Yogyakarta, Indonesia</strong>
                    <div>YKIA - All Airports in Yogyakarta</div>
                  </div>
                </Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={24}>
          <Col span={8}>
            <Form.Item label="Departure Date">
              <DatePicker
                disabledDate={disabledDate}
                format={dateFormat}
                style={{ width: '100%' }}
              />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label="Return Date">
              <DatePicker
                disabledDate={disabledDate}
                format={dateFormat}
                style={{ width: '100%' }}
              />
            </Form.Item>
          </Col>
        </Row>
        <div style={{ marginTop: 10 }}>
          <Button icon="search" style={{ width: '150px' }} type="primary" htmlType="submit">
            Search Train
          </Button>
        </div>
      </Card>
    </div>
  );
}
