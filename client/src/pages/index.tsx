import { configLeftMenu } from "@/shared/config";
import { LayoutComponent } from "@features/layout";
import { Route, Routes } from "react-router-dom";
import { CreateArticle } from "./createArticle";

const Routing = () => {
    return (
        <Routes>
            <Route
                path={configLeftMenu.home.path}
                element={<LayoutComponent />}
            >
                <Route index element={<p>Home</p>} />
                <Route
                    path={configLeftMenu.createArticle.path}
                    element={<CreateArticle />}
                />
            </Route>
        </Routes>
    );
};

export default Routing;
