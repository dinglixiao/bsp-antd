import React from 'react';
import NavLeft from "../components/NavLeft";
import Header from "../components/Header";
import Content from "../components/Content";
import Footer from "../components/Footer";

import "../styles/admin.less"
import {Col, Row} from "antd";

const Products = () => {

  return (
        <Row className="container">
          <Col className="nav-left" span="3">
            <NavLeft/>
          </Col>
          <Col className="main" span="21">
            <Header/>
            <Content/>
            <Footer/>
          </Col>
        </Row>
  );
};

export default Products;
