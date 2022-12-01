import React from 'react';
import {
  Card,
  Row,
  InputNumber,
  Input,
  Col,
  Button,
  Rate,
  Typography,
  Descriptions,
  Steps,
  Icon,
  Select,
  Form,
  Affix,
  Divider,
} from 'antd';
import { Form as FinalForm, Field } from 'react-final-form';
import { metaError } from 'src/validation';
import './Booking.less';

function BookingInqury() {
  return (
    <div className="booking-page">
      <div className="container">
        <FinalForm
          onSubmit={formData => {}}
          //   initialValues={state.search.flights.formData}
          validate={values => {
            const errors: any = {};
            //   const validate = validators(errors, values);
            //   validate('passengers', 'required');
            //   validate('from', 'required');
            //   validate('to', 'required');
            //   validate('departure', 'required');
            //   validate('return', 'required');
            //   validate('seat', 'required');
            return errors;
          }}
          render={({ handleSubmit, values }) => {
            return (
              <form onSubmit={handleSubmit}>
                <Row type="flex" gutter={24}>
                  <Col span={24}>
                    <Typography.Title level={4}>Complete your booking information</Typography.Title>
                    <Card title="Your Information">
                      <Typography.Title level={4}>
                        Business Trip ID: 278193678126873
                      </Typography.Title>
                      <Row type="flex" gutter={24}>
                        <Col span={14}>
                          <Field name="nik">
                            {({ input, meta }) => (
                              <Form.Item
                                validateStatus={metaError(meta) ? 'error' : undefined}
                                help={metaError(meta) ? meta.error : ''}
                                label="Your NIK"
                              >
                                <Input
                                  onChange={input.onChange}
                                  placeholder="please input your NIK"
                                />
                              </Form.Item>
                            )}
                          </Field>
                          <Field name="name">
                            {({ input, meta }) => (
                              <Form.Item
                                validateStatus={metaError(meta) ? 'error' : undefined}
                                help={metaError(meta) ? meta.error : ''}
                                label="Your Name"
                              >
                                <Input
                                  onChange={input.onChange}
                                  placeholder="please input your Name"
                                />
                              </Form.Item>
                            )}
                          </Field>
                        </Col>
                        <Col span={1}>
                          <Divider type="vertical" orientation="right" style={{ height: '100%' }} />
                        </Col>
                        <Col span={9}>
                          <Row gutter={24}>
                            <Col span={8}>
                              <div>
                                <img
                                  width="100%"
                                  alt="img-alt"
                                  src="https://ik.imagekit.io/tvlk/apr-asset/guys1L%2BYyer9kzI3sp-pb0CG1j2bhflZGFUZOoIf1YOBAm37kEUOKR41ieUZm7ZJ/traveloka/hotel/asset/10000624-3334x2592-FIT_AND_TRIM-708d4c2ff14d25bcb3c36e2fd7ded1c9.jpeg?tr=q-40,w-300,h-300,fo-auto,n-regular&_src=imagekit"
                                />
                              </div>
                            </Col>
                            <Col span={16}>
                              <strong>The Sakala Resort Bali - All Suites</strong>
                              <div>
                                <Rate
                                  character={<Icon type="star" />}
                                  disabled
                                  count={3}
                                  defaultValue={3}
                                />
                              </div>
                            </Col>
                            <Col span={24} style={{ paddingTop: 15 }}>
                              <Descriptions size="small" column={1} colon={false}>
                                <Descriptions.Item label="location">
                                  Gajah Mada, Jakarta
                                </Descriptions.Item>
                              </Descriptions>
                            </Col>
                          </Row>
                          <Descriptions size="small" column={1}>
                            <Descriptions.Item label="Duration of Stay">1 night</Descriptions.Item>
                            <Descriptions.Item label="Check-in">Sat, 15 Feb 2020</Descriptions.Item>
                            <Descriptions.Item label="Check-out">
                              Sun, 16 Feb 2020
                            </Descriptions.Item>
                            <Descriptions.Item label="Room type">
                              Lower Ground Room - No View
                            </Descriptions.Item>
                            <Descriptions.Item label="No. of rooms">1</Descriptions.Item>
                            <Descriptions.Item label="Guests per room">1</Descriptions.Item>
                          </Descriptions>
                        </Col>
                      </Row>
                    </Card>
                  </Col>
                </Row>
                <div>
                  <Button type="primary" size="large" style={{ width: 300 }}>
                    continue booking
                  </Button>
                </div>
              </form>
            );
          }}
        />
      </div>
    </div>
  );
}
export default BookingInqury;
