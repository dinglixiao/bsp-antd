import React, {Component} from "react";
import {Menu} from "antd";

import './index.less'
import logo from "./../../logo.svg"
import SubMenu from "antd/lib/menu/SubMenu";

class NavLeft extends Component {

    render() {
        return (
            <div>
                <div className="logo">
                    <img src={logo} alt=""/>
                    <h1>Imooc MS</h1>
                </div>
                <Menu theme={"dark"}>
                    <SubMenu key="sub1">
                        <Menu.Item key="9">Option 9</Menu.Item>
                        <Menu.Item key="10">Option 10</Menu.Item>
                        <Menu.Item key="11">Option 11</Menu.Item>
                        <Menu.Item key="12">Option 12</Menu.Item>
                    </SubMenu>
                </Menu>
            </div>
        )
    }
}

export default NavLeft