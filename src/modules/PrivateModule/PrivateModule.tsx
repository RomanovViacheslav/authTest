import React from 'react';
import { Button, Space } from 'antd';
import { SmileTwoTone } from '@ant-design/icons';
import { useAppDispatch, tokenActions } from '../../shared';

export const PrivateModule = () => {
  const dispatch = useAppDispatch();
  const handleClick = () => {
    dispatch(tokenActions.logout());
  };
  return (
    <Space direction="vertical" align="center" size="large">
      <Button onClick={handleClick} type="primary">
        Выход
      </Button>
      <SmileTwoTone rev={undefined} spin style={{ fontSize: '100px' }} />
    </Space>
  );
};
