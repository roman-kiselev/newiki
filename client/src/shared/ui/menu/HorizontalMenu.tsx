import { Menu } from "antd";
const { SubMenu } = Menu;

const HorizontalMenu = () => {
    return (
        <Menu mode="horizontal">
            <Menu.Item key="mail">Navigation One</Menu.Item>
            <Menu.Item key="app">Navigation Two</Menu.Item>
            <SubMenu key="SubMenu" title="Navigation Three - Submenu">
                <Menu.Item key="setting:1">Option 1</Menu.Item>
                <Menu.Item key="setting:2">Option 2</Menu.Item>
            </SubMenu>
        </Menu>
    );
};

export default HorizontalMenu;
