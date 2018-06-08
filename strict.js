module.exports = {
  'extends': ['./tslint'],
  'rules': {

    // ------
    // TSLint
    // ------

    // Overridden from default rules

    'arrow-parens': [true, 'ban-single-arg-parens'],
    'one-variable-per-declaration': true,
    'trailing-comma': [true, { 'multiline': { 'objects': 'always', 'arrays': 'always', 'functions': 'never', 'typeLiterals': 'always' }, 'singleline': 'never' }],
    'ordered-imports': { 'options': { 'grouped-imports': true, 'import-sources-order': 'lowercase-last', 'named-imports-order': 'lowercase-last' } },

    // Overridden from default rules that were re-accepted from recommended (see
    // https://github.com/palantir/tslint/blob/2b8a7374cf0fa28e85d95beb40aafd7cb011d157/src/configs/recommended.ts#L18-L204)

    'curly': true,
    'forin': true,
    'no-conditional-assignment': true,
    'no-consecutive-blank-lines': true,
    'no-console': true,
    'no-empty-interface': true,
    'no-floating-promises': true,
    'no-null-keyword': true,
    'no-redundant-jsdoc': true,
    'no-unnecessary-type-assertion': true,
    'no-unused-expression': true,
    'prefer-for-of': true,
    'prefer-object-spread': true,

    // TODO: https://github.com/palantir/tslint/issues/3375
    // 'no-implicit-dependencies': [true, 'optional'],

    // TODO: look at these later
    // 'newline-before-return': true,
    // 'no-unsafe-any': true,
    // 'prefer-method-signature': true,
    // 'restrict-plus-operands': true,
    // 'strict-type-predicates': true,

  },
};
