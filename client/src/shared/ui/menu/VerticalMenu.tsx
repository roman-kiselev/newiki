import { itemsNav } from "@/shared/config";
import { Menu } from "antd";

const VerticalMenu = () => {
    return (
        <Menu
            theme="light"
            mode="inline"
            defaultSelectedKeys={["1"]}
            items={itemsNav}
        />
    );
};

export default VerticalMenu;
