import React from 'react';
import {Layout} from 'antd';

import "../styles/admin.less"

const {Header, Footer, Sider, Content} = Layout;

const Products = () => {

  return (
      <Layout style={{height: "calc(100vh)"}}>
        <Sider>Sider</Sider>
        <Layout>
          <Header>Header</Header>
          <Content>Content</Content>
          <Footer>Footer</Footer>
        </Layout>
      </Layout>
  );
};

export default Products;
