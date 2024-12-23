import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

const baseQuery = fetchBaseQuery({
    baseUrl: "http://localhost:3000",
});

export const mainApi = createApi({
    reducerPath: "mainApi",
    tagTypes: ["main"],
    baseQuery: baseQuery,
    endpoints: () => ({}),
    refetchOnMountOrArgChange: true,
});
