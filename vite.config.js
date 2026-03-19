import { defineConfig } from "vite";
import { fileURLToPath, URL } from "node:url";

export default defineConfig({
  resolve: {
    alias: {
      "@css": fileURLToPath(new URL("./src/css", import.meta.url)),
    },
  },
});
