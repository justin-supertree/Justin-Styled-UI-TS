import resolve from "@rollup/plugin-node-resolve";
import image from "@rollup/plugin-image";
import typescript from "@rollup/plugin-typescript";
import peerDepsExternal from "rollup-plugin-peer-deps-external";

export default {
  input: "./index.ts",
  output: [
    {
      dir: "build",
      format: "esm",
      exports: "named",
      sourcemap: true,
    },
  ],
  preserveModules: true,
  plugins: [
    peerDepsExternal(),
    image(),
    resolve(),
    typescript({ useTsconfigDeclarationDir: true }),
  ],
};
