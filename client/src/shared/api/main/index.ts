import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

export const mainApi = createApi({
    reducerPath: "mainApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000" }),
    endpoints: () => ({}),
});
