import React from 'react';
import { Card, Typography, Button, Input, Form } from 'antd';
import './Home.less';

function Landing() {
  return (
    <div className="home-page">
      <div className="home-banner">Let's plan your business trip!</div>
      <div className="container">
        <div style={{ marginTop: 70 }}>
          <Card style={{ width: 400, margin: '0 auto' }}>
            <Typography.Title level={4}>Start your business trip</Typography.Title>
            <Form.Item label="Business Trip">
              <Input placeholder="Input your business trip ID" />
            </Form.Item>
            <Button type="primary">Submit</Button>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Landing;
