import React from 'react';
import {Col, Row} from 'antd';
import './index.less';

function Admin() {
    return (
        <Row>
            <Col span={3}>
                Left
            </Col>
            <Col span={21}>
                Right
            </Col>
        </Row>
    );
}

export default Admin;
