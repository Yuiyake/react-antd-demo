import React from 'react';
import { FormInstance } from 'antd/es/form/Form';
import { Modal, Form, Input, Button, message } from 'antd';
import TypeSelect from '@/pages/pagesample/list/search/table/components/TypeSelect';
import { TableListItem } from '../data';

interface CreateFormProps {
  visible: boolean;
  values?: Partial<TableListItem>;
  onSubmitLoading: boolean;
  onSubmit: (values: Omit<TableListItem, 'id'>, form: FormInstance) => void;
  onCancel: () => void;
}

const CreateForm: React.FC<CreateFormProps> = (props) => {
  const { visible, values, onSubmit, onSubmitLoading, onCancel } = props;
  const formVals = {
    name: values?.name || '',
    desc: values?.name || '',
    href: values?.name || '',
    type: values?.name || '',
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
    <Modal
      destroyOnClose={false}
      title='新增'
      visible={visible}
      onCancel={onCancel}
      footer={[
        <Button key='back' onClick={() => onCancel()}>
          取消
        </Button>,
        <Button key='submit' type='primary' htmlType='submit' loading={onSubmitLoading} onClick={() => onFinish()}>
          提交
        </Button>,
      ]}
    >
      <Form
        form={form}
        name='createform'
        labelCol={{ span: 4 }}
        initialValues={{
          name: formVals.name,
          href: formVals.href,
          desc: formVals.desc,
          type: formVals.type,
        }}
      >
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
                if (value === '' || !value) {
                  throw new Error('请输入名称');
                } else if (value.length > 15) {
                  throw new Error('长度不能大于15个字');
                }
              },
            },
          ]}
        >
          <Input placeholder='请输入名称'></Input>
        </Form.Item>

        <Form.Item
          label='网址'
          name='href'
          rules={[
            {
              required: true,
              validator: async (rule, value) => {
                if (value === '' || !value) {
                  throw new Error('请输入网址');
                } else if (
                  // eslint-disable-next-line no-useless-escape
                  !/(http|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&:/~\+#]*[\w\-\@?^=%&/~\+#])?/.test(value)
                ) {
                  throw new Error('请输入正确的网址');
                }
              },
            },
          ]}
        >
          <Input placeholder='请输入网址'></Input>
        </Form.Item>

        <Form.Item label='备注' name='desc'>
          <Input placeholder='请输入备注'></Input>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default CreateForm;
