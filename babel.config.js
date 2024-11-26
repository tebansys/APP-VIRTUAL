module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      ["babel-preset-expo", { jsxImportSource: "nativewind" }],
      "nativewind/babel",
    ],
  };
};

// module.exports = function (api) {
//   return {
//     presets: ["nativewind/babel"],
//     plugins: [
//       "<plugin-causing-issue>",
//      [
//        "@babel/plugin-transform-react-jsx",
//        {
//          runtime: "automatic",
//          importSource: "nativewind",
//        },
//      ],
//     ],
//   };
// };


// module.exports = function (api) {
//   api.cache(true);
//   return {
//     presets: ["babel-preset-expo"],
//     plugins: ["nativewind/babel"],
//   };
// };

// module.exports = function (api) {
//   api.cache(true);
//   return {
//     presets: ["module:@react-native/babel-preset", "nativewind/babel"], 
//   };
// };