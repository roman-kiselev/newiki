import { mainApi } from "@/shared/api";
import { authReducer } from "@/shared/models";
import { combineReducers, configureStore } from "@reduxjs/toolkit";

// const listenerMiddleware = createListenerMiddleware;

const rootReducer = combineReducers({
    auth: authReducer,
    [mainApi.reducerPath]: mainApi.reducer,
});

const store = configureStore({
    reducer: rootReducer,
    // middleware(getDefaultMiddleware) {
    //     return getDefaultMiddleware().concat().prepend();
    // },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof rootReducer>;
export default store;
