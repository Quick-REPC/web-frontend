module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    '^.+\\.(css|less|scss)$': 'identity-obj-proxy',
  },
  testRegex: '(/tests/.(?!style-mock)|(\\.|/)(test|spec))\\.jsx?$',
};
