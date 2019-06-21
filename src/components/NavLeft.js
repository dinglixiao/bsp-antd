import React from 'react';

import "./../styles/nav-left.less"
import logo from "./../assets/logo.svg"
import {Menu} from "antd";
import SubMenu from "antd/lib/menu/SubMenu";

const NavLeft = () => {

  return (
      <div>
        <div className="logo">
          <img src={logo} alt=""/>
          <h1>管理平台</h1>
        </div>
        <Menu theme={"dark"} style={{height: "calc(100vh)"}}>
          <Menu.Item>菜单项</Menu.Item>
          <SubMenu title="子菜单">
            <Menu.Item>子菜单项</Menu.Item>
          </SubMenu>
        </Menu>
      </div>
  );
};

export default NavLeft;
