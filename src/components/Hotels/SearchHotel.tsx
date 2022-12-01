import React from 'react';
import { Card, Row, DatePicker, Col, Button, Select, Form, PageHeader } from 'antd';
import moment from 'moment';
import { useHistory } from 'react-router-dom';
import { Form as FinalForm, Field } from 'react-final-form';
import { AppContext } from 'src/contexts/AppContext';
import qs from 'qs';
import { metaError } from 'src/validation';
const { Option } = Select;
const dateFormat = 'DD MMM YYYY';

export default function SearchHotel() {
  const { state, action } = React.useContext(AppContext);
  const history = useHistory();

  function disabledDate(current: any) {
    return current && current < moment();
  }
  return (
    <div>
      <PageHeader
        className="icon-page-title"
        title={
          <span>
            <img alt="img-alt" src="/img/sleep.png" height="25" />
            Select Hotels
          </span>
        }
      />
      <FinalForm
        onSubmit={formData => {
          // action.searchHotels();
          history.push({
            pathname: '/search/hotels',
            search: qs.stringify(
              {
                view: 'departure',
                ...formData,
              },
              { addQueryPrefix: true },
            ),
          });
        }}
        initialValues={state.search.hotels.formData}
        validate={values => {
          const errors: any = {};
          console.log(errors);
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
              <Card>
                <Row gutter={24}>
                  <Col span={10}>
                    <Field name="seat">
                      {({ input, meta }) => (
                        <Form.Item
                          validateStatus={metaError(meta) ? 'error' : undefined}
                          help={metaError(meta) ? meta.error : ''}
                          label="City, Destination"
                        >
                          <Select
                            showSearch
                            style={{ width: '100%' }}
                            onChange={input.onChange}
                            placeholder="Popular Cities or Airports"
                            optionFilterProp="children"
                            optionLabelProp="label"
                          >
                            <Option
                              label="Setiabudi, Bandung, Indonesia, South East Asia"
                              value="Setiabudi"
                            >
                              <div>
                                <strong>Setiabudi</strong>
                                <div>
                                  <span>Bandung, Indonesia, South East Asia</span>
                                  <span>94 hotels</span>
                                </div>
                              </div>
                            </Option>
                            <Option label="Jakarta, Indonesia, South East Asia" value="Jakarta">
                              <div>
                                <strong>Jakarta</strong>
                                <div>
                                  <span>Indonesia, South East Asia</span>
                                  <span>94 hotels</span>
                                </div>
                              </div>
                            </Option>
                          </Select>
                        </Form.Item>
                      )}
                    </Field>
                  </Col>
                  <Col span={6}>
                    <Field name="date">
                      {({ input, meta }) => (
                        <Form.Item
                          validateStatus={metaError(meta) ? 'error' : undefined}
                          help={metaError(meta) ? meta.error : ''}
                          label="Check-in &amp; Check-out"
                        >
                          <DatePicker.RangePicker
                            placeholder={['Check-in', 'Check-out']}
                            disabledDate={disabledDate}
                            format={dateFormat}
                            onChange={input.onChange}
                            style={{ width: '100%' }}
                          />
                        </Form.Item>
                      )}
                    </Field>
                  </Col>
                  <Col span={4}>
                    <Field name="guest">
                      {({ input, meta }) => (
                        <Form.Item
                          validateStatus={metaError(meta) ? 'error' : undefined}
                          help={metaError(meta) ? meta.error : ''}
                          label="Guests"
                        >
                          <Select
                            showSearch
                            style={{ width: '100%' }}
                            placeholder="Choose Guests"
                            optionFilterProp="children"
                          >
                            <Option value="1">1 Guest</Option>
                            <Option value="2">2 Guest</Option>
                            <Option value="3">3 Guest</Option>
                          </Select>
                        </Form.Item>
                      )}
                    </Field>
                  </Col>
                  <Col span={4}>
                    <Field name="seat">
                      {({ input, meta }) => (
                        <Form.Item
                          validateStatus={metaError(meta) ? 'error' : undefined}
                          help={metaError(meta) ? meta.error : ''}
                          label="Rooms"
                        >
                          <Select
                            showSearch
                            style={{ width: '100%' }}
                            placeholder="Choose Rooms"
                            optionFilterProp="children"
                          >
                            <Option value="1">1 Room</Option>
                            <Option value="2">2 Room</Option>
                            <Option value="3">3 Room</Option>
                          </Select>
                        </Form.Item>
                      )}
                    </Field>
                  </Col>
                </Row>
                <div style={{ marginTop: 10 }}>
                  <Button
                    loading={state.search.hotels.loading}
                    icon="search"
                    style={{ width: '150px' }}
                    type="primary"
                    htmlType="submit"
                  >
                    Search Hotel
                  </Button>
                </div>
              </Card>
            </form>
          );
        }}
      />
    </div>
  );
}
