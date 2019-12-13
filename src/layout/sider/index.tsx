import React, { useCallback } from "react";
import { useHistory } from 'react-router'
import { Layout, Menu, Icon } from "antd";
import siderConfig from "../../config/sider.config";
import useRouteInfo from '../../utils/useRouteInfo'

const { SubMenu } = Menu;
const { Sider } = Layout;

const AppSider: React.FC<{}> = function AppSider() {


 const history = useHistory()
 const itemClickAction = useCallback((path:string)=>{
  history.push(path);
  },[history]);

  const {ids} = useRouteInfo()


  return (
    <Sider width={200} style={{ background: "#fff" }}>
      <Menu
        mode="inline"
        defaultOpenKeys={[ids[0]]}
        defaultSelectedKeys={[ids[1]]}
        style={{ height: "100%", borderRight: 0 }}
      >
        {siderConfig.map(configItem => (
          <SubMenu
            key={configItem.id}
            title={
              <span>
                <Icon type={configItem.icon} />
                {configItem.root}
              </span>
            }
          >
            {/* 二级菜单编译 */}
            {
              configItem.children.map(item=>(
              <Menu.Item key={item.id}
              onClick={()=>{
                itemClickAction(item.path);
              }}
              >{item.title}</Menu.Item>
            ))
            }
          </SubMenu>
        ))}
      </Menu>
    </Sider>
  );
};

export default AppSider;
