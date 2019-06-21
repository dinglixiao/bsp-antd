import React from 'react';
import {Layout} from 'antd';

import "../styles/admin.less"

const {Header, Footer, Sider, Content} = Layout;

export default () => {

  return (
      <Layout className="container">
        <Header className="header">Header</Header>
        <Layout>
          <Sider>Sider</Sider>
          <Layout>
            <Content>Content</Content>
            <Footer>Footer</Footer>
          </Layout>
        </Layout>
      </Layout>
  );
};
