import React from 'react';
import { Result, Button } from 'antd';

export default function Success() {
  return (
    <div style={{ paddingTop: 100 }}>
      <Result
        status="success"
        title="Submissions for business trips will be processed"
        subTitle="Tiket number: 2017182818828182881, Please wait for your email to see your booking details"
        extra={[
          <Button href="/" type="primary" key="console">
            Back to home
          </Button>,
        ]}
      />
    </div>
  );
}
