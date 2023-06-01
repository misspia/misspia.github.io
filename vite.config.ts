import { defineConfig } from "vite";
import { fileURLToPath, URL } from "url";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: "@theme",
        replacement: fileURLToPath(
          new URL("./src/theme/index.ts", import.meta.url)
        ),
      },
      {
        find: "@components",
        replacement: fileURLToPath(
          new URL("./src/components/index.ts", import.meta.url)
        ),
      },
      {
        find: "@utils",
        replacement: fileURLToPath(new URL("./src/utils.ts", import.meta.url)),
      },
      {
        find: "@constants",
        replacement: fileURLToPath(
          new URL("./src/constants/index.ts", import.meta.url)
        ),
      },
      {
        find: "@assets",
        replacement: fileURLToPath(
          new URL("./src/assets/index.ts", import.meta.url)
        ),
      },
    ],
  },
});
