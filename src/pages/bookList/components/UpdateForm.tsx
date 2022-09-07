import React from 'react';
import { FormInstance } from 'antd/lib/form';
import { Modal, Form, Input, Button, message } from 'antd';
import TypeSelect from './TypeSelect';
import { TableListItem } from '../data.d';


interface UpdateFormProps {
  visible: boolean;
  values: Partial<TableListItem>;
  onSubmitLoading: boolean;
  onSubmit: (values: TableListItem, form: FormInstance) => void;
  onCancel: () => void;
}

const UpdateForm: React.FC<UpdateFormProps> = (props) => {
  const { visible, values, onSubmit, onSubmitLoading, onCancel } = props;

  const formVals: TableListItem = {
    id: values.id || 0,
    name: values.name || '',
    desc: values.desc || '',
    href: values.href || '',
    type: values.type || '',
  };

  const [form] = Form.useForm();

  const onFinish = async () => {
    try {
      const fieldsValue = await form.validateFields();
      onSubmit({ ...formVals, ...fieldsValue }, form);
    } catch (err) {
      message.warning('验证错误');
    }
  };

  return (
    <Modal>
      <Form>
        <Form.Item
          label='位置'
          name='type'
          rules={[
            {
              required: true,
              message: '请选择',
            },
          ]}
        >
          <TypeSelect placeholder='请选择'></TypeSelect>
        </Form.Item>

        <Form.Item
          label='名称'
          name='name'
          rules={[
            {
              required: true,
              validator: async (rule, value) => {
                if (value === '' || value) {
                  throw new Error('请输入名称');
                } else if (value.length > 0) {
                  throw new Error('长度不能大于15个字');
                }
              },
            },
          ]}
        >
          <Input placeholder='请输入名称'></Input>
        </Form.Item>


      </Form>
    </Modal>
  )
};

export default UpdateForm;
