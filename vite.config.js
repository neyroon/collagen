import preactPlugin from "@preact/preset-vite";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import vike from "vike/plugin";

const config = {
  plugins: [tailwindcss(), preactPlugin(), vike({ prerender: true })],
  // We manually add a list of dependencies to be pre-bundled, in order to avoid a page reload at dev start which breaks Vike's CI
  optimizeDeps: {
    include: [
      "preact/devtools",
      "preact/debug",
      "preact/jsx-dev-runtime",
      "preact",
      "preact/hooks",
    ],
  },
  resolve: {
    alias: [
      {
        find: "@components",
        replacement: path.resolve(__dirname, "workspaces/components-kit"),
      },
      {
        find: "@foundation",
        replacement: path.resolve(__dirname, "workspaces/foundation-kit/index"),
      },
      {
        find: "@hooks",
        replacement: path.resolve(__dirname, "workspaces/hooks/index"),
      },
      {
        find: "@tokens",
        replacement: path.resolve(__dirname, "workspaces/tokens/index"),
      },
    ],
  },
};

export default config;
