module.exports = {
  extends: 'airbnb',
  rules: {
    // Rules here will override the 'hackreactor' configuration
    // http://eslint.org/docs/rules/
    'react/require-default-props': [0],
  },
  ignorePatterns: ['jest.config.js', 'test.js', 'setupTests.js', 'babel.config.js', 'server.test.js', 'reactComponents.test.js', 'databaseUtils.test.js', 'webpack.config.js'],
};
