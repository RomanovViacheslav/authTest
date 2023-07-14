import React from 'react';
import { Typography, Space } from 'antd';
import { PrivateModule } from '../../modules';
import cls from './MainPage.module.scss';

const { Title } = Typography;

const MainPage = () => (
  <Space className={cls.wrapper} direction="vertical" align="center">
    <Title level={2}>Приватная страница</Title>
    <PrivateModule />
  </Space>
);

export default MainPage;
