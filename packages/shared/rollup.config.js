import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";
import babel from "@rollup/plugin-babel";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import json from "@rollup/plugin-json";
import { terser } from "rollup-plugin-terser";
import packageJson from "./package.json" assert { type: "json" };

/**
 * @type {import('rollup').RollupOptions}
 *
 * This tells TypeScript that rollupConfig should be treated as
 * a RollupOptions type from the rollup package, resolving the type inference issue.
 */

const rollupConfig = {
  input: "src/index.ts",
  output: [
    {
      file: packageJson.exports["."].require.default,
      format: "cjs",
      exports: "named",
      sourcemap: true,
    },
    {
      file: packageJson.exports["."].import.default,
      format: "es",

      sourcemap: true,
    },
  ],
  plugins: [
    nodeResolve({
      browser: true, // Rollup defaults to resolving Node.js-specific modules, which often include imports for core modules like fs, path, or stream—none of which are available in browsers.
      preferBuiltins: false, // This ensures Rollup doesn't automatically attempt to use Node.js core modules
    }), // This plugin allows Rollup to resolve external dependencies, specifically those in node_modules, so that it can bundle them properly.
    commonjs({
      extensions: [".js", ".jsx", ".ts", ".tsx"],
      include: /node_modules/,
    }), // cjs 를 es6로
    terser(),
    typescript({
      useTsconfigDeclarationDir: true, // tsconfig의 declarationDir의 타입들을 사용
      tsconfig: "./tsconfig.json",
      clean: true,
    }), // typescript 컴파일, tsc 빌드 명령어 따로 실행할 필요 없음
    babel({
      extensions: [".js", "jsx", ".ts", ".tsx"],
      babelHelpers: "bundled",
      presets: [
        "@babel/preset-env",
        "@babel/preset-react",
        "@babel/preset-typescript",
      ],
      exclude: "node_modules/**",
    }), // babel
    peerDepsExternal(),
    json(),
  ],
};

export default rollupConfig;
