import { MenuProps } from "antd";

type MenuItem = Required<MenuProps>["items"][number];
type MenuItemWithIcon = MenuItem & {
    icon?: React.ReactNode;
};

export const getItemMenu = (
    label: React.ReactNode,
    key: React.Key,
    icon: React.ReactNode,
    type?: "group" | undefined,
    children?: MenuItemWithIcon[]
): MenuItemWithIcon => {
    if (!type) {
        return {
            key,
            label,
            children,
            icon,
        };
    } else {
        return {
            key,
            label,
            children,
            icon,
            type,
        };
    }
};
