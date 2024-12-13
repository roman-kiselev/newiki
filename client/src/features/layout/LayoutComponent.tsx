import { useAppSelector } from "@/shared/hooks";
import { VerticalMenu } from "@/shared/ui";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Layout } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const LayoutComponent = () => {
    const { isAuth } = useAppSelector((store) => store.auth);
    const navigation = useNavigate();
    const [collapsed, setCollapsed] = useState(false);

    const toggleMenu = () => {
        setCollapsed(!collapsed);
    };
    const width = window.innerWidth;

    useEffect(() => {
        if (!isAuth) {
            navigation("/auth");
        }
    }, [isAuth, navigation]);
    // const items: MenuProps["items"] = [
    //     {
    //         type: "divider",
    //     },
    //     // {
    //     //     label: <Button onClick={handleClickLogout}>Выход</Button>,
    //     //     key: '3',
    //     // },
    // ];

    return (
        <Layout>
            <Sider
                trigger={null}
                collapsible
                collapsed={collapsed}
                collapsedWidth={0}
                width={230}
                theme="light"
                style={{
                    minHeight: "100vh",
                    height: "100%",
                }}
            >
                <VerticalMenu />
            </Sider>
            <Layout className="site-layout">
                <Header
                    className="site-layout-header"
                    style={{ padding: 0, background: "#fff" }}
                >
                    {React.createElement(
                        collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
                        {
                            className: "trigger",
                            onClick: toggleMenu,
                        }
                    )}
                    {/* <div style={{ float: "right" }}>
                        <Dropdown
                            menu={{ items }}
                            placement="bottomRight"
                            trigger={["click"]}
                        >
                            <Button
                                type="text"
                                className="ant-dropdown-link"
                                onClick={(e) => e.preventDefault()}
                            >
                                {email} <DownOutlined />
                            </Button>
                        </Dropdown>
                    </div> */}
                </Header>
                <Content
                    className="site-layout-content"
                    style={{
                        margin: "5px",
                        // padding: 24,
                        minHeight: 280,
                        display: !collapsed && width < 500 ? "none" : "block",
                    }}
                >
                    <Outlet />
                </Content>
                <Footer
                    style={{
                        textAlign: "center",
                        display: !collapsed && width < 500 ? "none" : "flex",
                    }}
                >
                    {/* <p>
                        <a href="mailto:snab.pto@yandex.ru">
                            "Задавайте вопросы по электронной почте"
                        </a>
                    </p> */}
                </Footer>
            </Layout>
        </Layout>
    );
};

export default LayoutComponent;
