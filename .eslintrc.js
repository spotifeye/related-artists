module.exports = {
  "extends": [
    "airbnb",
    "plugin:prettier/recommended",
    "prettier/react"
  ],
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true,
    },
  },
  "env": {
    "jest": true,
    "browser": true,
  },
  "plugins": [
      "prettier",
      "react",
    ],
  "rules": {
    "import/no-extraneous-dependencies": [
      "error", 
      { "devDependencies": true },
    ],
    "no-underscore-dangle": [
      "error",
      { "allow": ["_id"]},
    ],
    "prettier/prettier": [
      "error",
      {
        "singleQuote": true,
        "trailingComma": "all",
        "arrowParens": "always",
      }
    ]
  }
};
