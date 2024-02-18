import { defineConfig, mergeConfig } from "vite";
import { sharedConfig } from "../../vite.shared";

export default mergeConfig(sharedConfig, defineConfig({
    server: {
        port: 8081
    }
}))