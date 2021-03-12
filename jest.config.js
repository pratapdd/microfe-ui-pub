module.exports = {
  roots: ['<rootDir>/src'],
  transform: {
    '^.+\\.jsx?$': require.resolve('babel-jest'),
  },
  testMatch: ['<rootDir>/src/**/*.spec.js'], // finds test
  moduleDirectories: [
    'node_modules',
    // add the directory with the test-utils.js file, for example:
    'utils', // a utility folder
    __dirname, // the root directory
  ],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  testPathIgnorePatterns: ['/node_modules/', '/public/'],
  transformIgnorePatterns: ['/node_modules/(?!@microfe)'],
  moduleNameMapper: {
    '(.*\\.gql)': '$1.tsx',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/src/__mocks__/fileMock.js',
      "\\.(css|less)$": "<rootDir>/src/__mocks__/styleMock.js"
  },
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'], // setupFiles before the tests are ran
};
