import { Menu } from "antd";
import { useEffect, useState } from "react";

const ResponsiveMenu = () => {
    const [mode, setMode] = useState("horizontal");
    useEffect(() => {
        const updateMode = () => {
            setMode(window.innerWidth < 768 ? "vertical" : "horizontal");
        };
        window.addEventListener("resize", updateMode);
        updateMode();
        return () => window.removeEventListener("resize", updateMode);
    }, []);

    return (
        <Menu mode={mode === "horizontal" ? "horizontal" : "vertical"}>
            <Menu.Item key="1">Option 1</Menu.Item>
            <Menu.Item key="2">Option 2</Menu.Item>
        </Menu>
    );
};

export default ResponsiveMenu;
