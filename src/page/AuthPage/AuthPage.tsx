import React from 'react';
import { Typography } from 'antd';
import { AuthForm } from '../../modules';

const { Title } = Typography;

const AuthPage = () => (
  <>
    <Title level={2}>Авторизация</Title>
    <AuthForm />
  </>
);

export default AuthPage;
