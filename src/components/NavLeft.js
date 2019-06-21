import React from 'react';

import "./../styles/nav-left.less"
import logo from "./../assets/logo.svg"
import {Menu} from "antd";
import menuList from "../configs/menuList"

const {SubMenu} = Menu;

// 菜单渲染
let subMenuFun = (data) => {
  return data.map((item) => {
    if (item.children) {
      return (
          <SubMenu title={item.title} key={item.key}>
            {subMenuFun(item.children)}
          </SubMenu>
      )
    }
    return <Menu.Item title={item.title} key={item.key}>{item.title}</Menu.Item>
  })
}

const NavLeft = () => {

  const subMenus = subMenuFun(menuList)
  return (
      <div>
        <div className="logo">
          <img src={logo} alt=""/>
          <h1>管理平台</h1>
        </div>
        <Menu theme={"dark"} style={{height: "calc(100vh)"}}>
          {subMenus}
          <Menu.Item>菜单项</Menu.Item>
          <SubMenu title="子菜单">
            <Menu.Item>子菜单项</Menu.Item>
          </SubMenu>
        </Menu>
      </div>
  );
};

export default NavLeft;
