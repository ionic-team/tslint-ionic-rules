var path = require("path");

module.exports = {
  "extends": "tslint-eslint-rules",
  "rulesDirectory": path.join(path.dirname(require.resolve("tslint-eslint-rules")), "dist/rules"),
  "rules": {
    "class-name": true,
    "comment-format": [
      true,
      "check-space"
    ],
    "eofline": true,
    "indent": [
      true,
      "spaces"
    ],
    "no-debugger": true,
    "no-duplicate-variable": true,
    "no-eval": true,
    "no-inner-declarations": [
      true,
      "functions"
    ],
    "no-internal-module": true,
    "no-trailing-whitespace": true,
    "no-unused-variable": [
      true,
      {"ignore-pattern": "^_[0-9]*$"}
    ],
    "no-var-keyword": false,
    "one-line": [
      true,
      "check-catch",
      "check-else",
      "check-open-brace",
      "check-whitespace"
    ],
    "ordered-imports": [
      true,
      {
        "import-sources-order": "any",
        "named-imports-order": "lowercase-last"
      }
    ],
    "quotemark": [
      true,
      "single"
    ],
    "radix": true,
    "semicolon": [
      true,
      "always"
    ],
    "triple-equals": [
      true,
      "allow-null-check"
    ],
    "typedef-whitespace": [
      true,
      {
        "call-signature": "nospace",
        "index-signature": "nospace",
        "parameter": "nospace",
        "property-declaration": "nospace",
        "variable-declaration": "nospace"
      }
    ],
    "variable-name": [
      true,
      "ban-keywords"
    ],
    "whitespace": [
      true,
      "check-branch",
      "check-decl",
      "check-operator",
      "check-separator",
      "check-type"
    ]
  }
}
