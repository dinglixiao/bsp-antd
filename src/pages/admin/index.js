import React from 'react';
import {Col, Row} from 'antd';
import './index.less';
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import NavLeft from "../../components/NavLeft";

function Admin() {
    return (
        <Row>
            <Col span={3}>
                <NavLeft></NavLeft>
            </Col>
            <Col span={21}>
                <Header></Header>
                <Row></Row>
                <Footer></Footer>
            </Col>
        </Row>
    );
}

export default Admin;
