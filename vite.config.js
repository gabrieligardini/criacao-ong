import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                index: resolve(import.meta.dirname, "index.html"),
                cadastro: resolve(import.meta.dirname, "cadastro.html"),
                projetos: resolve(import.meta.dirname, "projetos.html")
            }
        }
    }
});