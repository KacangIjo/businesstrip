import React from 'react';
import { useHistory } from 'react-router-dom';

import { Row, Col, Modal, Button, Rate, Icon, Tag, List, Carousel, Typography } from 'antd';
import './ModalRoom.less';

interface IModalRoom {
  hotelId: string | null;
  onClose: () => void;
}

function NextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div className={className} style={{ ...style, display: 'block' }} onClick={onClick}>
      Right
    </div>
  );
}

function PrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div className={className} style={{ ...style, display: 'block' }} onClick={onClick}>
      Left
    </div>
  );
}

export default function ModalRoom(props: IModalRoom) {
  const history = useHistory();
  return (
    <Modal
      width={700}
      className="modal-room"
      onCancel={props.onClose}
      title={
        <div>
          <Row type="flex" align="middle" style={{ marginBottom: 5 }}>
            <Tag color="red">Hotels</Tag>
            <strong>The Sakala Resort Bali - All Suites</strong>
            <Rate
              style={{ marginLeft: 10, marginRight: 10 }}
              character={<Icon type="star" />}
              disabled
              count={3}
              defaultValue={3}
            />
          </Row>
          <Typography.Text>8.6 Impressive From 15,806 reviews</Typography.Text>
          <div style={{ marginTop: 5 }}>
            <Icon type="compass" style={{ marginRight: 10 }} />
            <Typography.Text>
              Jalan Pratama No. 95, Tanjung Benoa, Nusa Dua, Tanjung Benoa, Bali, Indonesia, 80363
            </Typography.Text>
          </div>
        </div>
      }
      visible={!!props.hotelId}
      footer={null}
    >
      <Row gutter={24}>
        <Col span={18}>
          <div>
            <img
              width="100%"
              alt="img-alt"
              src="https://ik.imagekit.io/tvlk/apr-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/10000150-fc2e838a791b73e24f93dc9751006f59.jpeg?tr=q-40,w-740,h-500,fo-auto,n-dynamic&_src=imagekit"
            />
          </div>
        </Col>
        <Col span={6}>
          <div>
            <Carousel
              {...{
                slidesToShow: 3,
                slidesToScroll: 1,
                dots: false,
                arrows: true,
                vertical: true,
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
                  src="https://ik.imagekit.io/tvlk/apr-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/10000150-878df199e4ab4f259bf9d1b9f4d0e7e3.jpeg?tr=q-40,w-740,h-500,fo-auto,n-dynamic&_src=imagekit"
                />
              </div>
            </Carousel>
          </div>
        </Col>
      </Row>
      <div style={{ marginTop: 10 }}>
        <span style={{ marginRight: 8 }}>Facilities:</span>
        {[
          'AC',
          'Restaurant',
          'Swimming',
          'Pool',
          '24-Hour',
          'Front',
          'Desk',
          'Parking',
          'Elevator',
        ].map(tag => (
          <Tag color="orange" key={tag}>
            {tag}
          </Tag>
        ))}
      </div>
      <List
        header={<strong>Select Room</strong>}
        itemLayout="horizontal"
        dataSource={[{}, {}, {}]}
        renderItem={item => (
          <List.Item>
            <List.Item.Meta
              avatar={
                <img
                  width="100"
                  alt="img-alt"
                  src="https://d1nabgopwop1kh.cloudfront.net/v2/accom-room-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG/TxlcLxHnITM+hVA8HUDaQ1zJqBHXduD60doEvZYi7n2KfJc6BWR7MEBxSQOwaEgr//2tncLjZrh48h9ORTZnPfp7eBRoVVlw2pOKdCUEK7kabfWOmw==?_src=cntpimg"
                />
              }
              title={<strong>Executive King, Room Only For 1 Person</strong>}
              description={
                <Row gutter={24}>
                  <Col span={12}>
                    <small>&bull; 2 Guest</small>
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
                <strong>Rp. 732.000</strong>
                <small>/room/night</small>
              </Row>
              <div>
                <Button
                  style={{ width: '100%', marginTop: 10 }}
                  onClick={() => history.push('/booking')}
                  type="primary"
                >
                  Book Now
                </Button>
              </div>
            </div>
          </List.Item>
        )}
      />
    </Modal>
  );
}
