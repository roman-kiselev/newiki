import { HomeOutlined } from "@ant-design/icons";
export interface IConfigLeftMenuItem {
    name: string;
    path: string;
    keyItem: string;
    icon: React.ReactNode;
}

export interface IConfigLeftMenu {
    home: IConfigLeftMenuItem;
    createArticle: IConfigLeftMenuItem;
}

export const configLeftMenu: IConfigLeftMenu = {
    home: {
        path: "/",
        keyItem: "home",
        name: "Домашняя",
        icon: <HomeOutlined />,
    },
    createArticle: {
        path: "/create",
        keyItem: "create",
        name: "Создать",
        icon: <HomeOutlined />,
    },
};
