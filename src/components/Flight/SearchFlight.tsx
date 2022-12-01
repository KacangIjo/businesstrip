import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Card, Radio, Row, DatePicker, Col, Button, Icon, Select, Form, PageHeader } from 'antd';
import moment from 'moment';
import qs from 'qs';
import { Form as FinalForm, Field } from 'react-final-form';
import { metaError } from 'src/validation';
import { AppContext } from 'src/contexts/AppContext';
import { IAppContext } from 'src/contexts/AppContext.interface';

const { Option } = Select;

const dateFormat = 'DD MMM YYYY';

export default function SearchFlight() {
  const { state, action } = React.useContext(AppContext);
  function disabledDate(current: any) {
    return current && current < moment();
  }
  const history = useHistory();

  useEffect(() => {
    // FETCH INITIAL DATA
  }, []);

  return (
    <div>
      <PageHeader
        className="icon-page-title"
        title={
          <span>
            <img alt="plane" src="/img/plane.png" height="25" />
            Select Flights
          </span>
        }
      />
      <FinalForm
        onSubmit={(formData: any) => {
          history.push({
            pathname: '/search/flights',
            search: qs.stringify(
              {
                view: 'departure',
                ...formData,
              },
              { addQueryPrefix: true },
            ),
          });
        }}
        initialValues={state.search.flights.formData}
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
              <Card>
                <Row gutter={24}>
                  <Col span={24}>
                    <div>
                      <Field name="type">
                        {({ input }) => (
                          <Radio.Group
                            onChange={e => input.onChange(e.target.value)}
                            options={[
                              { label: 'One way', value: 'ONE_WAY' },
                              { label: 'Round trip', value: 'ROUND_TRIP' },
                            ]}
                            defaultValue={values.type}
                          />
                        )}
                      </Field>
                    </div>
                  </Col>
                  <Col span={9}>
                    <Field name="passengers">
                      {({ input, meta }) => (
                        <Form.Item
                          validateStatus={metaError(meta) ? 'error' : undefined}
                          help={metaError(meta) ? meta.error : ''}
                          label="List of Passengers"
                        >
                          <Select
                            showSearch
                            style={{ width: '100%' }}
                            placeholder="Popular Cities or Airports"
                            onChange={input.onChange}
                            optionFilterProp="children"
                          >
                            <Option value="jack">Jack</Option>
                            <Option value="lucy">Lucy</Option>
                            <Option value="tom">Tom</Option>
                          </Select>
                        </Form.Item>
                      )}
                    </Field>
                  </Col>
                  <Col span={7}>
                    <Field name="from">
                      {({ input, meta }) => (
                        <Form.Item
                          validateStatus={metaError(meta) ? 'error' : undefined}
                          help={metaError(meta) ? meta.error : ''}
                          label="From"
                        >
                          <Select
                            showSearch
                            style={{ width: '100%' }}
                            onChange={input.onChange}
                            placeholder="Popular Cities or Airports"
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
                      )}
                    </Field>
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
                  <Col span={7}>
                    <Field name="to">
                      {({ input, meta }) => (
                        <Form.Item
                          validateStatus={metaError(meta) ? 'error' : undefined}
                          help={metaError(meta) ? meta.error : ''}
                          label="To"
                        >
                          <Select
                            showSearch
                            style={{ width: '100%' }}
                            onChange={input.onChange}
                            placeholder="Popular Cities or Airports"
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
                      )}
                    </Field>
                  </Col>
                </Row>
                <Row gutter={24}>
                  <Col span={8}>
                    <Field name="departure">
                      {({ input, meta }) => (
                        <Form.Item
                          validateStatus={metaError(meta) ? 'error' : undefined}
                          help={metaError(meta) ? meta.error : ''}
                          label="Departure Date"
                        >
                          <DatePicker
                            disabledDate={disabledDate}
                            format={dateFormat}
                            onChange={input.onChange}
                            style={{ width: '100%' }}
                          />
                        </Form.Item>
                      )}
                    </Field>
                  </Col>
                  <Col span={8}>
                    <Field name="return">
                      {({ input, meta }) => (
                        <Form.Item
                          validateStatus={metaError(meta) ? 'error' : undefined}
                          help={metaError(meta) ? meta.error : ''}
                          label="Return Date"
                        >
                          <DatePicker
                            disabledDate={disabledDate}
                            format={dateFormat}
                            onChange={input.onChange}
                            style={{ width: '100%' }}
                            disabled={values.type !== 'ROUND_TRIP'}
                          />
                        </Form.Item>
                      )}
                    </Field>
                  </Col>
                  <Col span={8}>
                    <Field name="seat">
                      {({ input, meta }) => (
                        <Form.Item
                          validateStatus={metaError(meta) ? 'error' : undefined}
                          help={metaError(meta) ? meta.error : ''}
                          label="Seat Class"
                        >
                          <Select
                            showSearch
                            style={{ width: '100%' }}
                            onChange={input.onChange}
                            placeholder="Select Seat Class"
                            optionFilterProp="children"
                          >
                            <Option value="Economy">Economy</Option>
                            <Option value="Premium Economy">Premium Economy</Option>
                            <Option value="Business">Business</Option>
                            <Option value="First Class">First Class</Option>
                          </Select>
                        </Form.Item>
                      )}
                    </Field>
                  </Col>
                </Row>
                <div style={{ marginTop: 10 }}>
                  <Button
                    loading={state.search.flights.loading}
                    icon="search"
                    style={{ width: '150px' }}
                    type="primary"
                    htmlType="submit"
                  >
                    Search Flight
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
