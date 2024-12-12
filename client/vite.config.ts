import react from "@vitejs/plugin-react";
import path, { resolve } from "path";
import { defineConfig } from "vite";

// https://vite.dev/config/
const root = path.resolve(__dirname, "src");
export default defineConfig({
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
            "@app": resolve(root, "app"),
            "@entities": resolve(root, "entities"),
            "@features": resolve(root, "features"),
            "@pages": resolve(root, "pages"),
            "@api": resolve(root, "shared/api"),
            "@hooks": resolve(root, "shared/hooks"),
            "@models": resolve(root, "shared/models"),
            "@interfaces": resolve(root, "shared/interfaces"),
            "@ui": resolve(root, "shared/ui"),
            "@lib": resolve(root, "shared/lib"),
            "@utils": resolve(root, "shared/utils"),
            "@config": resolve(root, "shared/config"),
            "@styles": resolve(root, "shared/styles"),
        },
    },
    plugins: [react()],
});
