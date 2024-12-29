import remixConfig from "@aiofc/eslint-config/remix";

/** @type {import('typescript-eslint').Config} */
export default [
  ...remixConfig,
  {
    ignores: ["server-build/**"],
  },
];
