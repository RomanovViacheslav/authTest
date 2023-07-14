import React from 'react';
import { Button, Form, Input, Typography } from 'antd';
import cls from './AuthForm.module.scss';
import { useAppDispatch, useAppSelector } from '../../shared';
import { loginUser } from './slice/AuthFrom.thunk';

export const AuthForm = () => {
  const [form] = Form.useForm();
  const dispatch = useAppDispatch();
  const { isLoading, error } = useAppSelector((state) => state.login);
  return (
    <Form
      className={cls.form}
      onFinish={(values) => {
        dispatch(loginUser(values));
      }}
      form={form}
      layout="vertical"
    >
      <Form.Item
        label="Name"
        name="name"
        rules={[
          {
            required: true,
            message: 'Введите Ваш username',
          },
        ]}
      >
        <Input placeholder="Name" id="name" />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Введите Ваш пароль',
          },
        ]}
        hasFeedback
      >
        <Input.Password placeholder="Пароль" />
      </Form.Item>
      {error && <Typography.Paragraph type="danger">{error}</Typography.Paragraph>}
      <Form.Item>
        <Button disabled={isLoading} type="primary" htmlType="submit">
          Войти
        </Button>
      </Form.Item>
    </Form>
  );
};
