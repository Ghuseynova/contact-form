import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Space, Form, Input, Button, Select, Divider } from 'antd';
import {
  PlusCircleOutlined,
  MinusCircleOutlined,
  PlusOutlined,
} from '@ant-design/icons';

const FormList = Form.List;
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
      contacts: [
        { id: uuidv4(), type: '', value: '' },
        { id: uuidv4(), type: '', value: '' },
        { id: uuidv4(), type: '', value: '' },
      ],
    };
  }

  handleChange = (value) => {
    console.log(`selected ${value}`);
  };

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

  render() {
    const { contacts } = this.state;
    const types = [
      { label: 'Email', value: 'Email' },
      { label: 'Phone', value: 'Phone' },
      { label: 'Link', value: 'Link' },
    ];

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
              <Space
                key={`contact_${index}`}
                style={{ display: 'flex' }}
                align="start"
              >
                <FormItem>
                  <Select
                    placeholder="Select a label"
                    options={types}
                    style={{ width: 150 }}
                    onChange={this.handleChange}
                  />
                </FormItem>
                <FormItem>
                  <Input placeholder="Enter a value" />
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
