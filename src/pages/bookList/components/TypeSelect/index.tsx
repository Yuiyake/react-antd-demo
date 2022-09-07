import React from 'react';
import { Select } from 'antd';

// 封装按头部/底部查询排序标签
interface TypeSelectProps {
  value?: string;
  placeholder?: string;
  onChange?: (value: String) => void;
}

const TypeSelect: React.FC<TypeSelectProps> = (props) => {
  const { value, ...attr } = props;
  return (
    <Select value={value === '' ? undefined : value} {...attr} allowClear>
      <Select.Option value='header'>头部</Select.Option>
      <Select.Option value='footer'>底部</Select.Option>
    </Select>
  );
};

export default TypeSelect;
