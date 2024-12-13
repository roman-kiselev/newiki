import { LayoutComponent } from "@/features/layout";
import { configLeftMenu } from "@/shared/config";
import { Route, Routes } from "react-router-dom";
import Login from "./auth/Login";
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
            <Route path="/auth" element={<Login />} />
        </Routes>
    );
};

export default Routing;
