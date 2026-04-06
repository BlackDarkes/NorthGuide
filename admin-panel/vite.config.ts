import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { dirname, resolve } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return {
    plugins: [
      react({
        babel: {
          plugins: [["babel-plugin-react-compiler"]],
        },
      }),
      tailwindcss(),
    ],
    server: {
      port: 8080,
      cors: true,
      hmr: true,
      proxy: {
        "/api": {
          target: env.API_URL,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ""),
        },
      },
    },
    preview: {
      port: 8080,
    },
    resolve: {
      alias: {
        "@/app": resolve(__dirname, "src/app"),
        "@/pages": resolve(__dirname, "src/pages"),
        "@/widgets": resolve(__dirname, "src/widgets"),
        "@/features": resolve(__dirname, "src/features"),
        "@/entities": resolve(__dirname, "src/entities"),
        "@/shared": resolve(__dirname, "src/shared"),
        "@/libs": resolve(__dirname, "src/libs"),
      },
    },
  };
});