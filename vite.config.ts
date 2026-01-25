import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

export default defineConfig(({ mode }) => ({
  plugins: [tailwindcss(), react()],
  define: {
    "process.env.API_HOST": JSON.stringify(process.env.API_HOST || ""),
    "process.env.STATIC_VERSION": JSON.stringify(
      process.env.STATIC_VERSION || "false"
    ),
  },
  esbuild: {
    jsx: "automatic",
    jsxDev: mode !== "production",
  },
  resolve: {
    alias: {
      "@shared": path.resolve(__dirname, "packages/shared"),
      "@client": path.resolve(__dirname, "packages/client"),
      ...(mode === "production" && {
        "react/jsx-dev-runtime": "react/jsx-runtime",
      }),
    },
  },
  build: {
    manifest: true,
    rollupOptions: {
      input: path.resolve(__dirname, "packages/client/entry-client.tsx"),
    },
  },
  ssr: {
    noExternal: mode === "production" ? true : ["@shared", "@client"],
    external:
      mode === "production"
        ? ["react", "react-dom", "react/jsx-runtime", "react/jsx-dev-runtime"]
        : [],
  },
  optimizeDeps: {
    include: ["react", "react-dom", "react-router-dom", "react/jsx-runtime"],
  },
}));
