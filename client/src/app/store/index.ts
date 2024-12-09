import { mainApi } from "@api/main";
import { configureStore, createListenerMiddleware } from "@reduxjs/toolkit";

const listenerMiddleware = createListenerMiddleware;

const rootReducer = {
    [mainApi.reducerPath]: mainApi.reducer,
};

const store = configureStore({
    reducer: rootReducer,
    middleware(getDefaultMiddleware) {
        return getDefaultMiddleware({}).concat(mainApi.middleware);
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof rootReducer>;
export default store;
