import React from 'react';
import { Spin, Space } from 'antd';
import cls from './Loader.module.scss';

export const Loader = () => (
  <Space className={cls.container}>
    <Spin size="large" />
  </Space>
);
