import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Space, Form, Input, Button, Select, Divider } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';

import { getFormValues, convertArrayToObject } from '../utils/utils';

const FormItem = Form.Item;

const formItemLayoutWithOutLabel = {
  wrapperCol: {
    xs: { span: 24, offset: 0 },
  },
};

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [],
    };
  }

  remove = (id) => {
    this.setState((prevState) => {
      const { contacts } = prevState;
      return {
        contacts: contacts.filter((contact) => contact.id !== id),
      };
    });
  };

  add = () => {
    const contact = {
      id: uuidv4(),
      type: '',
      value: '',
    };

    this.setState((prevState) => {
      const { contacts } = prevState;
      return {
        contacts: [...contacts, contact],
      };
    });
  };

  handleInputChange = (index, e) => {
    const { contacts } = this.state;
    const values = [...contacts];

    values[index].value = e.target.value;

    this.setState({
      contacts: values,
    });
  };

  handleSelectChange = (index, value) => {
    const { contacts } = this.state;
    const values = [...contacts];

    values[index].type = value;

    this.setState({
      contacts: values,
    });
  };

  render() {
    const { contacts } = this.state;
    const types = [
      { label: 'Email', value: 'Email' },
      { label: 'Phone', value: 'Phone' },
      { label: 'Link', value: 'Link' },
    ];

    console.log(contacts);
    console.log(getFormValues(contacts));
    console.log(convertArrayToObject(getFormValues(contacts)));

    return (
      <Form {...formItemLayoutWithOutLabel}>
        <Space>
          <p style={{ width: 150, marginBottom: '0' }}>Label</p>
          <p style={{ marginBottom: '0' }}>Value</p>
        </Space>
        <Divider style={{ marginTop: '0.5rem' }} />

        <div>
          {contacts.map((contact, index) => {
            const { id } = contact;
            return (
              <Space key={id} style={{ display: 'flex' }} align="start">
                <FormItem>
                  <Select
                    placeholder="Select a label"
                    options={types}
                    style={{ width: 150 }}
                    onChange={(value) => this.handleSelectChange(index, value)}
                  />
                </FormItem>
                <FormItem>
                  <Input
                    placeholder="Enter a value"
                    onChange={(e) => this.handleInputChange(index, e)}
                  />
                </FormItem>

                <MinusCircleOutlined
                  style={{ fontSize: '1.8rem', color: '#fa163f' }}
                  onClick={() => this.remove(id)}
                />
              </Space>
            );
          })}

          <Form.Item>
            <Button
              type="dashed"
              onClick={() => {
                this.add();
              }}
              block
            >
              <PlusOutlined /> Add Contact
            </Button>
          </Form.Item>
        </div>
      </Form>
    );
  }
}

export default ContactForm;
