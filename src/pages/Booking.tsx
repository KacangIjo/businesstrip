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

function Booking() {
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
                  <Col span={17}>
                    <Typography.Title level={4}>Your Booking</Typography.Title>
                    <Card title="Contact Details (for E-ticket/Voucher)">
                      <Row type="flex" gutter={24}>
                        <Col span={14}>
                          <Field name="fullname">
                            {({ input, meta }) => (
                              <Form.Item
                                validateStatus={metaError(meta) ? 'error' : undefined}
                                help={metaError(meta) ? meta.error : ''}
                                label="Full Name"
                              >
                                <Input
                                  onChange={input.onChange}
                                  placeholder="As on ID Card/passport/driving license (without degree or special characters)"
                                />
                              </Form.Item>
                            )}
                          </Field>
                          <Row type="flex" gutter={24}>
                            <Col span={12}>
                              <Field name="fullname">
                                {({ input, meta }) => (
                                  <Form.Item
                                    validateStatus={metaError(meta) ? 'error' : undefined}
                                    help={metaError(meta) ? meta.error : ''}
                                    label="Mobile Number"
                                  >
                                    <InputNumber
                                      onChange={input.onChange}
                                      style={{ width: '100%' }}
                                      placeholder="e.g. +62812345678, for Country Code (+62) and Mobile No. 0812345678"
                                    />
                                  </Form.Item>
                                )}
                              </Field>
                            </Col>
                            <Col span={12}>
                              <Field name="email">
                                {({ input, meta }) => (
                                  <Form.Item
                                    validateStatus={metaError(meta) ? 'error' : undefined}
                                    help={metaError(meta) ? meta.error : ''}
                                    label="Email"
                                  >
                                    <Input
                                      onChange={input.onChange}
                                      placeholder="e.g. email@example.com"
                                    />
                                  </Form.Item>
                                )}
                              </Field>
                            </Col>
                          </Row>
                          <Row type="flex" gutter={24}>
                            <Col span={12}>
                              <Field name="travelerTitle">
                                {({ input, meta }) => (
                                  <Form.Item
                                    validateStatus={metaError(meta) ? 'error' : undefined}
                                    help={metaError(meta) ? meta.error : ''}
                                    label="Title"
                                  >
                                    <Select
                                      showSearch
                                      style={{ width: '100%' }}
                                      onChange={input.onChange}
                                      defaultValue="Mr."
                                      optionFilterProp="children"
                                    >
                                      <Select.Option value="Mr.">Mr.</Select.Option>
                                      <Select.Option value="Mrs.">Mrs.</Select.Option>
                                      <Select.Option value="Ms.">Ms.</Select.Option>
                                    </Select>
                                  </Form.Item>
                                )}
                              </Field>
                            </Col>
                            <Col span={12}>
                              <Field name="travelerNationality">
                                {({ input, meta }) => (
                                  <Form.Item
                                    validateStatus={metaError(meta) ? 'error' : undefined}
                                    help={metaError(meta) ? meta.error : ''}
                                    label="Nationality"
                                  >
                                    <Select
                                      showSearch
                                      style={{ width: '100%' }}
                                      onChange={input.onChange}
                                      optionFilterProp="children"
                                      defaultValue="ID"
                                    >
                                      <Select.Option value="ID">Indonesia</Select.Option>
                                      <Select.Option value="lucy">Lucy</Select.Option>
                                      <Select.Option value="tom">Tom</Select.Option>
                                    </Select>
                                  </Form.Item>
                                )}
                              </Field>
                            </Col>
                          </Row>
                          <br />
                          <Typography.Title level={4}>Flight Facilities</Typography.Title>
                          <Row gutter={24}>
                            <Col span={12}>
                              <Field name="baggageDeparture">
                                {({ input, meta }) => (
                                  <Form.Item
                                    validateStatus={metaError(meta) ? 'error' : undefined}
                                    help={metaError(meta) ? meta.error : ''}
                                    label="CGK-SUB"
                                  >
                                    <Select
                                      showSearch
                                      style={{ width: '100%' }}
                                      onChange={input.onChange}
                                      optionFilterProp="children"
                                      defaultValue="ID"
                                    >
                                      <Select.Option value="ID">0 Kg - Rp 0,00</Select.Option>
                                      <Select.Option value="ID">1 Kg - Rp 10,00</Select.Option>
                                    </Select>
                                  </Form.Item>
                                )}
                              </Field>
                            </Col>
                            <Col span={12}>
                              <Field name="baggageReturn">
                                {({ input, meta }) => (
                                  <Form.Item
                                    validateStatus={metaError(meta) ? 'error' : undefined}
                                    help={metaError(meta) ? meta.error : ''}
                                    label="SUB-CGK"
                                  >
                                    <Select
                                      showSearch
                                      style={{ width: '100%' }}
                                      onChange={input.onChange}
                                      optionFilterProp="children"
                                      defaultValue="ID"
                                    >
                                      <Select.Option value="ID">0 Kg - Rp 0,00</Select.Option>
                                      <Select.Option value="ID">1 Kg - Rp 10,00</Select.Option>
                                    </Select>
                                  </Form.Item>
                                )}
                              </Field>
                            </Col>
                          </Row>
                        </Col>
                        <Col span={1}>
                          <Divider type="vertical" orientation="right" style={{ height: '100%' }} />
                        </Col>
                        <Col span={9}>
                          <Descriptions size="small" column={1} title="Departure flight">
                            <Descriptions.Item>
                              <strong>Jakarta (All Airports) → Bali / Denpasar (DPS) </strong>
                            </Descriptions.Item>
                            <Descriptions.Item>Sat, 15 Feb 2020</Descriptions.Item>
                          </Descriptions>
                          <div style={{ margin: '20px 0px 20px 0px' }}>
                            <Row type="flex" align="middle" justify="center">
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
                          </div>
                          <Steps progressDot current={2}>
                            <Steps.Step title="19:45" description="Jakarta (CKG)" />
                            <Steps.Step title="19:45" description="Bali (DPS)" />
                          </Steps>
                          <Divider />
                          <Descriptions size="small" column={1} title="Return flight">
                            <Descriptions.Item>
                              <strong>Bali / Denpasar (DPS) → Jakarta (All Airports)</strong>
                            </Descriptions.Item>
                            <Descriptions.Item>Sat, 15 Feb 2020</Descriptions.Item>
                          </Descriptions>
                          <div style={{ margin: '20px 0px 20px 0px' }}>
                            <Row type="flex" align="middle" justify="center">
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
                          </div>
                          <Steps progressDot current={2}>
                            <Steps.Step title="19:45" description="Bali (DPS)" />
                            <Steps.Step title="19:45" description="Jakarta (CKG)" />
                          </Steps>
                        </Col>
                      </Row>
                    </Card>
                    <Typography.Title style={{ marginTop: 30 }} level={4}>
                      Hotel Booking
                    </Typography.Title>
                    <Card title="Your Information">
                      <Row type="flex" gutter={24}>
                        <Col span={14}>
                          <Field name="hotelContactName">
                            {({ input, meta }) => (
                              <Form.Item
                                validateStatus={metaError(meta) ? 'error' : undefined}
                                help={metaError(meta) ? meta.error : ''}
                                label="Contact's name"
                              >
                                <Input
                                  onChange={input.onChange}
                                  placeholder="As on ID Card/passport/driving license (without degree or special characters)"
                                />
                              </Form.Item>
                            )}
                          </Field>
                          <Row type="flex" style={{ marginBottom: 20 }} gutter={24}>
                            <Col span={12}>
                              <Field name="hotelPhoneNumber">
                                {({ input, meta }) => (
                                  <Form.Item
                                    validateStatus={metaError(meta) ? 'error' : undefined}
                                    help={metaError(meta) ? meta.error : ''}
                                    label="Mobile Number"
                                  >
                                    <InputNumber
                                      onChange={input.onChange}
                                      style={{ width: '100%' }}
                                      placeholder="e.g. +62812345678, for Country Code (+62) and Mobile No. 0812345678"
                                    />
                                  </Form.Item>
                                )}
                              </Field>
                            </Col>
                            <Col span={12}>
                              <Field name="hotelEmail">
                                {({ input, meta }) => (
                                  <Form.Item
                                    validateStatus={metaError(meta) ? 'error' : undefined}
                                    help={metaError(meta) ? meta.error : ''}
                                    label="Email"
                                  >
                                    <Input
                                      onChange={input.onChange}
                                      placeholder="e.g. email@example.com"
                                    />
                                  </Form.Item>
                                )}
                              </Field>
                            </Col>
                          </Row>
                          <Typography.Text>
                            Special request (optional) Have a special request? Ask, and the property
                            will do its best to meet your wish. (Note that special request are not
                            guaranteed and may incur charges)
                          </Typography.Text>
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
                    <Typography.Title style={{ marginTop: 30 }} level={4}>
                      Additional Information (Optional)
                    </Typography.Title>
                    <Card>
                      <Field name="notes">
                        {({ input, meta }) => (
                          <Form.Item
                            validateStatus={metaError(meta) ? 'error' : undefined}
                            help={metaError(meta) ? meta.error : ''}
                            label="Notes"
                          >
                            <Input onChange={input.onChange} />
                          </Form.Item>
                        )}
                      </Field>
                      <p>
                        Input your company reference number here if there is any. E.g : Reference
                        Number #123123123123
                      </p>
                    </Card>
                  </Col>
                  <Col span={7}>
                    <Affix offsetTop={80} onChange={affixed => console.log(affixed)}>
                      <div>
                        <Typography.Title level={4}>Price details</Typography.Title>
                        <Card className="price-list">
                          <Descriptions size="small" column={1} colon={false}>
                            <Descriptions.Item label="Flight">Rp 2.987.100</Descriptions.Item>
                            <Descriptions.Item label="Hotel">Rp 1.043.910</Descriptions.Item>
                            <Descriptions.Item label="Tax">Rp 143.910</Descriptions.Item>
                            <Descriptions.Item
                              label={<strong style={{ color: '#f14545' }}>Total Price</strong>}
                            >
                              <strong style={{ color: '#f14545' }}>Rp 3.000.000</strong>
                            </Descriptions.Item>
                          </Descriptions>
                        </Card>
                        <div>
                          <Button type="primary" size="large" style={{ width: '100%' }}>
                            Continue to Payment
                          </Button>
                        </div>
                      </div>
                    </Affix>
                  </Col>
                </Row>
              </form>
            );
          }}
        />
      </div>
    </div>
  );
}

export default Booking;
