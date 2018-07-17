const path = require('path');

// NOTE: Do not add the following rules (see
// https://github.com/ionic-team/tslint-ionic-rules/commit/065e3e9937104f6ec03e594adf762002616353df):
// - no-unnecessary-type-assertion
// - prefer-for-of
// - no-conditional-assignment

module.exports = {
  'extends': ['tslint:recommended'],
  'rulesDirectory': path.join(path.dirname(require.resolve('tslint-eslint-rules')), 'dist/rules'),
  'rules': {

    // ------
    // TSLint
    // ------

    // Overridden rules (see
    // https://github.com/palantir/tslint/blob/2b8a7374cf0fa28e85d95beb40aafd7cb011d157/src/configs/recommended.ts#L18-L204)

    'align': [true, 'elements', 'members', 'parameters', 'statements'],
    'array-type': [true, 'array'],
    'arrow-parens': false,
    'curly': [true, 'ignore-same-line'],
    'forin': false,
    'indent': {'options': ['spaces', 2]},
    'interface-name': false,
    'jsdoc-format': [true, 'check-multiline-start'],
    'max-classes-per-file': false,
    'max-line-length': false,
    'member-access': [true, 'no-public'],
    'member-ordering': false, // TODO: do something with this rule
    'no-bitwise': false,
    'no-consecutive-blank-lines': false,
    'no-console': false,
    'no-empty-interface': false,
    'no-namespace': false,
    'no-unused-expression': [true, 'allow-fast-null-checks'],
    'no-shadowed-variable': { 'options': true, 'severity': 'warning' },
    'no-string-literal': false,
    'no-unnecessary-type-assertion': false, // see above
    'object-literal-key-quotes': false,
    'object-literal-sort-keys': false,
    'one-variable-per-declaration': false,
    'ordered-imports': { 'options': { 'import-sources-order': 'any', 'named-imports-order': 'lowercase-last' } },
    'prefer-for-of': false, // see above
    'quotemark': {'options': ['single', 'jsx-double']},
    'trailing-comma': false,
    'unified-signatures': false,
    'variable-name': {'options': ['ban-keywords']}, // TODO: make this stricter
    'whitespace': { 'options': ['check-branch', 'check-decl', 'check-operator', 'check-module', 'check-separator', 'check-rest-spread', 'check-type', 'check-type-operator', 'check-preblock'] },

    // Added rules

    'await-promise': true,
    'ban-comma-operator': true,
    'deprecation': { 'options': true, 'severity': 'warning' },
    'encoding': true,
    'linebreak-style': [true, 'LF'],
    'no-duplicate-imports': true,
    'no-duplicate-switch-case': true,
    'no-duplicate-variable': true,
    'no-import-side-effect': true,
    'no-inferrable-types': true,
    'no-irregular-whitespace': true,
    'no-non-null-assertion': true,
    'no-redundant-jsdoc': { 'options': true, 'severity': 'warning' },
    'no-return-await': true,
    'no-sparse-arrays': true,
    'prefer-conditional-expression': true,
    'space-within-parens': 0,

    // -------------------
    // tslint-eslint-rules
    // -------------------

    'no-constant-condition': true,
    'no-control-regex': true,
    'no-duplicate-case': true,
    'no-empty-character-class': true,
    'no-ex-assign': true,
    'no-extra-boolean-cast': true,
    'no-inner-declarations': true,
    'no-invalid-regexp': true,
    'no-invalid-template-strings': true,
    'no-multi-spaces': true,
    'no-regex-spaces': true,
    'no-unexpected-multiline': true,
    'object-curly-spacing': [true, 'always'],
    'ter-no-proto': true,
    'ter-no-script-url': true,
    'ter-no-self-compare': true,
    'valid-typeof': true,

    // TODO: These would be nice to have, but would require a minor undertaking to implement into framework & CLI.
    // 'no-string-literal': true,
    // 'prefer-method-signature': true,
    // 'prefer-readonly': true,
    // 'restrict-plus-operands': true,
    // 'unified-signatures': true,

  }
}
