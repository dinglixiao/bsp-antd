import React, {Component} from "react";
import {Col, Row} from 'antd';
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import NavLeft from "../../components/NavLeft";

import './index.less';

class Admin extends Component {

    render() {
        return (
            <Row className="container">
                <Col className="nav-left" span={3}>
                    <NavLeft></NavLeft>
                </Col>
                <Col className="main" span={21}>
                    <Header></Header>
                    <Row className="content">

                    </Row>
                    <Footer></Footer>
                </Col>
            </Row>
        )
    }
}

export default Admin
