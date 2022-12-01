import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import _capitalize from 'lodash/capitalize';
import qs from 'qs';
import {
  Card,
  Row,
  Col,
  Button,
  Icon,
  Select,
  Form,
  Modal,
  PageHeader,
  Steps,
  Descriptions,
  List,
  Typography,
  Timeline,
  Divider,
} from 'antd';
import { AppContext } from 'src/contexts/AppContext';
import './Home.less';

const { Option } = Select;

export default function SearchResultsFlight() {
  const [homeState, setHomeState] = useState({
    type: '',
    view: '',
  });
  const [showModal, setShowModal] = useState(false);
  const history = useHistory();
  const params = useParams();

  useEffect(() => {
    setHomeState(qs.parse(history.location.search, { ignoreQueryPrefix: true }));
  }, [params]);

  function showConfirmationModal() {
    setShowModal(true);
  }

  function addToBooking() {
    if (homeState.type === 'ONE_WAY') {
      history.push('/booking');
      return;
    }
    if (homeState.type === 'ROUND_TRIP' && homeState.view === 'return') {
      history.push('/booking');
      return;
    }
    history.push({
      pathname: '/search/flights',
      search: qs.stringify(
        {
          ...homeState,
          view: 'return',
        },
        { addQueryPrefix: true },
      ),
    });
  }
  return (
    <div className="home-page">
      <div className="container">
        {homeState.view === 'return' && (
          <div>
            <Typography.Title level={3} style={{ margin: '20px 0px 20px 0px' }}>
              Choose departure flight
            </Typography.Title>
            <Card className="card-flight">
              <Row gutter={24}>
                <Col span={4}>
                  <div>
                    <div className="flex">
                      <img
                        height="30"
                        alt="img-alt"
                        src="https://tvlk.imgix.net/imageResource/2015/12/17/1450349861201-09ec8f298222a73d66e8e96aa3b918f0.png?auto=compress%2Cformat&cs=srgb&fm=png&ixlib=java-1.1.12&q=75"
                      />
                      <div style={{ marginLeft: 10 }}>
                        <strong>LION JT-657</strong>
                        <div>Economy</div>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col span={9}>
                  <Timeline>
                    <Timeline.Item>
                      <Row gutter={24} type="flex">
                        <Col span={6}>
                          <strong>19:45</strong>
                          <div>13 Nov 2022</div>
                          <div style={{ marginTop: 20 }}>
                            <Icon type="history" style={{ marginRight: 5 }} />
                            1h 45m
                          </div>
                        </Col>
                        <Col span={18}>
                          <strong>Jakarta (CKG)</strong>
                          <div>Soekarno Hatta International Airport</div>
                        </Col>
                      </Row>
                    </Timeline.Item>
                    <Timeline.Item color="green">
                      <Row gutter={24} type="flex">
                        <Col span={6}>
                          <strong>19:45</strong>
                          <div>13 Nov 2022</div>
                        </Col>
                        <Col span={18}>
                          <strong>Jakarta (CKG)</strong>
                          <div>Soekarno Hatta International Airport</div>
                        </Col>
                      </Row>
                    </Timeline.Item>
                  </Timeline>
                </Col>
                <Col span={7}>
                  <Descriptions size="small" column={1}>
                    <Descriptions.Item label="Aircraft">Boeing 737</Descriptions.Item>
                    <Descriptions.Item label="Seat Layout">3 - 3</Descriptions.Item>
                    <Descriptions.Item label="Seat Pitch">
                      31 inches (above standard)
                    </Descriptions.Item>
                    <Descriptions.Item label="Cabin baggage">7 kg</Descriptions.Item>
                  </Descriptions>
                </Col>
                <Col span={4}>
                  <Row type="flex" align="middle" justify="center">
                    <Typography.Title style={{ marginBottom: 0 }} level={4}>
                      Rp. 732.000
                    </Typography.Title>
                    <span>/pax</span>
                  </Row>
                  <div style={{ marginTop: 15 }}>
                    <Button type="dashed">Change Departure flight</Button>
                  </div>
                </Col>
              </Row>
            </Card>
            <Divider />
            <Typography.Title level={3} style={{ margin: '20px 0px 0px 0px' }}>
              Choose return flight
            </Typography.Title>
          </div>
        )}
        <PageHeader
          title="Jakarta (All Airports) → Bali / Denpasar (DPS) - Ngurah Rai International Airport"
          extra={[
            <Button key="1" type="dashed" onClick={() => history.push('/flights')}>
              Change Search
            </Button>,
          ]}
          style={{ padding: '20px 0px' }}
        >
          <Descriptions size="small" column={3}>
            <Descriptions.Item label="Date">Thursday, 13 November 2022</Descriptions.Item>
            <Descriptions.Item label="Passengers">1 Adult</Descriptions.Item>
            <Descriptions.Item label="Class">Economy</Descriptions.Item>
          </Descriptions>
        </PageHeader>
        <Form layout="inline" onSubmit={() => {}}>
          <Row type="flex" style={{ marginBottom: 15 }} align="middle" justify="space-between">
            <div>
              <Form.Item label="Filter">
                <Select
                  showSearch
                  style={{ width: 200 }}
                  placeholder="Departure Time"
                  optionFilterProp="children"
                >
                  <Option value="jack">Jack</Option>
                  <Option value="lucy">Lucy</Option>
                  <Option value="tom">Tom</Option>
                </Select>
              </Form.Item>
              <Form.Item>
                <Select
                  showSearch
                  style={{ width: 200 }}
                  placeholder="Arrival Time"
                  optionFilterProp="children"
                >
                  <Option value="jack">Jack</Option>
                  <Option value="lucy">Lucy</Option>
                  <Option value="tom">Tom</Option>
                </Select>
              </Form.Item>
              <Form.Item>
                <Select
                  showSearch
                  style={{ width: 200 }}
                  placeholder="Airline"
                  optionFilterProp="children"
                >
                  <Option value="jack">Jack</Option>
                  <Option value="lucy">Lucy</Option>
                  <Option value="tom">Tom</Option>
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
        <Card className="card-flight">
          <Row gutter={24}>
            <Col span={4}>
              <div>
                <div className="flex">
                  <img
                    height="30"
                    alt="img-alt"
                    src="https://tvlk.imgix.net/imageResource/2015/12/17/1450349861201-09ec8f298222a73d66e8e96aa3b918f0.png?auto=compress%2Cformat&cs=srgb&fm=png&ixlib=java-1.1.12&q=75"
                  />
                  <div style={{ marginLeft: 10 }}>
                    <strong>LION JT-657</strong>
                    <div>Economy</div>
                  </div>
                </div>
              </div>
            </Col>
            <Col span={9}>
              <Timeline>
                <Timeline.Item>
                  <Row gutter={24} type="flex">
                    <Col span={6}>
                      <strong>19:45</strong>
                      <div>13 Nov 2022</div>
                      <div style={{ marginTop: 20 }}>
                        <Icon type="history" style={{ marginRight: 5 }} />
                        1h 45m
                      </div>
                    </Col>
                    <Col span={18}>
                      <strong>Jakarta (CKG)</strong>
                      <div>Soekarno Hatta International Airport</div>
                    </Col>
                  </Row>
                </Timeline.Item>
                <Timeline.Item color="green">
                  <Row gutter={24} type="flex">
                    <Col span={6}>
                      <strong>19:45</strong>
                      <div>13 Nov 2022</div>
                    </Col>
                    <Col span={18}>
                      <strong>Jakarta (CKG)</strong>
                      <div>Soekarno Hatta International Airport</div>
                    </Col>
                  </Row>
                </Timeline.Item>
              </Timeline>
            </Col>
            <Col span={7}>
              <Descriptions size="small" column={1}>
                <Descriptions.Item label="Aircraft">Boeing 737</Descriptions.Item>
                <Descriptions.Item label="Seat Layout">3 - 3</Descriptions.Item>
                <Descriptions.Item label="Seat Pitch">31 inches (above standard)</Descriptions.Item>
                <Descriptions.Item label="Cabin baggage">7 kg</Descriptions.Item>
              </Descriptions>
            </Col>
            <Col span={4}>
              <Row type="flex" align="middle" justify="center">
                <Typography.Title style={{ marginBottom: 0 }} level={4}>
                  Rp. 732.000
                </Typography.Title>
                <span>/pax</span>
              </Row>
              <div style={{ marginTop: 15 }}>
                <Button
                  style={{ width: '100%' }}
                  type="primary"
                  onClick={() => showConfirmationModal()}
                >
                  Choose
                </Button>
              </div>
            </Col>
          </Row>
        </Card>
        <Card className="card-flight">
          <Row gutter={24}>
            <Col span={4}>
              <div>
                <div className="flex">
                  <img
                    height="30"
                    alt="img-alt"
                    src="https://tvlk.imgix.net/imageResource/2015/12/17/1450349861201-09ec8f298222a73d66e8e96aa3b918f0.png?auto=compress%2Cformat&cs=srgb&fm=png&ixlib=java-1.1.12&q=75"
                  />
                  <div style={{ marginLeft: 10 }}>
                    <strong>LION JT-657</strong>
                    <div>Economy</div>
                  </div>
                </div>
              </div>
            </Col>
            <Col span={9}>
              <Timeline>
                <Timeline.Item>
                  <Row gutter={24} type="flex">
                    <Col span={6}>
                      <strong>19:45</strong>
                      <div>13 Nov 2022</div>
                      <div style={{ marginTop: 20 }}>
                        <Icon type="history" style={{ marginRight: 5 }} />
                        1h 45m
                      </div>
                    </Col>
                    <Col span={18}>
                      <strong>Jakarta (CKG)</strong>
                      <div>Soekarno Hatta International Airport</div>
                    </Col>
                  </Row>
                </Timeline.Item>
                <Timeline.Item color="green">
                  <Row gutter={24} type="flex">
                    <Col span={6}>
                      <strong>19:45</strong>
                      <div>13 Nov 2022</div>
                    </Col>
                    <Col span={18}>
                      <strong>Jakarta (CKG)</strong>
                      <div>Soekarno Hatta International Airport</div>
                    </Col>
                  </Row>
                </Timeline.Item>
              </Timeline>
            </Col>
            <Col span={7}>
              <Descriptions size="small" column={1}>
                <Descriptions.Item label="Aircraft">Boeing 737</Descriptions.Item>
                <Descriptions.Item label="Seat Layout">3 - 3</Descriptions.Item>
                <Descriptions.Item label="Seat Pitch">31 inches (above standard)</Descriptions.Item>
                <Descriptions.Item label="Cabin baggage">7 kg</Descriptions.Item>
              </Descriptions>
            </Col>
            <Col span={4}>
              <Row type="flex" align="middle" justify="center">
                <Typography.Title style={{ marginBottom: 0 }} level={4}>
                  Rp. 732.000
                </Typography.Title>
                <span>/pax</span>
              </Row>
              <div style={{ marginTop: 15 }}>
                <Button
                  style={{ width: '100%' }}
                  type="primary"
                  onClick={() => showConfirmationModal()}
                >
                  Choose
                </Button>
              </div>
            </Col>
          </Row>
          <div className="flight-divider">
            <Icon type="warning" style={{ marginRight: 10, color: 'orange' }} />
            Transit for 9h 20m in Lombok (LOP) You need to move your bagagge and do another
            check-in.
          </div>
          <Row gutter={24}>
            <Col span={4}>
              <div>
                <div className="flex">
                  <img
                    height="30"
                    alt="img-alt"
                    src="https://tvlk.imgix.net/imageResource/2015/12/17/1450349861201-09ec8f298222a73d66e8e96aa3b918f0.png?auto=compress%2Cformat&cs=srgb&fm=png&ixlib=java-1.1.12&q=75"
                  />
                  <div style={{ marginLeft: 10 }}>
                    <strong>LION JT-657</strong>
                    <div>Economy</div>
                  </div>
                </div>
              </div>
            </Col>
            <Col span={9}>
              <Timeline>
                <Timeline.Item>
                  <Row gutter={24} type="flex">
                    <Col span={6}>
                      <strong>19:45</strong>
                      <div>13 Nov 2022</div>
                      <div style={{ marginTop: 20 }}>
                        <Icon type="history" style={{ marginRight: 5 }} />
                        1h 45m
                      </div>
                    </Col>
                    <Col span={18}>
                      <strong>Jakarta (CKG)</strong>
                      <div>Soekarno Hatta International Airport</div>
                    </Col>
                  </Row>
                </Timeline.Item>
                <Timeline.Item color="green">
                  <Row gutter={24} type="flex">
                    <Col span={6}>
                      <strong>19:45</strong>
                      <div>13 Nov 2022</div>
                    </Col>
                    <Col span={18}>
                      <strong>Jakarta (CKG)</strong>
                      <div>Soekarno Hatta International Airport</div>
                    </Col>
                  </Row>
                </Timeline.Item>
              </Timeline>
            </Col>
            <Col span={7}>
              <Descriptions size="small" column={1}>
                <Descriptions.Item label="Aircraft">Boeing 737</Descriptions.Item>
                <Descriptions.Item label="Seat Layout">3 - 3</Descriptions.Item>
                <Descriptions.Item label="Seat Pitch">31 inches (above standard)</Descriptions.Item>
                <Descriptions.Item label="Cabin baggage">7 kg</Descriptions.Item>
              </Descriptions>
            </Col>
          </Row>
        </Card>
      </div>
      <Modal
        title="Round-trip flight details"
        visible={showModal}
        width={900}
        onCancel={() => setShowModal(false)}
        footer={[
          <span
            key="price"
            style={{
              marginRight: 20,
              display: 'inline-flex',
              flexDirection: 'column',
            }}
          >
            <Typography.Title level={3} type="danger" style={{ margin: 0 }}>
              Rp 935.000.000/pax
            </Typography.Title>
            <small>Inclusive of all taxes and surcharges</small>
          </span>,
          <Button
            key="submit"
            size="large"
            type="primary"
            style={{ width: 150 }}
            onClick={() => addToBooking()}
          >
            Book
          </Button>,
        ]}
      >
        <List
          itemLayout="horizontal"
          dataSource={[{ type: 'Departure' }, { type: 'Return' }]}
          renderItem={item => (
            <List.Item>
              <Row gutter={24} style={{ paddingTop: 10, width: '100%' }}>
                <Col span={4}>
                  <strong>{item.type}</strong>
                  <p>13 Nov 2022</p>
                </Col>
                <Col span={4}>
                  <div>
                    <div className="flex">
                      <img
                        height="30"
                        alt="img-alt"
                        src="https://tvlk.imgix.net/imageResource/2015/12/17/1450349861201-09ec8f298222a73d66e8e96aa3b918f0.png?auto=compress%2Cformat&cs=srgb&fm=png&ixlib=java-1.1.12&q=75"
                      />
                      <div style={{ marginLeft: 10 }}>
                        <strong>LION JT-657</strong>
                        <div>Economy</div>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col span={12}>
                  <Steps progressDot current={1}>
                    <Steps.Step title="19:45" description="Jakarta (CKG)" />
                    <Steps.Step title="19:45" description="Bali (BKL)" />
                  </Steps>
                </Col>
                <Col span={4}>
                  <strong>Total Duration</strong>
                  <p>1h 30m </p>
                </Col>
              </Row>
            </List.Item>
          )}
        />
      </Modal>
    </div>
  );
}
