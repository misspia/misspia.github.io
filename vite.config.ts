import { defineConfig } from "vite";
import { fileURLToPath, URL } from "url";
import react from "@vitejs/plugin-react";
import glsl from "vite-plugin-glsl";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: "docs",
  },
  plugins: [react(), glsl()],
  resolve: {
    alias: {
      "@hooks": fileURLToPath(new URL("./src/hooks/", import.meta.url)),
      "@theme": fileURLToPath(new URL("./src/theme/index.ts", import.meta.url)),
      "@components": fileURLToPath(
        new URL("./src/components/index.ts", import.meta.url),
      ),
      "@utils": fileURLToPath(new URL("./src/utils.ts", import.meta.url)),
      "@assets": fileURLToPath(
        new URL("./src/assets/index.ts", import.meta.url),
      ),
      "@webgl": fileURLToPath(new URL("./src/webgl/", import.meta.url)),
    },
  },
});
