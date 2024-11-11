const presets = [
  "@babel/preset-react",
  [
    "@babel/preset-env",
    {
      modules: false, // "Tree Shaking"을 위함 ( ES6 모듈 시스템 사용 )
      useBuiltIns: "usage",
      corejs: 3,
    },
  ],
  "@babel/preset-typescript",
];

const plugins = [];

module.exports = { presets, plugins };
