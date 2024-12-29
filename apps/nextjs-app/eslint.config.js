import baseConfig from "@aiofc/eslint-config/base.js";
import nextConfig from "@aiofc/eslint-config/next.js";

/** @type {import('typescript-eslint').Config} */
export default [
  ...baseConfig,
  ...nextConfig,
  {
    ignores: [".next/**"],
  },
];
