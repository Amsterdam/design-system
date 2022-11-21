/* eslint-env node */
const nextJest = require('next/jest');

// Next Jest config is great for Jest 27 + React + TypeScript, so let's use that as basis
const createJestConfig = nextJest({
  dir: './',
});

const customJestConfig = {
  // Add more setup options before each test is run
  // setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  // if using TypeScript with a baseUrl set to the root directory then you need the below for alias' to work
  moduleDirectories: ['node_modules', '<rootDir>/'],
  testEnvironment: 'jest-environment-jsdom',
  testPathIgnorePatterns: ['/dist/'],
  // transformIgnorePatterns: ['node_modules/(?!@utrecht/web-component-library-react)'],
};

module.exports = createJestConfig(customJestConfig);
