import { getItemMenu } from "@utils/menu";
import { MenuProps } from "antd";
import { Link } from "react-router-dom";
import { configLeftMenu, IConfigLeftMenu } from "./config";

const createItem = (name: keyof IConfigLeftMenu, data: IConfigLeftMenu) => {
    return getItemMenu(
        <Link to={data[name].path}>{data[name].name}</Link>,
        data[name].keyItem,
        data[name].icon
    );
};

export const itemsNav: MenuProps["items"] = [
    createItem("home", configLeftMenu),
    createItem("createArticle", configLeftMenu),
];
