import React from 'react';
import {
  Card,
  Row,
  Col,
  Button,
  Rate,
  Icon,
  PageHeader,
  List,
  Carousel,
  Descriptions,
  Typography,
} from 'antd';
import './Room.less';

function NextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div className={className} style={{ ...style, display: 'block', color: "black" }} onClick={onClick}>
      Right
    </div>
  );
}

function PrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div className={className} style={{ ...style, display: 'block', color: "black" }} onClick={onClick}>
      Left
    </div>
  );
}

function Room() {
  return (
    <div className="container">
      <div className="room-page">
        <Card>
          <PageHeader
            style={{ padding: '0px 0px 20px 0px' }}
            title={
              <Typography.Title style={{ margin: 0 }} level={2}>
                The Sakala Resort Bali - All Suites
              </Typography.Title>
            }
          >
            <Descriptions size="small" column={1}>
              <Descriptions.Item label="Rate">
                <Rate
                  style={{ marginBottom: 5 }}
                  character={<Icon type="star" />}
                  disabled
                  count={3}
                  defaultValue={3}
                />
              </Descriptions.Item>
              <Descriptions.Item label="Location">
                Jalan Pratama No. 95, Tanjung Benoa, Nusa Dua, Tanjung Benoa, Bali, Indonesia, 80363
              </Descriptions.Item>
            </Descriptions>
          </PageHeader>
          <Row gutter={24}>
            <Col span={16}>
              <div>
                <img
                  width="100%"
                  alt="img-alt"
                  src="https://ik.imagekit.io/tvlk/apr-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/10000150-fc2e838a791b73e24f93dc9751006f59.jpeg?tr=q-40,w-740,h-500,fo-auto,n-dynamic&_src=imagekit"
                />
              </div>
              <div style={{ padding: '0px 30px' }}>
                <Carousel
                  {...{
                    slidesToShow: 5,
                    slidesToScroll: 1,
                    arrows: true,
                    nextArrow: <NextArrow />,
                    prevArrow: <PrevArrow />,
                  }}
                >
                  <div>
                    <img
                      width="150"
                      alt="img-alt"
                      src="https://ik.imagekit.io/tvlk/apr-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/10000150-fc2e838a791b73e24f93dc9751006f59.jpeg?tr=q-40,w-740,h-500,fo-auto,n-dynamic&_src=imagekit"
                    />
                  </div>
                  <div>
                    <img
                      width="150"
                      alt="img-alt"
                      src="https://ik.imagekit.io/tvlk/apr-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/10000150-2000x1335-FIT_AND_TRIM-7bee5e541013907be059d150fc7c6095.jpeg?tr=q-40,w-740,h-500,fo-auto,n-dynamic&_src=imagekit"
                    />
                  </div>
                  <div>
                    <img
                      width="150"
                      alt="img-alt"
                      src="https://ik.imagekit.io/tvlk/apr-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/10000150-878df199e4ab4f259bf9d1b9f4d0e7e3.jpeg?tr=q-40,w-740,h-500,fo-auto,n-dynamic&_src=imagekit"
                    />
                  </div>
                  <div>
                    <img
                      width="150"
                      alt="img-alt"
                      src="https://ik.imagekit.io/tvlk/apr-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/10000150-fc2e838a791b73e24f93dc9751006f59.jpeg?tr=q-40,w-740,h-500,fo-auto,n-dynamic&_src=imagekit"
                    />
                  </div>
                  <div>
                    <img
                      width="150"
                      alt="img-alt"
                      src="https://ik.imagekit.io/tvlk/apr-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/10000150-2000x1335-FIT_AND_TRIM-7bee5e541013907be059d150fc7c6095.jpeg?tr=q-40,w-740,h-500,fo-auto,n-dynamic&_src=imagekit"
                    />
                  </div>
                  <div>
                    <img
                      width="150"
                      alt="img-alt"
                      src="https://ik.imagekit.io/tvlk/apr-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/10000150-878df199e4ab4f259bf9d1b9f4d0e7e3.jpeg?tr=q-40,w-740,h-500,fo-auto,n-dynamic&_src=imagekit"
                    />
                  </div>
                  <div>
                    <img
                      width="150"
                      alt="img-alt"
                      src="https://ik.imagekit.io/tvlk/apr-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/10000150-fc2e838a791b73e24f93dc9751006f59.jpeg?tr=q-40,w-740,h-500,fo-auto,n-dynamic&_src=imagekit"
                    />
                  </div>
                  <div>
                    <img
                      width="150"
                      alt="img-alt"
                      src="https://ik.imagekit.io/tvlk/apr-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/10000150-2000x1335-FIT_AND_TRIM-7bee5e541013907be059d150fc7c6095.jpeg?tr=q-40,w-740,h-500,fo-auto,n-dynamic&_src=imagekit"
                    />
                  </div>
                  <div>
                    <img
                      width="150"
                      alt="img-alt"
                      src="https://ik.imagekit.io/tvlk/apr-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/10000150-878df199e4ab4f259bf9d1b9f4d0e7e3.jpeg?tr=q-40,w-740,h-500,fo-auto,n-dynamic&_src=imagekit"
                    />
                  </div>
                  <div>
                    <img
                      width="150"
                      alt="img-alt"
                      src="https://ik.imagekit.io/tvlk/apr-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/10000150-fc2e838a791b73e24f93dc9751006f59.jpeg?tr=q-40,w-740,h-500,fo-auto,n-dynamic&_src=imagekit"
                    />
                  </div>
                  <div>
                    <img
                      width="150"
                      alt="img-alt"
                      src="https://ik.imagekit.io/tvlk/apr-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/10000150-2000x1335-FIT_AND_TRIM-7bee5e541013907be059d150fc7c6095.jpeg?tr=q-40,w-740,h-500,fo-auto,n-dynamic&_src=imagekit"
                    />
                  </div>
                  <div>
                    <img
                      width="150"
                      alt="img-alt"
                      src="https://ik.imagekit.io/tvlk/apr-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/10000150-878df199e4ab4f259bf9d1b9f4d0e7e3.jpeg?tr=q-40,w-740,h-500,fo-auto,n-dynamic&_src=imagekit"
                    />
                  </div>
                </Carousel>
              </div>
            </Col>
            <Col span={8}>
              <Typography.Title>Impressive 8.5/10</Typography.Title>
              <Typography.Text>According to 754 guests</Typography.Text>
              <Typography.Title level={4}>Facilities</Typography.Title>
              <List
                size="small"
                dataSource={[
                  'AC',
                  'Restaurant',
                  'Swimming',
                  'Pool',
                  '24-Hour',
                  'Front',
                  'Desk',
                  'Parking',
                  'Elevator',
                ]}
                renderItem={item => <List.Item>{item}</List.Item>}
              />
            </Col>
          </Row>
        </Card>
        <PageHeader title="Select Room" />
        <Card className="card-room">
          <Row gutter={24} type="flex" align="middle" justify="space-between">
            <Col span={4}>
              <div style={{ margin: '-23px 0px -23px -23px' }}>
                <img
                  width="100%"
                  alt="img-alt"
                  style={{ borderRadius: '8px 0px 0px 8px' }}
                  src="https://ik.imagekit.io/tvlk/apr-asset/guys1L%2BYyer9kzI3sp-pb0CG1j2bhflZGFUZOoIf1YOBAm37kEUOKR41ieUZm7ZJ/traveloka/hotel/asset/10033075-1920x1080-FIT_AND_TRIM-8ab86b274c394688f854c3307f18da0e.jpeg?tr=q-40,w-300,h-300,fo-auto,n-regular&_src=imagekit"
                />
              </div>
            </Col>
            <Col span={10}>
              <Typography.Title level={3}>Shakti Hotel Jakarta</Typography.Title>
              <div style={{ marginBottom: 5 }}>2 Guest</div>
              <div style={{ marginBottom: 5 }}>1 Double Bed Or 2 Single Bed</div>
            </Col>
            <Col span={10}>
              <Row type="flex" align="middle" justify="space-between">
                <Row type="flex" align="middle" justify="center">
                  <Typography.Title style={{ marginBottom: 0 }} level={2}>
                    Rp. 732.000
                  </Typography.Title>
                  <span>/person</span>
                </Row>
                <div>
                  <Button size="large" style={{ width: '150px' }} type="primary">
                    Book Now
                  </Button>
                </div>
              </Row>
            </Col>
          </Row>
        </Card>
        <Card className="card-room">
          <Row gutter={24} type="flex" align="middle" justify="space-between">
            <Col span={4}>
              <div style={{ margin: '-23px 0px -23px -23px' }}>
                <img
                  width="100%"
                  alt="img-alt"
                  style={{ borderRadius: '8px 0px 0px 8px' }}
                  src="https://ik.imagekit.io/tvlk/apr-asset/guys1L%2BYyer9kzI3sp-pb0CG1j2bhflZGFUZOoIf1YOBAm37kEUOKR41ieUZm7ZJ/traveloka/hotel/asset/10033075-1920x1080-FIT_AND_TRIM-8ab86b274c394688f854c3307f18da0e.jpeg?tr=q-40,w-300,h-300,fo-auto,n-regular&_src=imagekit"
                />
              </div>
            </Col>
            <Col span={10}>
              <Typography.Title level={3}>Shakti Hotel Jakarta</Typography.Title>
              <div style={{ marginBottom: 5 }}>2 Guest</div>
              <div style={{ marginBottom: 5 }}>1 Double Bed Or 2 Single Bed</div>
            </Col>
            <Col span={10}>
              <Row type="flex" align="middle" justify="space-between">
                <Row type="flex" align="middle" justify="center">
                  <Typography.Title style={{ marginBottom: 0 }} level={2}>
                    Rp. 732.000
                  </Typography.Title>
                  <span>/person</span>
                </Row>
                <div>
                  <Button size="large" style={{ width: '150px' }} type="primary">
                    Book Now
                  </Button>
                </div>
              </Row>
            </Col>
          </Row>
        </Card>
        <Card className="card-room">
          <Row gutter={24} type="flex" align="middle" justify="space-between">
            <Col span={4}>
              <div style={{ margin: '-23px 0px -23px -23px' }}>
                <img
                  width="100%"
                  alt="img-alt"
                  style={{ borderRadius: '8px 0px 0px 8px' }}
                  src="https://ik.imagekit.io/tvlk/apr-asset/guys1L%2BYyer9kzI3sp-pb0CG1j2bhflZGFUZOoIf1YOBAm37kEUOKR41ieUZm7ZJ/traveloka/hotel/asset/10033075-1920x1080-FIT_AND_TRIM-8ab86b274c394688f854c3307f18da0e.jpeg?tr=q-40,w-300,h-300,fo-auto,n-regular&_src=imagekit"
                />
              </div>
            </Col>
            <Col span={10}>
              <Typography.Title level={3}>Shakti Hotel Jakarta</Typography.Title>
              <div style={{ marginBottom: 5 }}>2 Guest</div>
              <div style={{ marginBottom: 5 }}>1 Double Bed Or 2 Single Bed</div>
            </Col>
            <Col span={10}>
              <Row type="flex" align="middle" justify="space-between">
                <Row type="flex" align="middle" justify="center">
                  <Typography.Title style={{ marginBottom: 0 }} level={2}>
                    Rp. 732.000
                  </Typography.Title>
                  <span>/person</span>
                </Row>
                <div>
                  <Button size="large" style={{ width: '150px' }} type="primary">
                    Book Now
                  </Button>
                </div>
              </Row>
            </Col>
          </Row>
        </Card>
      </div>
    </div>
  );
}

export default Room;
