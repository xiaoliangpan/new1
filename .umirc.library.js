export default {
  esm: "rollup",
  cjs: "rollup",
  umd: {
    name: "new1",
    globals: {
      react: "React",
    },
  },
};
