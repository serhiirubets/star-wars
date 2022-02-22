import React from 'react';
import { Spin, Space } from 'antd';

export function WithLoader<P extends {isLoading: boolean}>(Component: React.FunctionComponent) {
  return function WihLoadingComponent({ isLoading, ...props }: P) {
    if (!isLoading) {
      return (<Component {...props} />);
    }

    return <Space size="middle">
      <Spin size="large" />
    </Space>
  }
}
export default WithLoader;
