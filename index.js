module.exports = {
  env: {
    es6: true,
    node: true,
    mocha: true
  },
  "extends": ["airbnb"],
  "rules": {
    "no-unused-vars": "warn",
    "no-console": "off",
    "func-names": "off",
    "no-process-exit": "off",
    "object-shorthand": "off",
    "class-methods-use-this": "off"
  }
};
