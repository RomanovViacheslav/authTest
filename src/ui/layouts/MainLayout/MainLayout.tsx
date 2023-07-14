import { Layout } from 'antd';
import React from 'react';
import { Outlet } from 'react-router-dom';
import cls from './MainLayout.module.scss';

const { Content } = Layout;

export const MainLayout = () => (
  <Content className={cls.container}>
    <Outlet />
  </Content>
);
