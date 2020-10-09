import React from 'react';
import { PageHeader, Row, Col } from 'antd';
import ContactForm from './components/contact-form';

const App = () => {
  return (
    <>
      <div className="wrapper">
        <PageHeader title="Add new contact" style={{ textAlign: 'center' }} />

        <Row justify="center">
          <Col span={12}>
            <ContactForm />
          </Col>
        </Row>
      </div>
    </>
  );
};

export default App;
