import { defineConfig } from "vite";
import { fileURLToPath, URL } from "url";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@theme": fileURLToPath(
        new URL("./src/theme/index.ts", import.meta.url)
      ), 
      "@components": fileURLToPath(
        new URL("./src/components/index.ts", import.meta.url)
      ),
      "@utils": fileURLToPath(new URL("./src/utils.ts", import.meta.url)),
      "@constants": fileURLToPath(
        new URL("./src/constants.ts", import.meta.url)
      ),
      "@assets": fileURLToPath(
        new URL("./src/assets/index.ts", import.meta.url)
      ),
      "@webgl": fileURLToPath(
        new URL("./src/webgl/", import.meta.url)
      )
    },
  },
});
