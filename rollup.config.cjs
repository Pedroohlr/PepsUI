const peerDepsExternal = require("rollup-plugin-peer-deps-external");
const commonjs = require("@rollup/plugin-commonjs");
const { nodeResolve } = require("@rollup/plugin-node-resolve");
const typescript = require("@rollup/plugin-typescript");
const babel = require("@rollup/plugin-babel").default;
const postcss = require("rollup-plugin-postcss");
const tailwind = require("@tailwindcss/postcss7-compat");
const autoprefixer = require("autoprefixer");

module.exports = {
  input: "src/index.ts",
  output: [
    { file: "dist/index.esm.js", format: "esm" },
    { file: "dist/index.cjs.js", format: "cjs", exports: "named" }
  ],
  plugins: [
    peerDepsExternal(),
    nodeResolve(),
    commonjs(),
    typescript({ tsconfig: "./tsconfig.json" }),
    postcss({
      config: { path: './postcss.config.js' },
      inject: true,     
      minimize: true
    }),
    babel({
      extensions: [".js", ".jsx", ".ts", ".tsx"],
      babelHelpers: "bundled",
      presets: [
        "@babel/preset-env",
        "@babel/preset-react",
        "@babel/preset-typescript"
      ]
    })
  ]
};
