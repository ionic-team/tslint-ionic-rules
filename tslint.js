var path = require("path");

module.exports = {
  "extends": ["tslint-eslint-rules"],
  "rulesDirectory": path.join(path.dirname(require.resolve("tslint-eslint-rules")), "dist/rules"),
  "rules": {
    "class-name": true,
    "comment-format": {"options": ["check-space"]},
    "eofline": true,
    "indent": {"options": ["spaces"]},
    "no-debugger": true,
    "no-duplicate-variable": true,
    "no-eval": true,
    "no-inner-declarations": {"options": ["functions"]},
    "no-internal-module": true,
    "no-trailing-whitespace": true,
    "no-var-keyword": false,
    "one-line": {
      "options": [
        "check-catch",
        "check-else",
        "check-open-brace",
        "check-whitespace"
      ]
    },
    "quotemark": {"options": ["single"]},
    "radix": true,
    "semicolon": {"options": ["always"]},
    "triple-equals": {"options": ["allow-null-check"]},
    "typedef-whitespace": {
      "options": {
        "call-signature": "nospace",
        "index-signature": "nospace",
        "parameter": "nospace",
        "property-declaration": "nospace",
        "variable-declaration": "nospace"
      }
    },
    "variable-name": {"options": ["ban-keywords"]},
    "whitespace": {
      "options": [
        "check-branch",
        "check-decl",
        "check-operator",
        "check-separator",
        "check-type"
      ]
    }
  }
}
