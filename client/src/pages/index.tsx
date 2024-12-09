import { Route, Routes } from "react-router-dom";

const Routing = () => {
    return (
        <Routes>
            <Route
                path="/"
                element={
                    <>
                        <p>Hello</p>
                    </>
                }
            />
        </Routes>
    );
};

export default Routing;
