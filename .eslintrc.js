module.exports = {
    extends: ['expo', 'prettier'],
    plugins: ['prettier'],
    rules: {
      'prettier/prettier':  [
        "error",
        {
          endOfLine: "auto",
        },
      ],         
    },  
  };      
  
// // https://docs.expo.dev/guides/using-eslint/
// module.exports = {
//   "extends": ["expo","prettier"],
//   "plugins": ["prettier"],
//   "rules": {
//     "semi": ["error", "always"],
//     "prettier/prettier": "error", 
//     "no-unused-vars": "error",
//     "no-extra-semi": "error",
//     "eqeqeq": "error",
//     "camelcase": "error",   
//   },
// //  ignorePatterns: ['/dist/*'],  
// };      
        